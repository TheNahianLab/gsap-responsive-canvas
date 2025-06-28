
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const particles = particlesRef.current;
    if (particles) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particles.appendChild(particle);
        
        // Animate each particle
        gsap.to(particle, {
          y: -100 - Math.random() * 200,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 2,
          repeat: -1,
          ease: "power1.out"
        });
      }
    }

    // Enhanced background parallax
    gsap.to(backgroundRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Main timeline with premium effects
    const tl = gsap.timeline({ delay: 3 });
    
    tl.fromTo(titleRef.current?.children || [], 
      { opacity: 0, y: 100, rotationX: -90 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1.2, 
        stagger: 0.3,
        ease: "back.out(1.7)"
      }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 50, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      }, "-=0.5"
    )
    .fromTo(buttonRef.current, 
      { opacity: 0, scale: 0, rotation: 180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3")
    .to(buttonRef.current, {
      boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)",
      duration: 0.5,
      ease: "power2.out"
    });

    // Continuous text glow animation
    gsap.to(titleRef.current, {
      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Button hover animations
    const button = buttonRef.current;
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.1,
        boxShadow: "0 10px 40px rgba(34, 197, 94, 0.6)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 5px 20px rgba(34, 197, 94, 0.3)",
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
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Animated particles */}
      <div ref={particlesRef} className="absolute inset-0" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Bring Fresh Growth
          </span>
          <span className="block bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent">
            To Agriculture.
          </span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto font-light">
          Experience innovation agriculture technology that impact life. 
          Grow future with <span className="text-green-300 font-semibold">advanced farming</span>.
        </p>
        
        <button 
          ref={buttonRef}
          className="bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group"
        >
          <span className="relative z-10">Get Started →</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Enhanced floating elements with physics */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-green-400/40 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-green-300/30 rounded-full"></div>
      <div className="absolute top-1/2 left-1/6 w-4 h-4 border border-white/20 rounded-full"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 border border-green-400/30 rounded-full"></div>
    </section>
  );
};

export default Hero;
