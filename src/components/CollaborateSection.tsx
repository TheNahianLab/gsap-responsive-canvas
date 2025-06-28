
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CollaborateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced parallax background
      gsap.to(backgroundRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Content animation with 3D effect
      gsap.fromTo(contentRef.current, 
        { 
          opacity: 0, 
          x: -100, 
          rotationY: -30,
          z: -100
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          z: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        }
      );

      // Title words animation
      const words = contentRef.current?.querySelectorAll('h2 span');
      if (words) {
        gsap.fromTo(words,
          { opacity: 0, y: 50, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // Play button with premium effects
      gsap.set(buttonRef.current, { 
        boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.7)" 
      });

      gsap.to(buttonRef.current, {
        boxShadow: "0 0 0 20px rgba(239, 68, 68, 0)",
        duration: 2,
        repeat: -1,
        ease: "power2.out"
      });

      // Hover animations for button
      const button = buttonRef.current;
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.15,
          rotation: 360,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      button?.addEventListener('mouseenter', handleMouseEnter);
      button?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button?.removeEventListener('mouseenter', handleMouseEnter);
        button?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden min-h-screen flex items-center"
    >
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-transparent" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: (2 + Math.random() * 3) + 's'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div ref={contentRef} className="collaborate-content text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="block">Collaborate And Learn</span>
              <span className="block">From Industry Experts</span>
              <span className="block">And</span>
              <span className="block text-green-300">Enthusiasts</span>
            </h2>
            
            <div className="flex items-center space-x-6">
              <button 
                ref={buttonRef}
                className="bg-gradient-to-r from-red-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">▶</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="text-lg opacity-90">
                <p className="font-semibold mb-1">Watch Our Story</p>
                <p className="text-sm text-green-200">Discover the future of agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
