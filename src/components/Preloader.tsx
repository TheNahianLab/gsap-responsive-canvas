
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Preloader animation
    tl.to(".preloader-text", {
      opacity: 1,
      duration: 0.5
    })
    .to(".preloader-bar", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut"
    })
    .to(".preloader", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => setIsLoaded(true)
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div 
      ref={preloaderRef}
      className="preloader fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <div className="preloader-text opacity-0 text-2xl font-bold text-green-600 mb-8">
          Nurture
        </div>
        <div className="w-64 h-1 bg-gray-200 rounded">
          <div className="preloader-bar h-full bg-green-600 rounded w-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
