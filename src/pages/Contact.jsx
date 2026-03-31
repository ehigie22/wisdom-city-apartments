

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { assets } from "../assets/assets";



const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fap942z", 
        "template_53bwabe", 
        formRef.current,
        "6m4RI_f9nAw0BYNbh" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          formRef.current.reset(); 
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
    <Helmet>
        <title>Contact Us | Wisdom City Homes Benin City</title>
        <meta
          name="description"
          content="Get in touch with Wisdom City Homes for apartment bookings and inquiries in Benin City."
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Wisdom City Homes",
              "url": "${window.location.origin}",
              "logo": "${assets.logo}",
              "description": "Wisdom City Homes provides modern, fully furnished luxury short-let apartments in Benin City with comfort, security, and exceptional service.",
              "sameAs": [
                "https://www.instagram.com/wisdomcityhomesbenin",
                "https://www.tiktok.com/@wisdomcityhomesbenin"
              ]
            }
          `}
        </script>
      </Helmet>
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-0 max-w-[1200px] mx-auto">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Have a question or want to make a booking? Send us a message and we'll
          get back to you shortly.
        </p>
      </div>

      {/* FORM */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 sm:p-8 space-y-6"
      >
        {/* NAME ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF6700]/80 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 mt-2 text-center">
            Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
    </>
    
  );
};

export default Contact;
