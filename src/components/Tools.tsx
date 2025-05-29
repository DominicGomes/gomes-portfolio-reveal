import 'animate.css';
import SectionHeader from './SectionHeader';
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
  ];

  return (
    <section id="tools" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tools I"
          highlight="Know"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] max-w-xs group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:transform hover:scale-105"
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
      </div>
    </section>
  );
};

export default Tools;