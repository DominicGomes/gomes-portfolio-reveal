import React, { useEffect, useState } from 'react';
import { Smartphone, Monitor, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types/Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProjectImageSliderProps {
  images: string[];
  category: 'web' | 'android'; 
}

const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({ images, category }) => {
  const imageClass =
    category === 'web'
      ? 'object-contain bg-black' 
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
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'web'
            ? 'bg-white text-slate-900 shadow-lg'
            : 'text-white hover:bg-portfolio-accent'
            }`}
        >
          <Monitor size={20} />
          <span className="font-medium">Web Projects</span>
        </button>
        <button
          onClick={() => onTabChange('android')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'android'
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
export default ProjectModal;