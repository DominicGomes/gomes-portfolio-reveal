import SectionHeader from "./SectionHeader";
const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "The Christian Cooperative Credit Union Limited",
      duration: "2024 Apr - Present",
      address:
        "Rev. Fr.Charles J. Young Bhaban, 173/1/A, East Tejturi Bazar, Tejgaon, Dhaka",
      description:
        "As a junior software engineer for a widely known credit union, I work in C# ASP.NET MVC 5 framework, adept at designing and developing robust and secure web applications. Have intermediate knowledge in leveraging MVC architecture to create efficient server-side solutions.",
    },
    {
      title: "Assistant Software Engineer",
      company: "Pulse Tech Limited",
      duration: "2023 Feb - 2024 Mar",
      address: "Pulse Tech Ltd. | 31 Segun Bagicha Rd, Dhaka",
      description:
        "As an assistant software engineer for a reputed software company, I was responsible for designing and developing applications for both iOS and Android platforms. My responsibilities included analyzing user requirements, creating prototypes, and writing clean, efficient code for the application.",
    },
  ];

  return (
    <section id="experience" className="mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Working "
          highlight="Experience"
          subtitle="A journey through my professional career and the impact I've made"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-portfolio-accent/30"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-start mb-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-5 h-5 bg-portfolio-accent rounded-full border-4 border-portfolio-bg z-10"></div>

              {/* Content Card with Hover Effects */}
              <div
                className={`mt-8 lg:mt-0 lg:w-[48%] ${index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                  }`}
              >
                <div className="group relative bg-gray-800/60 backdrop-blur-md rounded-lg p-6 md:p-8 border border-gray-700/50 hover:border-portfolio-accent/60 transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_15px_rgba(60,121,158,0.6)] will-change-transform preserve-3d">
                  {/* Glowing border animation layer */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse z-0"></div> */}

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-portfolio-accent">
                        {exp.title}
                      </h3>
                      <span className="text-sm sm:text-base text-portfolio-text/60 font-medium mt-2 sm:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg text-portfolio-text">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-portfolio-text/60 mb-3 text-justify">
                      {exp.address}
                    </p>
                    <p className="text-portfolio-text/80 leading-relaxed text-sm sm:text-base text-justify">
                      {exp.description}
                    </p>

                    {/* Linear Progress Bar on Hover */}
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-gradient-to-r bg-gradient-to-r from-[#61d9fa] via-[#38bdf8] to-[#2563eb] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
