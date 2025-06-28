
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TechnologySection from '../components/TechnologySection';
import CollaborateSection from '../components/CollaborateSection';
import SolutionsSection from '../components/SolutionsSection';
import FutureSection from '../components/FutureSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main scroll-triggered animations
      gsap.fromTo(".fade-up", 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".fade-up",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Preloader />
      <div ref={mainRef} className="overflow-hidden">
        <Navigation />
        <Hero />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <CollaborateSection />
        <TechnologySection />
        <SolutionsSection />
        <FutureSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
