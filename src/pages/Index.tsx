
import { useEffect } from 'react';
import AOS from 'aos';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '@/components/Education';
import { SparklesCore } from '@/components/ui/sparkles';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative bg-portfolio-bg text-portfolio-text min-h-screen font-open-sans overflow-x-hidden">
      {/* Full-page gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-portfolio-bg via-gray-900/80 to-portfolio-accent/20"></div>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={120}
        className="absolute inset-0 w-full h-full z-10"
        particleColor="#FFFFFF"
      />
      {/* Content wrapper with higher z-index and responsive spacing */}
      <div className="relative z-10 w-full">
        <Navigation />
        <div className="pt-16 lg:pt-20">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            <Hero />
            <div className="px-4 sm:px-6 lg:px-8">
              <Experience />
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Projects />
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Tools />
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Education />
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Contact />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
