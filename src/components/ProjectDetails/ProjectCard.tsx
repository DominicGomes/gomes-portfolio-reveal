import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    playstore: string;
    appstore: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="group relative"
      data-aos="flip-up"
      data-aos-delay={index * 100}
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 group-hover:border-portfolio-accent/60 group-hover:shadow-[0_4px_15px_rgba(60,121,158,0.6)] transition-all duration-500 ease-in-out">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover bg-gray-900/30 transition-transform duration-300 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-portfolio-bg/80 backdrop-blur-sm opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <div className="text-center pointer-events-auto">
              <h3 className="font-montserrat font-bold text-xl mb-2 text-white">{project.title}</h3>
              <div className="flex gap-3 justify-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                  onClick={() => window.open(project.playstore, "_blank")}
                >
                  <Icon icon="logos:google-play-icon" />
                  Playstore
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                  onClick={() => window.open(project.appstore, "_blank")}
                >
                  <Icon icon="logos:apple-app-store" />
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="p-6">
          <p className="text-portfolio-text/70 text-sm text-center">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
