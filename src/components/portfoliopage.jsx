import React from "react";

const PortfolioPage = () => {
  // Image paths using public directory
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "HTML/CSS/Bootstrap",
      image: "/images/amazonClone.png",
      date: "June 15, 2023",
      url: "#",
    },
    {
      id: 2,
      title: "Online Food Delivery",
      category: "Html/tailwind/react",
      image: "/images/OnlineFooddelivery.png",
      date: "April 22, 2024",
      url: "#",
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "html/JS/tailwind/react",
      image: "/images/resturant.png",
      date: "March 10, 2024",
      url: "#",
    },
    {
      id: 4,
      title: "Social Network",
      category: "html/css/JS/Bootstrap",
      image: "/images/socialNetwork.png",
      date: "February 5, 2024",
      url: "#",
    },
    {
      id: 5,
      title: "Car Rental",
      category: "HTML/CSS/JS/Bootstrap",
      image: "/images/carRental.png",
      date: "January 18, 2024",
      url: "#",
    },
    {
      id: 6,
      title: "Furniture Website",
      category: "HTML/Tailwind/React",
      image: "/images/shopping-website.png",
      date: "December 3, 2023",
      url: "#",
    },
    {
      id: 7,
      title: "LeadIn Website",
      category: "HTML/CSS/JS/Bootstrap",
      image: "/images/leadIn.png",
      date: "August 3, 2024",
      url: "#",
    },
    {
      id: 8,
      title: "Travel Website",
      category: "HTML/tailwind/react",
      image: "/images/travelProject.png",
      date: "February 10, 2024",
      url: "#",
    },
    {
      id: 9,
      title: "Online Tutor",
      category: "HTML/Bootstrap/React",
      image: "/images/OnlineTutor.png",
      date: "December 17, 2024",
      url: "#",
    },
  ];

  const getCategoryIcon = (category) => {
    const categories = category.split("/").map((cat) => cat.trim());
    return categories.map((cat) => {
      const lowerCat = cat.toLowerCase();
      if (lowerCat === "react") return <i key={cat} className="fab fa-react text-blue-500 mr-1"></i>;
      if (lowerCat === "html") return <i key={cat} className="fab fa-html5 text-orange-500 mr-1"></i>;
      if (lowerCat === "css") return <i key={cat} className="fab fa-css3-alt text-blue-500 mr-1"></i>;
      if (lowerCat === "js") return <i key={cat} className="fab fa-js-square text-yellow-500 mr-1"></i>;
      if (lowerCat === "bootstrap") return <i key={cat} className="fab fa-bootstrap text-purple-500 mr-1"></i>;
      if (lowerCat === "tailwind") return (
        <i key={cat} className="text-cyan-500 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
            <path fill="currentColor" d="M21.4 18.7c-2.5 0-4.8-.7-6.7-1.8V12H5v24h9v-7.7c1.3.9 2.9 1.4 4.5 1.4 5.3 0 9.6-3.9 9.6-8.7s-4.3-8.7-9.6-8.7zM21.4 24c-2.1 0-4-.9-5.4-2.4.7-1.2 1.1-2.5 1.1-3.9 0-2.1-.9-4-.9-4 .9 0 1.8-.2 2.6-.7 1.5 1 2.7 2.3 3.4 3.9-1.3.6-2.7 1.1-4.1 1.1zM5 32v-3.8c1.4.8 3 .9 4.5.9 2.2 0 4.4-.8 6.1-2.2 1.7 1.4 3.7 2.2 5.9 2.2 4.9 0 9-3.5 9-7.8 0-.8-.1-1.7-.3-2.5 1.4-.8 2.3-2.2 2.3-3.9 0-2.5-2.2-4.7-5.1-4.7-3.1 0-5.6 2.5-5.6 5.6s2.5 5.5 5.6 5.5c.6 0 1.2-.1 1.8-.2.2.7.3 1.4.3 2.1 0 3.1-2.7 5.7-6.1 5.7-2.5 0-4.8-.9-6.7-2.4-1.3 1.2-3 1.9-4.7 1.9z"/>
          </svg>
        </i>
      );
      return <i key={cat} className="fas fa-code text-gray-500 mr-1"></i>;
    });
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Showcasing my best work and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group transform transition-all duration-300 hover:scale-[1.02]">
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;