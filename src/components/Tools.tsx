
const Tools = () => {
  const tools = [
    {
      name: "Android Studio",
      icon: "🤖",
      description: "Native Android Development"
    },
    {
      name: "Visual Studio",
      icon: "💻",
      description: "Full-Stack Development"
    },
    {
      name: "Visual Studio Code",
      icon: "📝",
      description: "Code Editor & Extensions"
    },
    {
      name: "SQL Server Management Studio",
      icon: "🗄️",
      description: "Database Management"
    },
    {
      name: "React",
      icon: "⚛️",
      description: "Frontend Framework"
    },
    {
      name: "Node.js",
      icon: "🚀",
      description: "Backend Runtime"
    },
    {
      name: "Git",
      icon: "📂",
      description: "Version Control"
    },
    {
      name: "Docker",
      icon: "🐳",
      description: "Containerization"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-portfolio-bg to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
            Tools I <span className="text-portfolio-accent">Know</span>
          </h2>
          <p className="text-lg text-portfolio-text/80 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2 text-portfolio-text">
                {tool.name}
              </h3>
              <p className="text-sm text-portfolio-text/60">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Scroll Indicator */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="800">
          <p className="text-sm text-portfolio-text/60">
            Swipe or scroll horizontally on mobile devices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
