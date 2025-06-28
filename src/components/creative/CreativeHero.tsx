
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const CreativeHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate background
    tl.fromTo(heroRef.current, 
      { background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)" },
      { 
        background: "linear-gradient(135deg, #1e40af 0%, #6366f1 50%, #3b82f6 100%)",
        duration: 2,
        ease: "power2.inOut"
      }
    );

    // Split and animate title letters
    if (titleRef.current) {
      const text = titleRef.current.textContent || '';
      titleRef.current.innerHTML = text.split('').map(char => 
        char === ' ' ? '<span>&nbsp;</span>' : `<span class="char">${char}</span>`
      ).join('');

      tl.fromTo(".char", 
        { opacity: 0, y: 100, rotationX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }, "-=1.5"
      );
    }

    // Animate other elements
    tl.fromTo(".hero-content > *:not(.hero-title)", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=1"
    );

  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-blue-700 pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-400 rounded-full opacity-25"></div>
      </div>

      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="hero-content text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                </div>
                <div className="text-sm">
                  <div className="text-lime-400 font-medium">CREATIVE DEVELOPMENT</div>
                  <div className="text-gray-300">HAPPY CLIENTS</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-6xl lg:text-8xl font-black leading-none">
                  <div ref={titleRef} className="hero-title text-lime-400">CREATIVE</div>
                  <div className="text-white">AGENCY</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-8">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-gray-300">HAPPY CLIENTS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">125+</div>
                    <div className="text-sm text-gray-300">PROJECTS DONE</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">450+</div>
                    <div className="text-sm text-gray-300">REVIEW RECEIVED</div>
                  </div>
                </div>

                <p className="text-gray-200 text-lg max-w-md">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>

                <Button 
                  className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/816d8a88-94cf-45fc-8b08-9564542a8776.png" 
                alt="Creative Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-lime-400 text-black p-4 rounded-full">
              <div className="text-center">
                <div className="text-sm font-bold">Swipe</div>
                <div className="text-xs">Discover Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-lime-400 py-4 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-2xl font-bold mx-8">BRANDING + GRAPHIC DESIGN + WEB DESIGN + DIGITAL MARKETING + BRANDING + GRAPHIC DESIGN + WEB DESIGN + DIGITAL MARKETING</span>
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;
