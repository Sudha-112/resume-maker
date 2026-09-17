import React from "react";
import { Link } from "react-router";
import { FaFilePdf } from "react-icons/fa";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiDaisyui,
  SiOpenjdk,
  SiSpringboot,
  SiMysql,
  SiJsonwebtokens,
} from "react-icons/si";

const LandingPage = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
              Create Your Perfect Resume with AI
            </h1>
            <p className="py-6 text-lg">
              Build a professional resume in minutes. Just describe yourself,
              and our AI will do the rest!
            </p>
            <Link to={"/generate-resume"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title">AI-Powered</h3>
                <p>
                  Our AI analyzes your input and generates a tailored resume for
                  you.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4"><FaFilePdf className="text-4xl mx-auto text-primary" /></div>
                <h3 className="card-title">Instant PDF Export</h3>
                <p>
                  Download your finished resume as a polished, ready-to-share PDF in one click.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="card-title">Job-Specific Resumes</h3>
                <p>
                  Optimize your resume for specific job roles and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Tech Stack Section */}
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
            Technologies
        </h2>
        <p className="text-center text-base-content/70 mb-12">
             Behind this AI-Resume Maker
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
           { name: "React", Icon: SiReact, color: "#61DAFB" },
           { name: "Vite", Icon: SiVite, color: "#646CFF" },
           { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
           { name: "DaisyUI", Icon: SiDaisyui, color: "#5A0EF8" },
           { name: "Java", Icon: SiOpenjdk, color: "#F89820" },
           { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
           { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
           { name: "JWT", Icon: SiJsonwebtokens, color: "#000000" },
            ].map(({ name, Icon, color }) => (
            <div
              key={name}
              className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
             >
               <div className="card-body items-center text-center py-8">
                   <Icon size={40} color={color} />
                   <h4 className="font-bold mt-3">{name}</h4>
               </div>
            </div>
               ))}
         </div>
      </div>
   </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Resume?
          </h2>
          <p className="mb-8 text-lg">
            Join thousands of users who have landed their dream jobs with our AI
            resume maker.
          </p>
            <Link to={"/generate-resume"} className="btn btn-primary">
              Get Started Now
            </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Resume Maker</h4>
              <p>Your go-to tool for creating professional resumes with AI.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <Link to="/about">About Us</Link>
              <br/>
              <Link to="/services">Services</Link>
              <br/>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="link link-hover">
                Privacy Policy
              </a>
              <br/>
              <a href="#" className="link link-hover">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;