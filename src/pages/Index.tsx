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
import useLenis from '@/hooks/useLenis';
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 0 
    });
  }, []);
  useLenis();
  return (
    <div className="relative bg-portfolio-bg text-portfolio-text min-h-screen font-open-sans overflow-hidden">
      {/* Full-page gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-portfolio-bg via-gray-900/80 to-portfolio-accent/20"></div>
      {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={120}
          className="absolute inset-0 w-full h-full z-10"
          particleColor="#FFFFFF"
        /> */}
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Experience />
        <Projects />
        <Tools />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default Index;
