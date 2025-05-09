import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Add floating animation for more visual interest
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Background overlay with consistent blue theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#071527]"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section with solid blue instead of gradient */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl font-bold mb-4 text-blue-500"
            animate={floatingAnimation}
          >
            Get In Touch
          </motion.h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        {/* Contact Information and Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information with solid blue instead of gradient */}
          <motion.div
            className="bg-[#0a1a35] rounded-xl p-8 shadow-lg border border-blue-900 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-xl font-bold mb-6 text-white">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-white">Email</h3>
                    <p className="text-gray-300">sakinajanjua26@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-white">Location</h3>
                    <p className="text-gray-300">Hyd, Sindh</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4 text-white">
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-4">
                Feel free to reach out directly via email for the fastest
                response.
              </p>
            </div>
          </motion.div>

          {/* Contact Form with solid blue instead of gradient */}
          <motion.div
            className="bg-[#0a1a35] rounded-xl p-8 shadow-lg border border-blue-900"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-6 text-white">Send Message</h2>
            {submitStatus === "success" ? (
              <motion.div
                className="bg-green-900/30 border border-green-800 text-green-300 px-6 py-4 rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-200"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    placeholder="Sakina Nadeem"
                    required
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    placeholder="sakina@example.com"
                    required
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-gray-200"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    placeholder="Project Discussion"
                    required
                  />
                </motion.div>
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-5 py-4 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-medium py-4 px-6 rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
