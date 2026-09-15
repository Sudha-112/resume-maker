import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // NOTE: This currently just simulates a submission on the frontend.
  // To make it real, create a POST /api/v1/contact endpoint on the backend
  // (save to DB or send an email) and call it here with axiosClient.
  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Contact form submitted:", data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
    setLoading(false);
  };

  return (
    <div className="bg-base-100">
      <section className="hero py-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="py-4 text-base-content/80">
              Have a question, feedback, or found a bug? We'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-base-content/70">support@airesumemaker.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-base-content/70">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-base-content/70">
                  Faridabad, Haryana, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className="text-error text-sm mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="input input-bordered"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <span className="text-error text-sm mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    placeholder="How can we help?"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <span className="text-error text-sm mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
