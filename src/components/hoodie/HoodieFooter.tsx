
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HoodieFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current?.children || [], 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%"
        }
      }
    );
  }, []);

  return (
    <footer className="bg-black text-white">
      <div ref={footerRef} className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">HOODIE</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {['MEN', 'WOMEN', 'CHILDREN', 'POPULAR'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-gray-400">contact@hoodie.com</p>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div 
            className="h-64 bg-cover bg-center rounded-2xl relative overflow-hidden cursor-pointer group"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
            }}
            onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector('.overlay'), { opacity: 0.9, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector('.overlay'), { opacity: 0.7, duration: 0.3 })}
          >
            <div className="overlay absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">NEW COLLECTION</h3>
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HoodieFooter;
