import React, { useState, useEffect, useRef } from "react";
import HomePage from "./components/home";
import PortfolioPage from "./components/portfoliopage";
import AboutPage from "./components/aboutPage";
import Footer from "./components/footer";
import ContactPage from "./components/contactPage";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);

  // Create refs for each section
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  
  // Refs map for easy access
  const sectionRefs = {
    home: homeRef,
    portfolio: portfolioRef,
    about: aboutRef,
    contact: contactRef
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Determine which section is currently in view
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = ['home', 'portfolio', 'about', 'contact'];
      
      for (const section of sections) {
        const element = sectionRefs[section].current;
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if section is in viewport (with some buffer)
        if (scrollY >= sectionTop - windowHeight/3 && 
            scrollY < sectionBottom - windowHeight/3) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    // Custom cursor effect
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to section with smooth animation
  const scrollToSection = (sectionId) => {
    const targetSection = sectionRefs[sectionId].current;
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  // Simplified animation effect for a more decent look
  const subtleAnimation = {
    opacity: [0.9, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-300 bg-[#0f0f12] text-white"
      onMouseEnter={() => setCursorHovering(true)}
      onMouseLeave={() => setCursorHovering(false)}
    >
      {/* Simplified cursor for better performance */}
      <div 
        className="fixed w-5 h-5 rounded-full bg-gray-400 opacity-40 pointer-events-none z-50"
        style={{
          transform: `translate(${cursorPosition.x - 10}px, ${cursorPosition.y - 10}px)`,
          display: cursorHovering ? 'block' : 'none'
        }}
      />

      {/* Simple gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12] to-[#16161d] opacity-95"></div>
      </div>

      {/* Minimal scroll indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ transform: `scaleX(${scrollPosition / (document.body.scrollHeight - window.innerHeight) || 0})` }}
      />
      
      <header
        className="fixed w-full z-40 transition-all duration-300 bg-[#071527]/90 backdrop-blur-lg shadow-lg shadow-blue-900/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-500">
                SAKINA.DEV
              </span>
            </motion.div>
            
            <div className="hidden md:flex space-x-10">
              {["home", "portfolio", "about", "contact"].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative text-sm uppercase tracking-wider font-medium ${
                    activeSection === section 
                      ? "text-blue-500" 
                      : "text-gray-300"
                  } hover:text-blue-600 transition-colors`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"
                      layoutId="activeSection"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.button 
                className="md:hidden p-2" 
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden mt-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-b from-blue-900/80 to-blue-800/80 border border-blue-500/20"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {["home", "portfolio", "about", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-6 py-3 ${
                      activeSection === section 
                        ? "text-white font-semibold bg-blue-500/20" 
                        : "text-gray-200"
                    }`}
                    whileHover={{ 
                      x: 5, 
                      backgroundColor: "rgba(37, 99, 235, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="relative z-10">
        {/* Home Section - Clean, minimal styling */}
        <motion.section 
          ref={homeRef} 
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-[#111]/50 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <HomePage />
        </motion.section>

        {/* Portfolio Section - Updated to match About page smoothness */}
        <motion.section 
          ref={portfolioRef} 
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
          <PortfolioPage />
        </motion.section>

        {/* About Section - Already smooth, kept as is */}
        <motion.section 
          ref={aboutRef} 
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
          <AboutPage />
        </motion.section>

        {/* Contact Section - Updated to match About page smoothness */}
        <motion.section 
          ref={contactRef} 
          className="relative min-h-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
          <ContactPage />
        </motion.section>
      </main>

      {/* Simplified back to top button */}
      <AnimatePresence>
        {scrollPosition > 300 && (
          <motion.button
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white z-20 border border-gray-700"
            onClick={() => scrollToSection('home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Add the Footer component directly without props */}
      <Footer />
    </div>
  );
};

export default App;
