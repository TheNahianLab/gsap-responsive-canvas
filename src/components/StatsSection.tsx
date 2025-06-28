
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced card entrance animation
      gsap.fromTo(".stat-card", 
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8,
          rotationY: -45
        },
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );

      // Counter animations with enhanced effects
      const counters = sectionRef.current?.querySelectorAll('.counter');
      counters?.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        
        gsap.fromTo(counter, 
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
            },
            onUpdate: function() {
              // Add pulsing effect during counting
              if (this.progress() < 1) {
                gsap.to(counter, {
                  scale: 1.05,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                  ease: "power2.inOut"
                });
              }
            }
          }
        );
      });

      // Floating animation for cards
      gsap.to(".stat-card", {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Background pattern animation
      const patterns = sectionRef.current?.querySelectorAll('.bg-pattern');
      patterns?.forEach((pattern, index) => {
        gsap.to(pattern, {
          rotation: 360,
          duration: 20 + index * 5,
          ease: "none",
          repeat: -1
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: 50, suffix: '+', label: 'Years of Experience', icon: '🌱' },
    { number: 200, suffix: '+', label: 'Farm Programs', icon: '🚜' },
    { number: 120000, suffix: '+', label: 'Farms Deployed', icon: '🌾' },
    { number: 15, prefix: '$', suffix: 'B', label: 'Assets Under Advisory', icon: '💰' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="bg-pattern absolute top-10 left-10 w-20 h-20 border border-green-200/30 rounded-full"></div>
      <div className="bg-pattern absolute bottom-10 right-10 w-16 h-16 border-2 border-green-300/20 rounded-full"></div>
      <div className="bg-pattern absolute top-1/2 right-20 w-12 h-12 border border-green-400/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card group">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Number with enhanced styling */}
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2 relative">
                  {stat.prefix}
                  <span className="counter" data-target={stat.number}>0</span>
                  {stat.suffix}
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Label */}
                <p className="text-gray-600 font-medium relative z-10">{stat.label}</p>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-600/10 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
