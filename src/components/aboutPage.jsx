import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/3 lg:w-1/4 mb-10 md:mb-0"
            variants={itemVariants}
          >
            <div className="sticky top-24">
              <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl">
                {/* Glow effect - changed to blue */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/30 to-blue-400/30 blur-xl"></div>

                {/* Image container with border */}
                <div className="relative overflow-hidden rounded-xl border-2 border-blue-500/30">
                  <motion.img
                    src="public/images/myProfile.jpeg"
                    alt="Developer portrait"
                    className="w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <motion.div
                className="mt-8 text-center"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                  Sakina Developer
                </h2>
                <p className="text-blue-500 font-medium">
                  Frontend Developer & Designer
                </p>

                <div className="flex justify-center mt-4 space-x-4">
                  <motion.a
                    href="https://github.com/sakina-nadeem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    whileHover={{ y: -5, scale: 1.2 }}
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sakina-nadeem-98a823288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    whileHover={{ y: -5, scale: 1.2 }}
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                </div>

                <motion.div
                  className="mt-8"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    onClick={openResumeModal}
                    className="block w-full py-3 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    Explore My Resume
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3 lg:w-3/4 md:pl-12"
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-500">
                About Me
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <motion.p
                className="text-lg leading-relaxed mb-6 text-gray-300"
                variants={itemVariants}
              >
                Hello! I'm Sakina, a passionate frontend developer and designer
                with over 3 years of experience in creating beautiful,
                functional websites. My journey in the world of coding began
                when I was just 18, and I've been in love with it ever since.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed mb-6 text-gray-300"
                variants={itemVariants}
              >
                I specialize in modern web technologies including HTML, CSS, JS,
                React, Node.js, Django and responsive design principles. My
                approach combines technical expertise with a keen eye for
                aesthetics, ensuring that every project I work on not only
                functions flawlessly but looks stunning as well.
              </motion.p>

              <motion.h2
                className="text-2xl font-bold mt-12 mb-6 text-white"
                variants={itemVariants}
              >
                My Journey
              </motion.h2>

              <div className="space-y-8">
                <motion.div
                  className="flex"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"></div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Remote Internship at NovaGenius
                    </h3>
                    <p className="text-blue-400">(June - August 2024)</p>
                    <p className="mt-2 text-gray-300">
                      I had an amazing experience as a Frontend Development
                      Intern, where I worked on responsive web applications,
                      implemented interactive UI features, and collaborated with
                      a team to enhance user experience.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"></div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Onsite Internship at SainCube
                    </h3>
                    <p className="text-blue-400">(May - September 2024)</p>
                    <p className="mt-2 text-gray-300">
                      I had the incredible opportunity to intern as a Full Stack
                      Developer at Saincube (Onsite, 2024), where I worked with
                      HTML, CSS, JavaScript, and the Django framework.
                      Collaborating closely with the Saincube team, I
                      contributed to dynamic web projects, enhanced my
                      problem-solving skills, and gained hands-on experience in
                      both frontend and backend development.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"></div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Former Chair, MUET ACM-W
                    </h3>
                    <p className="text-blue-400">(August 2023 - January 2024)</p>
                    <p className="mt-2 text-gray-300">
                      As the Former Chair of MUET ACM-W, I led a dynamic team,
                      organizing workshops on AI and emerging technologies. I
                      managed events, collaborations, and community engagement,
                      creating impactful learning experiences. This role
                      strengthened my leadership, teamwork, and event management
                      skills. It was a journey of innovation, growth, and
                      empowering others!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"></div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Part-Time Web Developer | PentaByte
                    </h3>
                    <p className="text-blue-400">(August 2024)</p>
                    <p className="mt-2 text-gray-300">
                      As a Part-Time Web Developer at PentaByte, I craft dynamic
                      and efficient web solutions, blending creativity with
                      functionality. Collaborating with a skilled team, I
                      continuously adapt, innovate, and refine user experiences.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.h2
                className="text-2xl font-bold mt-12 mb-6 text-white"
                variants={itemVariants}
              >
                Skills & Expertise
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <h3 className="font-bold mb-2 text-white">Frontend Development</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">React.js</span>
                        <span className="text-blue-500 font-semibold">90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                          style={{ width: "95%" }}
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1, delay: 0.3 }}
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">JavaScript</span>
                        <span className="text-blue-500 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                          style={{ width: "90%" }}
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.4 }}
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Tailwind CSS</span>
                        <span className="text-blue-500 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                          style={{ width: "85%" }}
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="font-bold mb-2 text-white">Backend Development</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Node.js</span>
                        <span className="text-blue-500 font-semibold">70%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                          style={{ width: "90%" }}
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.6 }}
                        ></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Django</span>
                        <span className="text-blue-500 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
                          style={{ width: "85%" }}
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.h2
                className="text-2xl font-bold mt-12 mb-6 text-white"
                variants={itemVariants}
              >
                Education
              </motion.h2>

              <motion.div
                className="space-y-6"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white">
                    Undergraduate in Computer Systems
                  </h3>
                  <p className="text-blue-400">
                    Mehran University of Engineering and Technology Jamshoro
                    (2022 - 2026)
                  </p>
                  <p className="mt-2 text-gray-300">
                    A Computer Systems Undergraduate with a 3.9 GPA, excelling
                    in web development, networking, and team leadership.
                    Passionate about innovation, I thrive in dynamic
                    environments, grasping new skills at lightning speed while
                    actively contributing to tech communities.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Resume Modal with Animations */}
      {showResumeModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-screen overflow-auto border border-blue-500/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">My Resume</h3>
              <motion.button
                onClick={closeResumeModal}
                className="text-gray-400 hover:text-white focus:outline-none"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </motion.button>
            </div>
            <div className="p-6">
              <iframe
                src="documents/CV-Sakina-Nadeem.pdf"
                className="w-full h-96 rounded-lg border border-gray-700"
                title="My Resume"
              ></iframe>
            </div>
            <div className="p-4 border-t border-gray-700 flex justify-end">
              <motion.button
                onClick={closeResumeModal}
                className="py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 mr-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
              <motion.a
                href="documents/CV-Sakina-Nadeem.pdf"
                download="Sakina_Resume.pdf"
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutPage;
