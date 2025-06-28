
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const CreativeServices = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hover effects for service cards
    const cards = servicesRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        gsap.to(card.querySelector('.service-icon'), { rotation: 360, duration: 0.6, ease: "power2.out" });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(card.querySelector('.service-icon'), { rotation: 0, duration: 0.6, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="text-lime-400 font-bold mb-2">WHAT WE DO</div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            DESIGNING FOR SEAMLESS AND<br />
            ENJOYABLE INTERACTIONS.
          </h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
            ALL SERVICES
          </Button>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white p-8 rounded-2xl shadow-lg stagger-item">
            <div className="service-icon w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-black rounded"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              BRAND BUILDING &<br />STRATEGY.
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">→</span>
            </div>
          </div>

          <div className="service-card bg-blue-600 p-8 rounded-2xl shadow-lg text-white stagger-item">
            <div className="service-icon w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-black rounded"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              MARKETING &<br />CAMPAIGN.
            </h3>
            <p className="text-gray-200 mb-6">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-2xl text-black">→</span>
            </div>
          </div>

          <div className="service-card bg-white p-8 rounded-2xl shadow-lg stagger-item">
            <div className="service-icon w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-black rounded"></div>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-2">CREATIVE DIGITAL SOLUTION.</h4>
              <p className="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
            </div>
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeServices;
