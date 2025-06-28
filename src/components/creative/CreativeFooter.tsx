
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CreativeFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = footerRef.current?.querySelectorAll('.footer-icon');
    icons?.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 15, duration: 0.3 });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div ref={footerRef} className="text-center space-y-12">
          <div className="fade-up">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              READY TO START YOUR<br />
              CREATIVE PROJECT?
            </h2>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-12 py-4 rounded-full text-xl transition-all duration-300 hover:scale-105">
              GET IN TOUCH
            </button>
          </div>

          <div className="flex justify-center space-x-6 stagger-item">
            <div className="footer-icon w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-black font-bold">f</span>
            </div>
            <div className="footer-icon w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-black font-bold">t</span>
            </div>
            <div className="footer-icon w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-black font-bold">in</span>
            </div>
            <div className="footer-icon w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-black font-bold">ig</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 stagger-item">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <div className="text-2xl font-bold text-lime-400 mb-4">AURELIA</div>
                <p className="text-gray-400">
                  Creative agency specializing in digital solutions and brand development.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">SERVICES</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Branding</li>
                  <li>Web Design</li>
                  <li>Digital Marketing</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">CONTACT</h4>
                <div className="text-gray-400">
                  <p>hello@aurelia.com</p>
                  <p>+1 234 567 8900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CreativeFooter;
