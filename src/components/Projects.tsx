import React, { useEffect, useState } from 'react';
import Lion from '/LionCinema.jpg';
import Medbox from '/medboxImg.png';
import MediPOS from '/MediPos.png';
import SectionHeader from './SectionHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectDetails/ProjectCard';
import ProjectModal from './ProjectDetails/ProjectModal';
import lionCinema1 from '/lionCinema1.png';
import lionCinema2 from '/lionCinema2.png';
import lionCinema3 from '/lionCinema3.png';
import lionCinema4 from '/lionCinema4.png';
import medbox1 from '/medboxImg.png';
import medbox2 from '/medbox2.png';
import medbox3 from '/medbox3.png';
import medbox4 from '/medbox4.png';
import medbox5 from '/medbox5.png';
import medipos1 from '/medipos1.png';
import medipos2 from '/medipos2.png';
import medipos3 from '/medipos3.png';
import erpImg from '/erp.png';
import erpImg0 from '/erp0.png';
import erpImg1 from '/erp1.png';
import erpImg2 from '/erp2.png';
import erpImg3 from '/erp3.png';
import erpImg4 from '/erp4.png';
import erpImg5 from '/erp5.png';
import erpImg6 from '/erp6.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      delay: 0 // Explicitly set to zero
    });
  }, []);

  const projects = [
    {
      title: 'Medbox',
      description:
        'A business-focused medical platform connecting healthcare providers and pharmaceutical businesses.',
      longDescription:
        'Medbox is a medical platform tailored for businesses, connecting healthcare providers with pharmaceutical companies. The app ensures secure data handling and real-time updates for efficient business management.',
      image: Medbox,
      images: [medbox1, medbox2, medbox3, medbox4, medbox5],
      playstore: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.medbox&hl=en',
      appstore: 'https://apps.apple.com/us/app/medbox-bd/id1641085153',
      category: 'android',
      contributions: [
        'Developed core features for inventory and distribution management.',
        'Implemented secure authentication and data encryption.',
        'Integrated analytics dashboard for business insights.',
      ],
      technologies: ['Flutter', 'Dart'],
    },
    {
      title: 'MediPOS Owner',
      description:
        'A user-friendly app to keep track of all of the day-to-day activities of a medical business, including sales, purchases, and reports.',
      longDescription:
        'MediPOS Owner is a specialized point-of-sale system for medical businesses, offering tools for inventory management, sales tracking, and detailed business analytics. The app is designed to enhance operational efficiency with a focus on ease of use and scalability for growing businesses.',
      image: MediPOS,
      images: [medipos1, medipos2, medipos3],
      playstore: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.owner&hl=en',
      appstore: 'https://apps.apple.com/us/app/medipos-owner/id1623117486',
      category: 'android',
      contributions: [
        'Built the POS system with real-time sales tracking.',
        'Designed responsive UI for various device sizes.',
        'Integrated reports UI for owner insights.',
      ],
      technologies: ['Flutter', 'Dart'],
    },
    {
      title: 'Lion Cinema',
      description:
        'A user-friendly mobile app that allows you to browse movies, view showtimes, select seats, and securely book tickets for Lion Cinema hall.',
      longDescription:
        'Lion Cinema is a mobile application that enhances the movie-going experience by allowing users to browse movies, view showtimes, select seats, and book tickets securely. The app includes features like movie trailers, user reviews, and digital ticket storage, making it a one-stop solution for cinema enthusiasts.',
      image: Lion,
      images: [lionCinema1, lionCinema2, lionCinema3, lionCinema4],
      playstore: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.lion_cinema&hl=en',
      appstore: 'https://apps.apple.com/us/app/lion-cinema/id1644910272',
      category: 'android',
      contributions: [
        'Developed the ticket booking and seat selection system.',
        'Integrated APIs for movie data and payment processing.',
        'Implemented user authentication and secure payment gateways.',
      ],
      technologies: ['Flutter', 'Dart'],
    },
    // {
    //   title: 'Medbook',
    //   description:
    //     'A comprehensive medicine directory application providing detailed information about medications, dosages, and medical guidance.',
    //   longDescription:
    //     'Medbook is a robust mobile application designed to serve as a comprehensive medicine directory. It provides detailed information on medications, including dosages, side effects, and medical guidance, catering to both healthcare professionals and patients. The app features a user-friendly interface with search functionality, offline access, and regular updates to ensure accuracy.',
    //   image: Medbook,
    //   images: [medbook1, medbook2, medbook3, medbook4, medbook5],
    //   playstore: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.medbook&hl=en',
    //   appstore: 'https://apps.apple.com/us/app/medbook-bd/id1641500203',
    //   category: 'android',
    //   contributions: [
    //     'Designed and implemented the UI/UX for the mobile application.',
    //     'Integrated APIs for real-time medicine data retrieval.',
    //     'Optimized offline storage for seamless user experience.',
    //   ],
    //   technologies: ['Flutter', 'Dart'],
    // },

    // {
    //   title: 'ERP',
    //   description:
    //     'A fintech web application that provides a comprehensive solution for managing all financial transactions.',
    //   longDescription:
    //     'ERP is a comprehensive fintech web application designed to streamline financial transactions and business operations. It offers robust tools for managing accounts, generating reports, and integrating with various financial systems. The platform ensures scalability, security, and real-time data processing for businesses of all sizes.',
    //   image: erpImg,
    //   images: [erpImg0, erpImg1, erpImg2, erpImg3, erpImg4, erpImg5, erpImg6],
    //   category: 'web',
    //   technologies: ['ASP.Net', 'C#', 'JavaScript', 'SQL Server', 'HTML', 'CSS'],
    //   contributions: [
    //     'Designed and implemented new modules according to the requirements of the management.',
    //     'Generated, integrated, and verified APIs to ensure proper data flow and system interoperability.',
    //     'Created several RDLC reports based on management requirements.',
    //     'Regularly debugged and resolved issues on the live system to ensure smooth operation and minimal downtime.',
    //   ],
    //   playstore: '',
    //   appstore: '',
    // },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-0">
          <SectionHeader
          title="Project"
          highlight="Experience"
          subtitle="A showcase of applications I've built with passion and precision"
        />
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 max-w-sm">
              <ProjectCard
                project={project}
                index={index}
                openModal={() => openModal(project)}
              />
            </div>
          ))}
        </div>
         <div className="mt-10 text-center 2xl:text-right">
          <Link
            to="/project-details"
            className="inline-block px-4 py-2 text-portfolio-accent border border-portfolio-accent rounded-md font-semibold shadow-md hover:bg-portfolio-accent hover:text-white transition-colors duration-300 text-sm">
            See More
          </Link>

        </div>
      </div>
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
