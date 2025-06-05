import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Monitor, X } from 'lucide-react';
import { Project } from '@/types/Project';

const projects: Project[] = [
  {
    id: 1,
    title: 'My Web App',
    description: 'A modern responsive web application.',
    longDescription: 'Detailed description of the web app...',
    image: '/images/webapp.jpg',
    technologies: ['React', 'Tailwind', 'TypeScript'],
    githubUrl: 'https://github.com/user/webapp',
    liveUrl: 'https://webapp.example.com',
    type: 'web'
  },
  {
    id: 2,
    title: 'My Android App',
    description: 'A cool Android application.',
    longDescription: 'Detailed description of the Android app...',
    image: '/images/androidapp.jpg',
    technologies: ['Kotlin', 'Jetpack Compose'],
    githubUrl: 'https://github.com/user/androidapp',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example',
    type: 'web'
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
    className="group cursor-pointer animate-fade-in hover-scale"
    style={{ animationDelay: `${delay}ms` }}
    onClick={onClick}
  >
    <div className="bg-gray-800/60 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700/50 hover:border-portfolio-accent/60 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(60,121,158,0.6)]">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Github size={16} className="text-white" />
          </div>
          {project.liveUrl && (
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <ExternalLink size={16} className="text-white" />
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-portfolio-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-400 text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
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

// ========== ProjectModal ==========
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
    <div className="bg-gray-800/80 backdrop-blur-md rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 animate-scale-in">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-gray-200">{project.description}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">About this project</h3>
          <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors border border-white/20 hover:border-white/40"
          >
            <Github size={20} />
            <span>View Code</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-portfolio-accent hover:bg-purple-700 text-white px-6 py-3rounded-lg transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Smartphone size={20} />
              <span>Play Store</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ========== ProjectTabs ==========
interface ProjectTabsProps {
  activeTab: 'web' | 'android';
  onTabChange: (tab: 'web' | 'android') => void;
}

const ProjectTabs: React.FC<ProjectTabsProps> = ({ activeTab, onTabChange }) => (
  <div className="flex justify-center mb-12">
    <div className="bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
      <div className="flex gap-2">
        <button
          onClick={() => onTabChange('web')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
            activeTab === 'web'
              ? 'bg-white text-slate-900 shadow-lg scale-105'
              : 'text-white hover:bg-portfolio-accent'
          }`}
        >
          <Monitor size={20} />
          <span className="font-medium">Web Projects</span>
        </button>
        <button
          onClick={() => onTabChange('android')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
            activeTab === 'android'
              ? 'bg-white text-slate-900 shadow-lg scale-105'
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

  return (
    <div className="relative bg-portfolio-bg text-portfolio-text min-h-screen font-open-sans overflow-hidden">
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
