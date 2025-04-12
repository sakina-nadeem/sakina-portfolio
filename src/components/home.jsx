import ServiceCard from "./serviceCard";
import ProjectCard from "./projectCard";
import SkillCard from "./skillCard";


// Home Page Component
const HomePage = () => {
  
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-grid-white/[0.2]"></div>
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Creative <span className="text-yellow-300">Developer</span> &
                <span className="text-yellow-300"> Designer</span>
              </h1>
              <p className="mt-6 text-xl text-white leading-relaxed">
                I craft elegant solutions through code and design, bringing
                digital experiences to life.
              </p>
              <div className="mt-10 flex space-x-4">
                <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
                  View Portfolio
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-700 transition transform hover:scale-105">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:rotate-3 transition">
                <img
                  src="/images/myProfile.jpeg"
                  alt="Developer Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              icon="💻"
              title="Custom Web Design"
              description="Creating visually stunning, fast, and responsive websites tailored to your needs."
            />
            <ServiceCard
              icon="⚛️"
              title="React Development"
              description="Building dynamic, high-performance, and scalable web applications with React."
            />
            <ServiceCard
              icon="📱"
              title="Responsive Design"
              description="Developing cross-platform mobile applications that work seamlessly on all devices."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="/images/amazonClone.png"
              title="Amazon Clone"
              // category="Web Development"
              date="September 2023"
              url="#"
            />
            <ProjectCard
              image="/images/carRental.png"
              title="Car Rental"
              // category="Mobile Development"
              date="April 2024"
              url="#"
            />
            <ProjectCard
              image="/images/leadIn.png"
              title="LeadIn"
              // category="UI/UX Design"
              date="March 2024"
              url="#"
            />
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition transform hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard title="HTML" percentage={95} />
            <SkillCard title="CSS" percentage={95} />
            <SkillCard title="JS" percentage={90} />
            <SkillCard title="React" percentage={85} />
            <SkillCard title="Node.js" percentage={80} />
            <SkillCard title="UI" percentage={88} />
            <SkillCard title="Responsive" percentage={92} />
            <SkillCard title="Performance " percentage={82} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's work together!
              </h2>
              <p className="mt-4 text-lg">
                Have a project in mind? Let's discuss how I can help bring it to
                life.
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
