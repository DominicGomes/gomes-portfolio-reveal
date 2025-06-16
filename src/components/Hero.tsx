import { ChevronDown, Download, Briefcase } from 'lucide-react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import ConsoleText from '@/components/Contents/ConsoleText'; // Adjust the path as needed
import heroImg from '/Picsart_25-05-22_11-18-36-462-fotor-bg-remover-20250524171354.png';
import { useState } from 'react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      if (e.currentTarget.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
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
          {/* <div className="order-2 lg:order-1" data-aos="fade-right">
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
          </div> */}
          <div className="md:w-[70%] flex justify-center md:justify-end">

            <div className="relative w-[28rem] h-[28rem] mx-auto"> {/* Increased size */}

              {/* Glowing border effect (outer blur) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-accent/30 to-blue-500/20 rounded-2xl blur-lg opacity-60 z-0"></div>

              {/* Card container with image and overlaid bluish shade */}
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 p-1 rounded-2xl backdrop-blur-sm border border-gray-700/30 z-10 shadow-xl w-full h-full">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Shade overlay (from circular image block) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/30 rounded-2xl z-10"></div>

                  {/* Image */}
                  <img
                    src={heroImg}
                    alt="Dominic Gomes"
                    className="w-full h-full object-cover object-center rounded-2xl z-0"
                  />
                </div>
              </div>

              {/* Accent blur elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full blur-lg z-0"></div>
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
                <Icon icon="pepicons-pop:cv"/>
                Resume
              </Button>

            </div>
          </div>
        </div>
      </div>

      {/* Chevron Icon - Absolutely positioned within section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20" data-aos="fade-up" data-aos-delay="800">
        <Icon icon="icon-park-solid:down-two" className="text-xl text-portfolio-accent/70" />
      </div>
    </section>
  );
};

export default Hero;