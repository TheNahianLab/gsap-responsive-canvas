
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    
    // Enhanced entrance animation
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    )
    .fromTo(logoRef.current, 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" }, "-=0.5"
    )
    .fromTo(menuItemsRef.current?.children || [], 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.3"
    );

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: 3,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Scroll-based navigation background blur effect
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        scrub: true,
      },
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.fromTo('.mobile-menu-item', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: "back.out(1.7)" }
      );
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div ref={logoRef} className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Nurture</span>
          </div>
          
          <div ref={menuItemsRef} className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'Products', 'Portfolio', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="relative text-gray-700 hover:text-green-600 transition-all duration-300 font-medium group"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn more
            </button>
          </div>

          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {['Home', 'About Us', 'Products', 'Portfolio', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="mobile-menu-item text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="mobile-menu-item bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-800 transition-all duration-300 self-start shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
