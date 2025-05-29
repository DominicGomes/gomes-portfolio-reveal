const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description: "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Android Developer",
      company: "Mobile Apps Corp",
      duration: "2022 - 2023",
      description: "Developed native Android applications with focus on user experience and performance optimization.",
      achievements: [
        "Published 3 apps with 50K+ downloads",
        "Reduced app crash rate by 60%",
        "Implemented offline functionality"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "StartUp Ventures",
      duration: "2021 - 2022",
      description: "Built full-stack web applications and gained experience in both frontend and backend development.",
      achievements: [
        "Developed RESTful APIs",
        "Created responsive web interfaces",
        "Collaborated with design team"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-portfolio-bg via-gray-900/90 to-portfolio-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
            My <span className="text-portfolio-accent">Experience</span>
          </h2>
          <p className="text-lg text-portfolio-text/80 max-w-2xl mx-auto">
            A journey through my professional career and the impact I've made
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-portfolio-accent/30"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-portfolio-bg z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-montserrat font-bold text-xl text-portfolio-accent">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-portfolio-text/60 font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold text-lg mb-3 text-portfolio-text">
                    {exp.company}
                  </h4>
                  <p className="text-portfolio-text/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-portfolio-accent mr-2">•</span>
                        <span className="text-sm text-portfolio-text/70">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
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
