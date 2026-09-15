import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Root from './pages/Root'
import {BrowserRouter , Routes, Route} from "react-router"
import Services from './pages/Services'
import Contact from './pages/Contact'
import GenerateResume from './pages/GenerateResume'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import { Navigate } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
   <AuthProvider>
   <Toaster />
   <Routes>

   <Route  path="/" element={<Root />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path ="home" element={<Home />} />
        <Route path ="about" element={<About />} />
        <Route path = "services" element={<Services />} />
        <Route path = "contact" element={<Contact />} />
        <Route path = "login" element={<Login />} />
        <Route path = "signup" element={<Signup />} />
        <Route
          path = "generate-resume"
          element={
            <ProtectedRoute>
              <GenerateResume />
            </ProtectedRoute>
          }
        />
   </Route>
   </Routes>
   </AuthProvider>
  </BrowserRouter>

  </StrictMode>,
)
