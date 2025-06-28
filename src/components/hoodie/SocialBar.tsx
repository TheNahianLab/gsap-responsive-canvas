
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SocialBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(barRef.current?.children || [], 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 90%"
        }
      }
    );
  }, []);

  const socialLinks = [
    { icon: Instagram, name: 'INSTAGRAM' },
    { icon: Facebook, name: 'FACEBOOK' }, 
    { icon: Twitter, name: 'TWITTER' }
  ];

  return (
    <div className="bg-white py-8 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div ref={barRef} className="flex justify-center items-center space-x-12 md:space-x-16">
          {socialLinks.map(({ icon: Icon, name }, index) => (
            <a 
              key={name}
              href="#" 
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors group"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            >
              <Icon size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium hidden md:block">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
