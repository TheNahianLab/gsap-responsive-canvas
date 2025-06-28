
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CreativePortfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = portfolioRef.current?.querySelectorAll('.portfolio-item');
    items?.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { 
          scale: 1.05, 
          duration: 0.4, 
          ease: "power2.out",
          zIndex: 10
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { 
          scale: 1, 
          duration: 0.4, 
          ease: "power2.out",
          zIndex: 1
        });
      });
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="text-lime-400 font-bold mb-2">WHO WE ARE</div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            CREATIVITY<br />
            MEETS STRATEGY
          </h2>
        </div>

        <div ref={portfolioRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="slide-left">
            <div className="bg-yellow-400 p-8 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">👑</div>
                <div className="text-2xl font-bold">OVER 18 YEARS OF EXPERIENCE</div>
              </div>
            </div>
          </div>

          <div className="slide-right">
            <div className="bg-blue-600 p-8 rounded-2xl h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <div className="text-2xl font-bold">TRUSTED BY GLOBAL BRANDS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="portfolio-item bg-gray-200 h-48 rounded-xl stagger-item"></div>
          <div className="portfolio-item bg-gray-300 h-48 rounded-xl stagger-item"></div>
          <div className="portfolio-item bg-gray-400 h-48 rounded-xl stagger-item"></div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;
