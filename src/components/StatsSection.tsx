
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animations
      const counters = sectionRef.current?.querySelectorAll('.counter');
      counters?.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.fromTo(counter, 
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="fade-up">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              <span className="counter" data-target="50">0</span>+
            </div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          
          <div className="fade-up">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              <span className="counter" data-target="200">0</span>+
            </div>
            <p className="text-gray-600">Farm Programs</p>
          </div>
          
          <div className="fade-up">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              <span className="counter" data-target="120000">0</span>+
            </div>
            <p className="text-gray-600">Farms Deployed</p>
          </div>
          
          <div className="fade-up">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
              $<span className="counter" data-target="15">0</span>B
            </div>
            <p className="text-gray-600">Assets Under Advisory</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
