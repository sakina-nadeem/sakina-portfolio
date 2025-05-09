import React from "react";

// Portfolio Page Component
const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "HTML/CSS/Bootstrap",
      image: "public/images/amazonClone.png",
      date: "June 15, 2023",
      url: "#",
    },
    {
      id: 2,
      title: "Online Food Delivery",
      category: "Html/tailwind/react",
      image: "public/images/OnlineFooddelivery.png",
      date: "April 22, 2024",
      url: "#",
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "html/JS/tailwind/react",
      image: "public/images/resturant.png",
      date: "March 10, 2024",
      url: "#",
    },
    {
      id: 4,
      title: "Social Network",
      category: "html/css/JS/Bootstrap",
      image: "public/images/socialNetwork.png",
      date: "February 5, 2024",
      url: "#",
    },
    {
      id: 5,
      title: "Car Rental",
      category: "HTML/CSS/JS/Bootstrap",
      image: "public/images/carRental.png",
      date: "January 18, 2024",
      url: "#",
    },
    {
      id: 6,
      title: "Furniture Website",
      category: "HTML/Tailwind/React",
      image: "public/images/shopping-website.png",
      date: "December 3, 2023",
      url: "#",
    },
    {
      id: 7,
      title: "LeadIn Website",
      category: "HTML/CSS/JS/Bootstrap",
      image: "public/images/leadIn.png",
      date: "August 3, 2024",
      url: "#",
    },
    {
      id: 8,
      title: "Travel Website",
      category: "HTML/tailwind/react",
      image: "public/images/travelProject.png",
      date: "Februray 10, 2024",
      url: "#",
    },
    {
      id: 9,
      title: "Online Tutor",
      category: "HTML/Bootstrap/React",
      image: "public/images/OnlineTutor.png",
      date: "December 17, 2024",
      url: "#",
    },
  ];

  // Function to get the appropriate icon based on category
  const getCategoryIcon = (category) => {
    const categories = category.split("/").map((cat) => cat.trim()); // Split and trim categories
    const icons = categories.map((cat) => {
      switch (cat.toLowerCase()) {
        case "react":
          return <i key={cat} className="fab fa-react text-blue-500"></i>; // React icon
        case "html":
          return <i key={cat} className="fab fa-html5 text-orange-500"></i>; // HTML5 icon
        case "css":
          return <i key={cat} className="fab fa-css3-alt text-blue-500"></i>; // CSS3 icon
        case "js":
          return <i key={cat} className="fab fa-js-square text-yellow-500"></i>; // JavaScript icon
        case "bootstrap":
          return <i key={cat} className="fab fa-bootstrap text-purple-500"></i>; // Bootstrap icon
        case "tailwind":
          // Custom Tailwind logo as SVG
          return (
            <i key={cat} className="text-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M21.4 18.7c-2.5 0-4.8-.7-6.7-1.8V12H5v24h9v-7.7c1.3.9 2.9 1.4 4.5 1.4 5.3 0 9.6-3.9 9.6-8.7s-4.3-8.7-9.6-8.7zM21.4 24c-2.1 0-4-.9-5.4-2.4.7-1.2 1.1-2.5 1.1-3.9 0-2.1-.9-4-.9-4 .9 0 1.8-.2 2.6-.7 1.5 1 2.7 2.3 3.4 3.9-1.3.6-2.7 1.1-4.1 1.1zM5 32v-3.8c1.4.8 3 .9 4.5.9 2.2 0 4.4-.8 6.1-2.2 1.7 1.4 3.7 2.2 5.9 2.2 4.9 0 9-3.5 9-7.8 0-.8-.1-1.7-.3-2.5 1.4-.8 2.3-2.2 2.3-3.9 0-2.5-2.2-4.7-5.1-4.7-3.1 0-5.6 2.5-5.6 5.6s2.5 5.5 5.6 5.5c.6 0 1.2-.1 1.8-.2.2.7.3 1.4.3 2.1 0 3.1-2.7 5.7-6.1 5.7-2.5 0-4.8-.9-6.7-2.4-1.3 1.2-3 1.9-4.7 1.9z"
                />
              </svg>
            </i>
          );
        default:
          return <i key={cat} className="fas fa-code text-gray-500"></i>; // Default code icon
      }
    });

    return <div className="flex space-x-2">{icons}</div>; // Return icons wrapped in a div with space
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">My Portfolio</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Showcasing my best work and projects
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <a href={project.url} className="block">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Display the icon for the category */}
                      <span className="flex items-center space-x-2 text-sm font-semibold">
                        {getCategoryIcon(project.category)}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
