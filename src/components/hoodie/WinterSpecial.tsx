
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WinterSpecial = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
    )
    .fromTo(gridRef.current?.children || [], 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.5"
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white fade-up">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-6xl md:text-8xl font-black text-center mb-4">
          FULL WINTERS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          NEW COLLECTION // LIMITED EDITION
        </p>
        
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="group cursor-pointer"
            onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector('img'), { scale: 1.1, duration: 0.5 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector('img'), { scale: 1, duration: 0.5 })}
          >
            <div className="h-80 overflow-hidden rounded-2xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Winter Hoodie"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">WINTER HOODIE</h3>
            <p className="text-gray-400">Premium winter collection</p>
          </div>
          
          <div 
            className="group cursor-pointer"
            onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector('img'), { scale: 1.1, duration: 0.5 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector('img'), { scale: 1, duration: 0.5 })}
          >
            <div className="h-80 overflow-hidden rounded-2xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Winter Shoes"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">WINTER SHOES</h3>
            <p className="text-gray-400">Comfortable winter footwear</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterSpecial;
