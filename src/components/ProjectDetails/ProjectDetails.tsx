import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Smartphone, Monitor, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/Project';
import medipos1 from '/medipos1.png';
import medipos2 from '/medipos2.png';
import medipos3 from '/medipos3.png';
import medipos4 from '/medipos4.png';
import medbook1 from '/medbook1.png';
import medbook2 from '/medbook2.png';
import medbook3 from '/medbook3.png';
import medbook4 from '/medbook4.png';
import medbook5 from '/medbook5.png';
import erpImg from '/erp.png';
import erpImg0 from '/erp0.png';
import erpImg1 from '/erp1.png';
import erpImg2 from '/erp2.png';
import erpImg3 from '/erp3.png';
import erpImg4 from '/erp4.png';
import erpImg5 from '/erp5.png';
import erpImg6 from '/erp6.png';
import lionCinema from '/lionCinema1.png';
import lionCinema2 from '/lionCinema2.png';
import lionCinema3 from '/lionCinema3.png';
import medbox1 from '/medboxImg.png';
import medbox2 from '/medbox2.png';
import medbox3 from '/medbox3.png';
import medbox4 from '/medbox4.png';
import medbox5 from '/medbox5.png';
import Medbook from '/MedbookImg.png';
import Lion from '/LionCinema.jpg';
import Medbox from '/medboxImg.png';
import MediPOS from '/MediPos.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Aos from 'aos';
import { SparklesCore } from '../ui/sparkles';

