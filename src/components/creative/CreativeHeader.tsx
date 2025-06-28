
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const CreativeHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current?.children || [], 
      { opacity: 0, y: -20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-600">
            AURELIA
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">HOME</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">ABOUT</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">OUR SERVICES</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">PORTFOLIO</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">PAGES</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">CONTACT US</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-medium">
              CREATIVE AGENCY
            </div>
            <div className="text-sm text-gray-600">
              CALL US NOW<br />
              <span className="font-bold">+1 234 567 8900</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CreativeHeader;
