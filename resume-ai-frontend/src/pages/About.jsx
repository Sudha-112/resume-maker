import React from "react";
import { FaBullseye, FaRobot, FaShieldAlt, FaUsers } from "react-icons/fa";

function About() {
  return (
    <div className="bg-base-100">
      {/* Hero */}
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">About AI Resume Maker</h1>
            <p className="py-4 text-base-content/80">
              We help job seekers turn a simple description of themselves
              into a polished, professional, ATS-friendly resume — in
              minutes, powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base-content/80 leading-relaxed">
              Writing a resume from scratch is stressful and time-consuming.
              Our mission is simple: let you focus on your career story while
              AI handles the formatting, structuring, and wording — so every
              resume you send out looks professional and gets noticed by
              recruiters and hiring software alike.
            </p>
          </div>
          <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-200">
            <div className="stat">
              <div className="stat-title">Resumes Generated</div>
              <div className="stat-value text-primary">10K+</div>
            </div>
            <div className="stat">
              <div className="stat-title">Avg. Time to Build</div>
              <div className="stat-value text-secondary">2 min</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaRobot className="text-3xl text-primary mb-2" />
                <h3 className="card-title text-base">AI-First</h3>
                <p className="text-sm text-base-content/70">
                  We use AI to save your time, not to replace your voice.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaShieldAlt className="text-3xl text-primary mb-2" />
                <h3 className="card-title text-base">Privacy First</h3>
                <p className="text-sm text-base-content/70">
                  Your account and data are protected with secure,
                  encrypted authentication.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaBullseye className="text-3xl text-primary mb-2" />
                <h3 className="card-title text-base">Result Focused</h3>
                <p className="text-sm text-base-content/70">
                  Every feature is built to help you land more interviews.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <FaUsers className="text-3xl text-primary mb-2" />
                <h3 className="card-title text-base">For Everyone</h3>
                <p className="text-sm text-base-content/70">
                  From students to senior professionals — built for every
                  career stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
