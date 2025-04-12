import React, { useState } from "react";

const AboutPage = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="sticky top-24">
              <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl">
                <img
                  src="images/myProfile.jpeg"
                  alt="Developer portrait"
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold">Sakina Developer</h2>
                <p className="text-indigo-600 font-medium">
                  Frontend Developer & Designer
                </p>

                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href="https://github.com/sakina-nadeem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
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
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sakina-nadeem-98a823288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
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
                  </a>
                  {/* <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a> */}
                  {/* <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a> */}
                </div>

                <div className="mt-8">
                  <button
                    onClick={openResumeModal}
                    className="block w-full py-3 px-6 text-center bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                  >
                    Explore My Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Hello! I'm Sakina, a passionate frontend developer and designer
                with over 3 years of experience in creating beautiful,
                functional websites. My journey in the world of coding began
                when I was just 18, and I've been in love with it ever since.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I specialize in modern web technologies including HTML, CSS, JS,
                React, Node.js, Django and responsive design principles. My
                approach combines technical expertise with a keen eye for
                aesthetics, ensuring that every project I work on not only
                functions flawlessly but looks stunning as well.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">My Journey</h2>

              <div className="space-y-8">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="w-0.5 h-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Remote Internship at NovaGenius
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (June - August 2024)
                    </p>
                    <p className="mt-2">
                      I had an amazing experience as a Frontend Development
                      Intern, where I worked on responsive web applications,
                      implemented interactive UI features, and collaborated with
                      a team to enhance user experience.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="w-0.5 h-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Onsite Internship at SainCube
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (May - September 2024)
                    </p>
                    <p className="mt-2">
                      I had the incredible opportunity to intern as a Full Stack
                      Developer at Saincube (Onsite, 2024), where I worked with
                      HTML, CSS, JavaScript, and the Django framework.
                      Collaborating closely with the Saincube team, I
                      contributed to dynamic web projects, enhanced my
                      problem-solving skills, and gained hands-on experience in
                      both frontend and backend development.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="w-0.5 h-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Remote Internship at CodeAlpha
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (november - december 2023)
                    </p>
                    <p className="mt-2">
                      My first internship as a Frontend Developer at CodeAlpha
                      (Remote) was a valuable learning experience. I worked with
                      HTML, CSS, and JavaScript, built responsive designs, and
                      improved my problem-solving skills, laying the foundation
                      for my development journey.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="w-0.5 h-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Former Chair, MUET ACM-W
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (August 2023 - January 2024)
                    </p>
                    <p className="mt-2">
                      As the Former Chair of MUET ACM-W, I led a dynamic team,
                      organizing workshops on AI and emerging technologies. I
                      managed events, collaborations, and community engagement,
                      creating impactful learning experiences. This role
                      strengthened my leadership, teamwork, and event management
                      skills. It was a journey of innovation, growth, and
                      empowering others!
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                    <div className="w-0.5 h-full bg-indigo-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Part-Time Web Developer | PentaByte
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      (August 2024)
                    </p>
                    <p className="mt-2">
                      As a Part-Time Web Developer at PentaByte, I craft dynamic
                      and efficient web solutions, blending creativity with
                      functionality. Collaborating with a skilled team, I
                      continuously adapt, innovate, and refine user experiences.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                Skills & Expertise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Frontend Development</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>React.js</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>JavaScript</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Tailwind CSS</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Backend Development</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Node.js</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Django</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Education</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">
                    Undergraduate in Computer Systems
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mehran University of Engineering and Technology Jamshoro
                    (2022 - 2026)
                  </p>
                  <p className="mt-2">
                    A Computer Systems Undergraduate with a 3.9 GPA, excelling
                    in web development, networking, and team leadership.
                    Passionate about innovation, I thrive in dynamic
                    environments, grasping new skills at lightning speed while
                    actively contributing to tech communities.
                  </p>
                </div>
              </div>

              {/* <h2 className="text-2xl font-bold mt-12 mb-6">Get In Touch</h2>

              <p className="text-lg leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions. Feel free to contact
                me using the form below or through social media.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 text-white">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">My Resume</h3>
              <button
                onClick={closeResumeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
              </button>
            </div>
            <div className="p-6">
              <iframe
                src="documents/CV-Sakina-Nadeem.pdf"
                className="w-full h-96"
                title="My Resume"
              ></iframe>
            </div>
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={closeResumeModal}
                className="py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 mr-2"
              >
                Close
              </button>
              <a
                href="documents/CV-Sakina-Nadeem.pdf"
                download="Sakina_Resume.pdf"
                className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
