
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
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current;
    if (cursor) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      };

      const scaleUpCursor = () => {
        gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      };

      const scaleDownCursor = () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      };

      document.addEventListener('mousemove', moveCursor);
      
      // Add cursor effects to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, .cursor-pointer');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', scaleUpCursor);
        el.addEventListener('mouseleave', scaleDownCursor);
      });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', scaleUpCursor);
          el.removeEventListener('mouseleave', scaleDownCursor);
        });
      };
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scrolling
      gsap.to("html", {
        scrollBehavior: "smooth"
      });

      // Enhanced scroll-triggered animations
      gsap.utils.toArray(".fade-up").forEach((element: any) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 100,
            scale: 0.9,
            rotationX: -15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Page transition effects
      gsap.fromTo("section", 
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "section",
            start: "top 90%",
          }
        }
      );

      // Parallax effects for multiple elements
      gsap.utils.toArray(".parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Preloader />
      
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-6 h-6 bg-green-500/30 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
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
