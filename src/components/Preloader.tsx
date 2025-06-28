
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Create animated particles
    const particles = particlesRef.current;
    if (particles) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-green-500/30 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particles.appendChild(particle);
        
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          opacity: 0,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          ease: "power1.out"
        });
      }
    }

    const tl = gsap.timeline();
    
    // Logo entrance with spectacular effect
    tl.fromTo(logoRef.current, 
      { scale: 0, rotation: -360, opacity: 0 },
      { 
        scale: 1, 
        rotation: 0, 
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      }
    )
    .to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
    // Text reveal with typewriter effect
    .fromTo(textRef.current?.children || [],
      { opacity: 0, y: 20, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5"
    );

    // Progress animation with realistic loading
    const progressTl = gsap.timeline({ delay: 0.5 });
    progressTl.to({}, {
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
        
        gsap.to(progressRef.current, {
          width: `${prog}%`,
          duration: 0.1,
          ease: "none"
        });
      }
    });

    // Final exit animation
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 2.5,
      ease: "power2.inOut",
      onComplete: () => setIsLoaded(true)
    }, "-=0.3")
    .to(logoRef.current, {
      rotation: 360,
      scale: 0,
      duration: 0.8,
      ease: "back.in(1.7)"
    }, "-=0.8");

    // Logo floating animation
    gsap.to(logoRef.current, {
      y: 10,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      tl.kill();
      progressTl.kill();
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 bg-gradient-to-br from-white via-green-50 to-white z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Animated particles background */}
      <div ref={particlesRef} className="absolute inset-0" />
      
      <div className="text-center relative z-10">
        {/* Animated logo */}
        <div ref={logoRef} className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden">
            <span className="text-white font-bold text-2xl relative z-10">N</span>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Animated text */}
        <div ref={textRef} className="mb-12">
          <div className="text-4xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent mb-2">
            {'Nurture'.split('').map((letter, index) => (
              <span key={index} className="inline-block">{letter}</span>
            ))}
          </div>
          <div className="text-gray-600 font-medium">
            {'Growing the Future'.split('').map((letter, index) => (
              <span key={index} className="inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
            ))}
          </div>
        </div>
        
        {/* Enhanced progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Loading</span>
            <span className="text-sm font-semibold text-green-600">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div 
              ref={progressRef}
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full relative overflow-hidden shadow-sm"
              style={{ width: '0%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-green-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-green-300/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 border border-green-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
    </div>
  );
};

export default Preloader;
