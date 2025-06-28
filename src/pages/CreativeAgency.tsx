
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CreativeHeader from '../components/creative/CreativeHeader';
import CreativeHero from '../components/creative/CreativeHero';
import CreativeStats from '../components/creative/CreativeStats';
import CreativeServices from '../components/creative/CreativeServices';
import CreativePortfolio from '../components/creative/CreativePortfolio';
import CreativeAbout from '../components/creative/CreativeAbout';
import CreativeFooter from '../components/creative/CreativeFooter';

gsap.registerPlugin(ScrollTrigger);

const CreativeAgency = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll animations
      gsap.utils.toArray(".fade-up").forEach((element: any) => {
        gsap.fromTo(element, 
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Staggered animations
      gsap.utils.toArray(".stagger-item").forEach((element: any, index) => {
        gsap.fromTo(element, 
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            }
          }
        );
      });

      // Slide in from left
      gsap.utils.toArray(".slide-left").forEach((element: any) => {
        gsap.fromTo(element, 
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            }
          }
        );
      });

      // Slide in from right
      gsap.utils.toArray(".slide-right").forEach((element: any) => {
        gsap.fromTo(element, 
          { opacity: 0, x: 80 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            }
          }
        );
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white overflow-x-hidden">
      <CreativeHeader />
      <CreativeHero />
      <CreativeStats />
      <CreativeServices />
      <CreativePortfolio />
      <CreativeAbout />
      <CreativeFooter />
    </div>
  );
};

export default CreativeAgency;
