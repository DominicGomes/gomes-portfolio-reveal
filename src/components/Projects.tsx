
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured Android e-commerce application with payment integration, real-time notifications, and offline support.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      playstore: "https://play.google.com/store",
      appstore: "https://apps.apple.com"
    },
    {
      title: "Task Management System",
      description: "A comprehensive project management web application built with React and Node.js, featuring real-time collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      playstore: "https://play.google.com/store",
      appstore: "https://apps.apple.com"
    },
    {
      title: "Weather Forecast App",
      description: "Cross-platform weather application with location-based forecasts, weather alerts, and beautiful animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      playstore: "https://play.google.com/store",
      appstore: "https://apps.apple.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      playstore: "https://play.google.com/store",
      appstore: "https://apps.apple.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4">
            Developed <span className="text-portfolio-accent">Projects</span>
          </h2>
          <p className="text-lg text-portfolio-text/80 max-w-2xl mx-auto">
            A showcase of applications I've built with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Blur Overlay on Hover */}
                <div className="absolute inset-0 bg-portfolio-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-montserrat font-bold text-xl mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 px-4">
                      {project.description}
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button
                        size="sm"
                        className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white"
                        onClick={() => window.open(project.playstore, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Playstore
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                        onClick={() => window.open(project.appstore, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        App Store
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info (Always Visible) */}
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-2 text-portfolio-text">
                  {project.title}
                </h3>
                <p className="text-portfolio-text/70 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
