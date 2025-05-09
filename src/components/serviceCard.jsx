import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
        <ul className="space-y-2">
          {title === "Custom Web Design" && (
            <>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                HTML, CSS, JavaScript
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Modern Frameworks
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Unique & Scalable Designs
              </li>
            </>
          )}

          {title === "React Development" && (
            <>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Component-Based Architecture
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                State Management
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Fast & Interactive UI
              </li>
            </>
          )}

          {title === "Responsive Design" && (
            <>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Mobile-Friendly Layouts
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Cross-Browser Compatibility
              </li>
              <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Adaptive & Fluid Design
              </li>
            </>
          )}
        </ul>
      </div>

      <motion.button
        className="mt-6 text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        whileHover={{ x: 5 }}
      >
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
