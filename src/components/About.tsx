
import { Download, Code, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative approach with strong communication and mentoring skills"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          <p className="text-lg text-portfolio-text/80 max-w-2xl mx-auto">
            Get to know more about my background, approach, and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div data-aos="fade-right">
            <h3 className="font-montserrat font-bold text-2xl mb-6 text-portfolio-accent">
              My Journey & Philosophy
            </h3>
            <div className="space-y-4 text-portfolio-text/80 leading-relaxed">
              <p>
                My journey in software development began with a curiosity about how things work behind the scenes. 
                Over the past 2+ years, I've had the privilege of working on diverse projects that have shaped my 
                understanding of both technical excellence and user experience.
              </p>
              <p>
                I specialize in Android development and backend web development, with a strong foundation in creating 
                applications that are not just functional, but also intuitive and performant. My approach centers 
                around understanding user needs and translating them into robust technical solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <Button
                className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-portfolio-accent mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg mb-2 text-portfolio-text">
                      {highlight.title}
                    </h4>
                    <p className="text-portfolio-text/70">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
