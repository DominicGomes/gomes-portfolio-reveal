
import { useEffect } from 'react';
import AOS from 'aos';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-portfolio-bg text-portfolio-text min-h-screen font-open-sans">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Tools />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
