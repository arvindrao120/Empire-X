import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { SendHorizontal, User, Mail, MessageCircle } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "13759b6a-6a22-45b7-8d74-017ce35715b7",
        ...formData,
        redirect: "false",
      }),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(result.message || "Failed to send message.");
    }
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-heading"
      className="w-full"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-sm text-white md:p-24 p-6 justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-red-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        aria-label="Contact Form"
      >
        <Toaster position="top-center" />

        <p className="text-lg bg-red-600 text-white font-medium px-3 py-1 rounded-full animate-pulse">
          Contact Us
        </p>
        <h1
          id="contact-heading"
          className="text-4xl font-bold py-4 text-center animate-fade-in"
        >
          Let’s Get In Touch.
        </h1>
        <p className="max-md:text-sm text-gray-400 pb-10 text-center">
          Get in touch with Himanshu, your expert partner in results-driven
          performance marketing.
        </p>

        <div className="max-w-96 w-full px-4">
          <label htmlFor="name" className="font-medium">
            Full Name
          </label>
          <motion.div
            className="flex items-center mt-2 mb-4 h-10 pl-3 border border-red-400 rounded-full focus-within:ring-2 focus-within:ring-red-500 transition-all overflow-hidden"
            whileFocus={{ scale: 1.02 }}
          >
            <User size={18} className="text-red-400" />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="h-full px-2 w-full outline-none bg-transparent text-white"
              placeholder="Enter your full name"
              required
              aria-required="true"
              aria-label="Full Name"
            />
          </motion.div>

          <label htmlFor="email" className="font-medium mt-4">
            Email Address
          </label>
          <motion.div
            className="flex items-center mt-2 mb-4 h-10 pl-3 border border-red-400 rounded-full focus-within:ring-2 focus-within:ring-red-500 transition-all overflow-hidden"
            whileFocus={{ scale: 1.02 }}
          >
            <Mail size={18} className="text-red-400" />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="h-full px-2 w-full outline-none bg-transparent text-white"
              placeholder="Enter your email address"
              required
              aria-required="true"
              aria-label="Email Address"
            />
          </motion.div>

          <label htmlFor="message" className="font-medium mt-4">
            Message
          </label>
          <motion.div whileFocus={{ scale: 1.01 }} className="relative">
            <MessageCircle
              size={18}
              className="absolute top-3 left-3 text-red-400"
            />
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 mt-2 p-2 bg-transparent border border-red-400 rounded-lg resize-none outline-none focus:ring-2 focus:ring-red-500 text-white"
              placeholder="Enter your message"
              required
              aria-required="true"
              aria-label="Message"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center gap-2 mt-5 cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2.5 w-full rounded-full transition-all shadow-lg shadow-red-900/50"
            aria-label="Submit Contact Form"
          >
            Submit Form <SendHorizontal size={18} />
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}

export default ContactForm;