import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Medbook from '/Medbook.png';
import Lion from '/LionCinema.jpg';
import Medbox from '/Medbox.png';
import MediPOS from '/MediPOS.jpg';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const projects = [
    {
      title: "Medbook",
      description: "A comprehensive medicine directory application providing detailed information about medications, dosages, and medical guidance for healthcare professionals and patients.",
      image: Medbook,
      playstore: "https://play.google.com/store/apps/details?id=com.pulsetechltd.medbook&hl=en",
      appstore: "https://apps.apple.com/us/app/medbook-bd/id1641500203"
    },
    {
      title: "Medbox",
      description: "A business-focused medical platform connecting healthcare providers and pharmaceutical businesses with streamlined inventory and distribution management.",
      image: Medbox,
      playstore: "https://play.google.com/store/apps/details?id=com.pulsetechltd.medbox&hl=en",
      appstore: "https://apps.apple.com/us/app/medbox-bd/id1641085153"
    },
    {
      title: "MediPOS Owner",
      description: "A comprehensive point-of-sale system designed specifically for medical businesses, featuring inventory management, sales tracking, and business analytics.",
      image: MediPOS,
      playstore: "https://play.google.com/store/apps/details?id=com.pulsetechltd.owner&hl=en",
      appstore: "https://apps.apple.com/us/app/medipos-owner/id1623117486"
    },
    {
      title: "Lion Cinema",
      description: "A modern cinema experience platform that redefines movie entertainment with advanced booking systems, seat selection, and enhanced user experience.",
      image: Lion,
      playstore: "https://play.google.com/store/apps/details?id=com.pulsetechltd.lion_cinema&hl=en",
      appstore: "https://apps.apple.com/us/app/lion-cinema/id1644910272"
    }
  ];

  return (
    <section id="projects" className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Developed"
          highlight="Projects"
          subtitle="A showcase of applications I've built with passion and precision"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300 hover:border-portfolio-accent/60 hover:shadow-[0_4px_15px_rgba(60,121,158,0.6)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover bg-gray-900/30 transition-transform duration-300 group-hover:scale-110"
                />
                {/* Blur Overlay on Hover */}
                <div className="absolute inset-0 bg-portfolio-bg/80 backdrop-blur-sm opacity-100 transition-all duration-300 flex items-center justify-center">                  <div className="text-center">
                  <h3 className="font-montserrat font-bold text-xl mb-2 text-white">
                    {project.title}
                  </h3>                  
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
                {/* <h3 className="font-montserrat font-bold text-xl mb-2 text-portfolio-text">
                  {project.title}
                </h3> */}
                <p className="text-portfolio-text/70 text-sm text-center">
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