import React, { useState, useEffect } from "react";
import HomePage from "./components/home";
import PortfolioPage from "./components/portfoliopage";
import AboutPage from "./components/aboutPage";
import Footer from "./components/footer";
import ContactPage from "./components/contactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "portfolio":
        return <PortfolioPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 20
            ? darkMode
              ? "bg-gray-800 shadow-lg"
              : "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-indigo-600">PORT</span>
              <span>FOLIO</span>
            </div>
            <div className="hidden md:flex space-x-10">
              <button
                onClick={() => setCurrentPage("home")}
                className={`${
                  currentPage === "home" ? "text-indigo-600 font-bold" : ""
                } hover:text-indigo-600 transition-colors`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("portfolio")}
                className={`${
                  currentPage === "portfolio" ? "text-indigo-600 font-bold" : ""
                } hover:text-indigo-600 transition-colors`}
              >
                Portfolio
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className={`${
                  currentPage === "about" ? "text-indigo-600 font-bold" : ""
                } hover:text-indigo-600 transition-colors`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`${
                  currentPage === "contact" ? "text-indigo-600 font-bold" : ""
                } hover:text-indigo-600 transition-colors`}
              >
                Contact
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
              <button className="md:hidden p-2 " onClick={toggleMenu}>
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-2 bg-indigo-50 dark:bg-gray-800 rounded-lg text-white">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("portfolio");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-700"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-700"
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-700"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="pt-20">{renderPage()}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
