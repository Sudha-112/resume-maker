import React from "react";
import { Link } from "react-router";
import {
  FaMagic,
  FaFileDownload,
  FaLock,
  FaPalette,
  FaEdit,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMagic className="text-3xl text-primary" />,
    title: "AI Resume Generation",
    description:
      "Describe your experience in plain language and let our AI turn it into a structured, professional resume in seconds.",
  },
  {
    icon: <FaEdit className="text-3xl text-primary" />,
    title: "Full Manual Editing",
    description:
      "Fine-tune every section — summary, skills, experience, education, projects — with an easy form-based editor.",
  },
  {
    icon: <FaFileDownload className="text-3xl text-primary" />,
    title: "Export to PDF",
    description:
      "Download your finished resume as a print-ready PDF, ready to attach to any job application.",
  },
  {
    icon: <FaPalette className="text-3xl text-primary" />,
    title: "Clean, Modern Templates",
    description:
      "Choose a layout that fits your industry — from minimal and modern to detailed and traditional.",
  },
  {
    icon: <FaLock className="text-3xl text-primary" />,
    title: "Secure Account & Data",
    description:
      "Your resumes are tied to your own secure account, protected with encrypted passwords and JWT authentication.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-primary" />,
    title: "Works on Any Device",
    description:
      "Build and edit your resume from your laptop, tablet, or phone — the interface adapts to any screen size.",
  },
];

function Services() {
  return (
    <div className="bg-base-100">
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="py-4 text-base-content/80">
              Everything you need to go from "I don't know where to start"
              to a polished, ready-to-send resume.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="card-body">
                  {service.icon}
                  <h3 className="card-title mt-2">{service.title}</h3>
                  <p className="text-base-content/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/generate-resume" className="btn btn-primary btn-lg">
              Try It Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
