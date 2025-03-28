import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact/submit",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        alert("Success!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert(response.data.error || "something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("error sendding message!");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            />

            {/* Message Input */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-60 md:w-full mx-auto p-3 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black font-semibold rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
