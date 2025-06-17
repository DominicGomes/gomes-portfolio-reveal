import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Code, Settings, Book, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'experience', 'projects', 'tools', 'education', 'contact'];
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'Experience', id: 'experience', icon: Briefcase },
    { label: 'Projects', id: 'projects', icon: Code },
    { label: 'Tools', id: 'tools', icon: Settings },
    { label: 'Education', id: 'education', icon: Book },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-portfolio-bg/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      data-aos="fade-down"
      // data-aos-delay="100"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation - Centered */}
          {windowWidth > 640 && (
            <div className="flex justify-center flex-1 items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 text-sm font-medium text-portfolio-text transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-portfolio-accent'
                      : 'hover:text-portfolio-accent hover:scale-105'
                  }`}
                  // data-aos="fade-down"
                  // data-aos-delay={300 + index * 100}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeSection === item.id ? 'rotate-12' : 'group-hover:rotate-12'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-portfolio-accent transition-all duration-300 ease-out ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-portfolio-accent/10 rounded-lg transition-opacity duration-300 -z-10 ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          )}

          {/* Mobile menu button */}
          {windowWidth <= 640 && (
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-portfolio-text hover:text-portfolio-accent hover:bg-portfolio-accent/10 transition-all duration-300 transform hover:scale-110"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {isOpen ? (
                  <X className="block h-6 w-6 rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="block h-6 w-6 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {windowWidth <= 640 && (
        <div 
          className={`transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 transform -translate-y-4'
          } overflow-hidden bg-portfolio-bg/95 backdrop-blur-sm border-t border-portfolio-accent/20`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-3 px-3 py-3 text-base font-medium font-montserrat text-portfolio-text transition-all duration-300 w-full text-left ${
                  activeSection === item.id
                    ? 'text-portfolio-accent scale-105'
                    : 'hover:text-portfolio-accent hover:scale-105'
                }`}
                // data-aos="fade-in"
                // data-aos-delay={100 + index * 100}
              >
                <item.icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeSection === item.id ? 'rotate-12' : 'group-hover:rotate-12'
                  }`}
                />
                <span>{item.label}</span>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-portfolio-accent transition-all duration-300 ease-out ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></div>
                <div
                  className={`absolute inset-0 bg-portfolio-accent/10 rounded-lg transition-opacity duration-300 -z-10 ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;