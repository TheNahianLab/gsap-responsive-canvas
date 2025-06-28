
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".solution-content", 
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".solution-content",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".solution-image", 
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".solution-image",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="solution-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Changing The Game In Farming <br />
              With <span className="text-green-600">Sustainable Practices</span> And <br />
              Cool Technologies, Shaping <br />
              The <span className="text-green-600">Future Of Agriculture</span>
            </h2>
          </div>
          
          <div className="solution-image">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Sustainable farming"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
