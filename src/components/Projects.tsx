import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Medbook from '/Medbook.png';
import Lion from '/LionCinema.jpg';
import Medbox from '/Medbox.png';
import MediPOS from '/MediPOS.jpg';
import SectionHeader from './SectionHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectDetails/ProjectCard';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

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
      description: "A user-friendly mobile app that allows you to browse movies, view showtimes, select seats, and securely book tickets at nearby theaters. Features include movie trailers, reviews, and digital ticket storage for a seamless cinema experience.",
      image: Lion,
      playstore: "https://play.google.com/store/apps/details?id=com.pulsetechltd.lion_cinema&hl=en",
      appstore: "https://apps.apple.com/us/app/lion-cinema/id1644910272"
    }
  ];

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Project"
          highlight="Experience"
          subtitle="A showcase of applications I've built with passion and precision"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10 text-right">
          <Link
            to="/project-details"
            className="inline-block px-4 py-2 text-portfolio-accent border border-portfolio-accent rounded-md font-semibold shadow-md hover:bg-portfolio-accent hover:text-white transition-colors duration-300 text-sm">
            See More
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Projects;
