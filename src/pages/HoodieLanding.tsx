
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HoodieHeader from '../components/hoodie/HoodieHeader';
import HoodieHero from '../components/hoodie/HoodieHero';
import SocialBar from '../components/hoodie/SocialBar';
import ProductCarousel from '../components/hoodie/ProductCarousel';
import CollectionSection from '../components/hoodie/CollectionSection';
import HoodieTypes from '../components/hoodie/HoodieTypes';
import WinterSpecial from '../components/hoodie/WinterSpecial';
import Newsletter from '../components/hoodie/Newsletter';
import HoodieFooter from '../components/hoodie/HoodieFooter';

gsap.registerPlugin(ScrollTrigger);

const HoodieLanding = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll animations
      gsap.utils.toArray(".fade-up").forEach((element: any) => {
        gsap.fromTo(element, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Staggered animations for grids
      gsap.utils.toArray(".stagger-item").forEach((element: any, index) => {
        gsap.fromTo(element, 
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
            }
          }
        );
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-gray-50">
      <HoodieHeader />
      <HoodieHero />
      <SocialBar />
      <ProductCarousel />
      <CollectionSection />
      <HoodieTypes />
      <WinterSpecial />
      <Newsletter />
      <HoodieFooter />
    </div>
  );
};

export default HoodieLanding;
