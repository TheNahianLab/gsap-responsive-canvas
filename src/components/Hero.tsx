
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 });
    
    tl.fromTo(titleRef.current?.children || [], 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(buttonRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6 }
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Bring Fresh Growth</span>
          <span className="block">To Agriculture.</span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Experience innovation agriculture technology that impact life. 
          Grow future with advanced farming.
        </p>
        
        <button 
          ref={buttonRef}
          className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          Get Started →
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
};

export default Hero;