const projects: Project[] = [
  {
    id: "1",
    title: "ERP",
    description: "An ERP solution for financial services.",
    longDescription:
      "A comprehensive ERP solution to manage and streamline all aspects of the financial services. This project is made with the MVC 5 architectural pattern, separating concerns into Models, Views, and Controllers.",
    image: erpImg,
    images: [erpImg0, erpImg1, erpImg2, erpImg3, erpImg4, erpImg5, erpImg6],
    category: "web",
    technologies: ["ASP.Net", "C#", "JavaScript", "SQL Server", "HTML", "CSS"],
    contributions: [
      "Designed and implemented new modules according to the requirements of the management",
      "I generate, integrate, and verify APIs when needed to ensure proper data flow.",
      "Implemented several RDLC reports based on management requirements.",
      "Involed in regular bug fixing on the live application.",
    ],
    highlightColorClass: "bg-emerald-600/40",
  },
  {
    id: "2",
    title: 'Medbox',
    description:
      'A business-focused application for healthcare providers and pharmaceutical businesses.',
    longDescription:
      'Medbox is a medical platform tailored for businesses, connecting healthcare providers with pharmaceutical companies. The app ensures secure data handling and real-time updates for efficient business management.',
    image: Medbox,
    images: [medbox1, medbox2, medbox3, medbox4, medbox5],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.medbox&hl=en',
    appStoreUrl: 'https://apps.apple.com/us/app/medbox-bd/id1641085153',
    category: 'android',
    contributions: [
      'Developed core features for inventory and distribution management.',
      'Implemented secure authentication and data encryption.',
      'Integrated analytics dashboard for business insights.',
    ],
    technologies: ['Flutter', 'Dart'],
    highlightColorClass: "bg-orange-800/40",
  },
  {
    id: "3",
    title: "Lion Cinema",
    description: "A ticket booking application.",
    longDescription:
      "Lion Cinema is a mobile application that enhances the movie-going experience by allowing users to browse movies, view showtimes, select seats, and book tickets securely. The app includes features like movie trailers, user reviews, and digital ticket storage, making it a one-stop solution for cinema enthusiasts.",
    image: Lion,
    images: [lionCinema, lionCinema2, lionCinema3],
    category: "android",
    technologies: ["Flutter", "Dart"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.pulsetechltd.owner&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/medipos-owner/id1623117486",
    contributions: [
      "Designed and implemented the full user-friendly interface for browsing movies and booking tickets.",
      "Published the app on the Play Store and App Store, managed store assets and releases.",
      "Implemented payment gateway integration for secure transactions.",
    ],
    highlightColorClass: "bg-red-900/80",
  },
  {
    id: "4",
    title: "MediPOS Owner",
    description: "A POS application for pharmacy owners",
    longDescription:
      "MediPOS owner is an excellent android application for the Pharmacy owner, which allows them to keep track of all of the day-to-day activities associated with their pharmacies, including sales, purchases, returns, adjustments, and other expenses.",
    image: MediPOS,
    images: [medipos1, medipos2, medipos3],
    category: "android",
    technologies: ["Flutter", "Dart"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.pulsetechltd.owner&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/medipos-owner/id1623117486",
    contributions: [
      "Improved UI and ensured visual consistency across all screens for better usability.",
      "Integrated interactive graphs to visualize sales and performance data.",
      "Published the app on the Play Store and managed store assets and releases.",
      "Added new menu structures to enhance navigation and feature discoverability.",
    ],
    highlightColorClass: "bg-portfolio-accent/60",
  },
  {
    id: "5",
    title: 'Medbook',
    description:
      'A comprehensive medicine directory application.',
    longDescription:
      'Medbook is a robust mobile application designed to serve as a comprehensive medicine directory. It provides detailed information on medications, including dosages, side effects, and medical guidance, catering to both healthcare professionals and patients. The app features a user-friendly interface with search functionality, offline access, and regular updates to ensure accuracy.',
    image: Medbook,
    images: [medbook1, medbook2, medbook3, medbook4, medbook5],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pulsetechltd.medbook&hl=en',
    appStoreUrl: 'https://apps.apple.com/us/app/medbook-bd/id1641500203',
    category: 'android',
    contributions: [
      'Designed and implemented the UI/UX for the mobile application.',
      'Integrated APIs for real-time medicine data retrieval.',
      'Optimized offline storage for seamless user experience.',
    ],
    technologies: ['Flutter', 'Dart'],
    highlightColorClass: "bg-portfolio-accent/60",
  },
];

// ========== ProjectCard ==========
interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, delay }) => (
  <div
    className="group cursor-pointer hover-scale"
    data-aos="zoom-in"
    data-aos-delay={delay}
    onClick={onClick}
  >
    <div className="bg-gray-800/60 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700/50 hover:border-portfolio-accent/60 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(60,121,158,0.6)] will-change-transform preserve-3d">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out px-4 py-2 rounded-full text-sm text-white font-medium border border-white/20 backdrop-blur-sm ${project.highlightColorClass || 'bg-purple-800/40'
              }`}
          >
            Click to view details
          </div>

        </div>

        {/* Technologies overlay */}
        <div className="absolute inset-0 flex flex-wrap items-end p-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-black/70 px-2 py-0.5 text-xs rounded-full border border-portfolio-accent border"
            >
              {tech}
            </span>

          ))}
          {project.technologies.length > 4 && (
            <span className="bg-black/70 px-2 py-0.5 text-xs rounded-full border border-portfolio-accent/30">
              +{project.technologies.length - 4} more
            </span>

          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-portfolio-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

      </div>
    </div>
  </div>
);

// ========== ProjectGrid ==========
interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
    {projects.map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        onClick={() => onProjectClick(project)}
        delay={index * 100}
      />
    ))}
  </div>
);
interface ProjectImageSliderProps {
  images: string[];
  category: 'web' | 'android'; // or whatever other types you support
}

const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({ images, category }) => {
  const imageClass =
    category === 'web'
      ? 'object-contain bg-black' // Add background if needed for spacing
      : 'object-cover';

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        speed={800}
        modules={[Navigation, Autoplay, Pagination]}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-96 overflow-hidden rounded-lg">
              {/* Blurred Background Image */}
              <div className="absolute inset-0 w-full h-full bg-black">
                <img
                  src={img}
                  alt={`Project image ${i + 1} blurred`}
                  className="w-full h-full object-cover blur-2xl scale-110 opacity-60"
                />
              </div>

              {/* Foreground Main Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={img}
                  alt={`Project image ${i + 1}`}
                  className={`max-h-full ${category === 'web' ? 'object-contain' : 'object-cover'} z-10`}
                />
              </div>
            </div>
          </SwiperSlide>

        ))}

        {images.length > 1 && (
          <>
            <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </Swiper>

      <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10" />
    </div>
  );
};

// ========== ProjectModal ==========
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const images = project.images || [project.image];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-lg overflow-hidden transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <span className="text-purple-300 text-sm">
              {project.category === 'web' ? 'Web Application' : 'Android Application'}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-8">
            {/* Project Images + Action Buttons */}
            <div className="relative">
              <ProjectImageSlider images={images} category={project.category} />

              {project.category === 'android' && (
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors shadow"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Play Store</span>
                    </a>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors shadow"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>App Store</span>
                    </a>
                  )}
                </div>
              )}
            </div>


            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">About This Project</h3>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Contribution */}
            {project.contributions && project.contributions.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">My Contributions</h3>
                <div className="space-y-4 text-gray-300">
                  {project.contributions.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
// ========== ProjectTabs ==========
interface ProjectTabsProps {
  activeTab: 'web' | 'android';
  onTabChange: (tab: 'web' | 'android') => void;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ activeTab, onTabChange }) => (
  <div className="flex justify-center mb-12">
    <div className="bg-white/5 backdrop-blur-md rounded-lg p-2 border border-white/10">
      <div className="flex gap-2">
        <button
          onClick={() => onTabChange('web')}
          className={`flex items-center gap-2 px-4 py-2  rounded-md transition-all duration-300 ${activeTab === 'web'
            ? 'bg-white text-slate-900 shadow-lg'
            : 'text-white hover:bg-portfolio-accent'
            }`}
        >
          <Monitor size={20} />
          <span className="font-medium">Web Projects</span>
        </button>
        <button
          onClick={() => onTabChange('android')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${activeTab === 'android'
            ? 'bg-white text-slate-900 shadow-lg'
            : 'text-white hover:bg-portfolio-accent'
            }`}
        >
          <Smartphone size={20} />
          <span className="font-medium">Android Apps</span>
        </button>
      </div>
    </div>
  </div>
);

// ========== Main Page ==========
const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'android'>('web');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) =>
    activeTab === 'web' ? !project.playStoreUrl : !!project.playStoreUrl
  );
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="relative bg-portfolio-bg text-portfolio-text min-h-screen font-open-sans overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={120}
        className="absolute inset-0 w-full h-full z-10"
        particleColor="#FFFFFF"
      />
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-portfolio-bg via-gray-900/80 to-portfolio-accent/20"></div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <ProjectGrid projects={filteredProjects} onProjectClick={setSelectedProject} />
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
