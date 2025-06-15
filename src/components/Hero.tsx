import { ChevronDown, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsoleText from '@/components/Contents/ConsoleText'; // Adjust the path as needed
import heroImg from '/Picsart_25-05-22_11-18-36-462-fotor-bg-remover-20250524171354.png';

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
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="relative">
              <div className='w-80 h-80 backdrop-blur-sm lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden shadow-lg'>
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative ">
                  <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/30 rounded-full"></div>
                  <img
                    src={heroImg}
                    alt="Dominic Cleary Gomes"
                    className="w-full h-full object-cover rounded-full border-4 border-portfolio-accent/30"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Hero Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left" data-aos="fade-left" data-aos-delay="200">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              <ConsoleText
                prefix="Hi, I'm"
                highlightText=" Dominic Cleary Gomes"
                id="text"
                highlightClass="text-portfolio-accent"
              />
            </h1>
            <p className="text-lg lg:text-xl mb-8 leading-relaxed text-portfolio-text/90 text-justify">
              I'm a dedicated Software Engineer with over 2+ years of experience in building robust and user-focused solutions.
              Specializing in Android development and back-end web development, I have a proven track record of delivering
              high-quality, scalable applications.
            </p>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-4">
              <Button
                onClick={scrollToExperience}
                className="text-portfolio-accent border border-portfolio-accent rounded-md font-semibold bg-gradient-to-tr from-portfolio-accent/30 to-transparent hover:bg-portfolio-accent hover:text-white transition-colors duration-300 text-sm px-8 py-3">
                <Briefcase className="w-4 h-4" />
                Explore My Work
              </Button>

              <Button
                onClick={() => window.open('/RESUME.pdf', '_blank')}
                className="text-portfolio-accent border border-portfolio-accent rounded-md font-semibold bg-gradient-to-tr from-portfolio-accent/30 to-transparent hover:bg-portfolio-accent hover:text-white transition-colors duration-300 text-sm px-6 py-3"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>

            </div>
          </div>
        </div>
      </div>

      {/* Chevron Icon - Absolutely positioned within section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20" data-aos="fade-up" data-aos-delay="800">
        <ChevronDown className="w-6 h-6 text-portfolio-accent" />
      </div>
    </section>
  );
};

export default Hero;