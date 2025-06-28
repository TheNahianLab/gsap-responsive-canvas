
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CreativeStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Counter animation
    const counters = statsRef.current?.querySelectorAll('.counter');
    counters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      
      gsap.to(counter, {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        }
      });
    });
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="fade-up">
            <div className="text-4xl lg:text-6xl font-bold text-lime-400 counter" data-target="500">0</div>
            <div className="text-gray-400 mt-2">Happy Clients</div>
          </div>
          <div className="fade-up">
            <div className="text-4xl lg:text-6xl font-bold text-lime-400 counter" data-target="125">0</div>
            <div className="text-gray-400 mt-2">Projects Done</div>
          </div>
          <div className="fade-up">
            <div className="text-4xl lg:text-6xl font-bold text-lime-400 counter" data-target="450">0</div>
            <div className="text-gray-400 mt-2">Reviews Received</div>
          </div>
          <div className="fade-up">
            <div className="text-4xl lg:text-6xl font-bold text-lime-400 counter" data-target="15">0</div>
            <div className="text-gray-400 mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeStats;
