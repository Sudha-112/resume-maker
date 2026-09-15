import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { loginUser, registerUser } from "../api/AuthService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, restore the session from localStorage (if any)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const persistSession = (authResponse) => {
    const loggedInUser = {
      userId: authResponse.userId,
      fullName: authResponse.fullName,
      email: authResponse.email,
      role: authResponse.role,
    };
    localStorage.setItem("token", authResponse.token);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const login = async ({ email, password }) => {
    const authResponse = await loginUser({ email, password });
    persistSession(authResponse);
    toast.success(`Welcome back, ${authResponse.fullName}!`);
    return authResponse;
  };

  const signup = async ({ fullName, email, password }) => {
    const authResponse = await registerUser({ fullName, email, password });
    persistSession(authResponse);
    toast.success("Account created successfully!");
    return authResponse;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an <AuthProvider>");
  }
  return context;
}
