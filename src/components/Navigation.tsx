
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navRef = useRef<HTMLNavElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.5 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold">Nurture</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#technology" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 transition-colors">Sign In</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
              Learn more
            </button>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
              <a href="#technology" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors self-start">
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
