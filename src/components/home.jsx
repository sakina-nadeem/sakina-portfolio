import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";
import ProjectCard from "./projectCard";

// Home Page Component with professional blue theme design
const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Modern, professional hero section with blue theme */}
      <section className="relative min-h-screen flex items-center">
        {/* Elegant, subtle background with blue tones */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a192f]"></div>

          {/* Subtle grid pattern */}
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

          {/* Blue accent elements */}
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-blue-900/10 to-transparent"></div>
          <div className="absolute right-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-blue-900/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <motion.div
              className="mb-6 inline-block"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            ></motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Crafting Digital
              <br />
              <span className="text-blue-500">Experiences</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              I build professional, high-performance web applications that
              deliver exceptional user experiences through clean, maintainable
              code.
            </motion.p>

            {/* Professional action section */}
            <motion.div
              className="flex flex-wrap gap-5 mb-12 justify-center md:justify-start"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-blue-800/30 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-medium rounded-md transition duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Experience highlights with blue theme */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-blue-900/20 border border-blue-800/20 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-blue-400 text-lg font-bold mb-2">3+</div>
                <div className="text-gray-400 text-sm">Years of Experience</div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/20 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-blue-400 text-lg font-bold mb-2">15+</div>
                <div className="text-gray-400 text-sm">Completed Projects</div>
              </div>

              <div className="bg-blue-900/20 border border-blue-800/20 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-blue-400 text-lg font-bold mb-2">8+</div>
                <div className="text-gray-400 text-sm">
                  Technologies Mastered
                </div>
              </div>
            </motion.div>

            {/* Refined social links */}
            <motion.div
              className="flex items-center gap-8 mt-12 justify-center md:justify-start"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://github.com/sakina-nadeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sakina-nadeem-98a823288"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <span className="h-5 w-px bg-gray-700"></span>
              <div className="text-sm text-gray-500 flex items-center gap-3">
                <span>Available for Work</span>
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services section with blue theme */}
      <section id="services" className="py-24 bg-[#0c1b33]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              className="text-blue-400 text-sm uppercase tracking-wider font-light mb-3 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What I Do
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services I Offer
            </motion.h2>
            <motion.div
              className="w-16 h-px bg-blue-600 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard
                icon="💻"
                title="Custom Web Design"
                description="Creating visually stunning, fast, and responsive websites tailored to your needs."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ServiceCard
                icon="⚛️"
                title="React Development"
                description="Building dynamic, high-performance, and scalable web applications with React."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceCard
                icon="📱"
                title="Responsive Design"
                description="Developing cross-platform mobile applications that work seamlessly on all devices."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects section with blue theme */}
      {/* Projects section with blue theme */}
      <section id="projects" className="py-24 bg-[#071527]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-16">
            <div>
              <motion.span
                className="text-blue-400 text-sm uppercase tracking-wider font-light mb-3 inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Recent Work
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-2 transition-colors"
              >
                View All Projects
                <svg
                  className="w-4 h-4"
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
              </a>
            </motion.div>
          </div>

          {/* Add animated project cards for more coolness */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ProjectCard
                image="/images/amazonClone.png"
                title="Amazon Clone"
                date="September 2023"
                url="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ProjectCard
                image="/images/carRental.png"
                title="Car Rental"
                date="April 2024"
                url="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <ProjectCard
                image="/images/leadIn.png"
                title="LeadIn"
                date="March 2024"
                url="#"
              />
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition transform"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              View All Projects
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA section with blue professional design */}
      <section id="contact" className="py-24 relative bg-[#071527]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's build something amazing together
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm currently available for freelance projects and new
              collaborations. If you have a project that needs a professional
              developer, I'd love to discuss it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="mailto:sakinajanjua26@gmail.com"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md inline-block transition duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
