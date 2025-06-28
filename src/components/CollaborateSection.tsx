
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CollaborateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".collaborate-content", 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".collaborate-content",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-green-900/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="collaborate-content text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Collaborate And Learn <br />
              From Industry Experts <br />
              And <span className="text-green-300">Enthusiasts</span>
            </h2>
            
            <button className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl hover:bg-red-600 transition-colors">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
