
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Search, ShoppingCart, User } from 'lucide-react';

const HoodieHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo(logoRef.current, 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(navRef.current?.children || [], 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(iconsRef.current?.children || [], 
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.3"
    );

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: 2,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div ref={logoRef} className="text-2xl font-bold text-black">
            HOODIE
          </div>
          
          <div ref={navRef} className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">CATEGORIES</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">NEW PRODUCT</a>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div ref={iconsRef} className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-8">
          {['MEN', 'WOMEN', 'CHILDREN', 'POPULAR'].map((item, index) => (
            <button 
              key={item}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition-all duration-300"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HoodieHeader;
