
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const HoodieHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    
    // Animated text reveal
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(mainTitleRef.current?.children || [], 
      { opacity: 0, y: 100, rotationX: -90 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    )
    .fromTo(imageRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }, "-=0.5"
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    );

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 10,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Pulsing effect for CTA
    gsap.to(ctaRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 ref={titleRef} className="text-sm font-medium text-gray-600 mb-4 tracking-widest">
              THE BEST HOODIES ARE ONLY HERE
            </h2>
            
            <h1 ref={mainTitleRef} className="text-7xl md:text-9xl font-black text-black mb-8 leading-none">
              {'HOODIE'.split('').map((letter, index) => (
                <span key={index} className="inline-block">{letter}</span>
              ))}
            </h1>
            
            <div ref={ctaRef} className="inline-flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
              <span className="text-sm font-medium">SWIPE</span>
              <div className="w-px h-6 bg-white/30"></div>
              <span className="text-sm">DISCOVER NOW</span>
            </div>
          </div>
          
          <div ref={imageRef} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Three people wearing hoodies" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoodieHero;
