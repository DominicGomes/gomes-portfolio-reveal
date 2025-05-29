
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-gray-900/80 to-portfolio-accent/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/30 to-transparent rounded-full"></div>
                <img
                  src="/lovable-uploads/1b3e834e-896d-4f4a-b329-9221345832d6.png"
                  alt="Dominic Gomes"
                  className="w-full h-full object-cover rounded-full border-4 border-portfolio-accent/30"
                />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left" data-aos="fade-left" data-aos-delay="200">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              Hi, I'm{' '}
              <span className="text-portfolio-accent">Dominic Gomes</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 leading-relaxed text-portfolio-text/90">
              I'm a dedicated Software Engineer with over 2+ years of experience in building robust and user-focused solutions. 
              Specializing in Android development and back-end web development, I have a proven track record of delivering 
              high-quality, scalable applications.
            </p>
            <Button
              onClick={scrollToExperience}
              className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="800">
          <ChevronDown className="w-6 h-6 text-portfolio-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
