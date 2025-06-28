
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CreativeAbout = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-left">
            <div className="bg-yellow-400 p-8 rounded-2xl text-black">
              <h3 className="text-3xl font-bold mb-4">
                "WE ARE CREATORS, INNOVATORS, AND STORYTELLERS"
              </h3>
              <p className="text-lg mb-6">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-full"></div>
                <div>
                  <div className="font-bold">John Doe</div>
                  <div className="text-sm">Creative Director</div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-right space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                BRINGING CREATIVE CONCEPTS TO LIFE
              </h2>
              <p className="text-gray-300 text-lg">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="stagger-item">
                <div className="text-3xl font-bold text-lime-400 mb-2">98%</div>
                <div className="text-gray-400">CLIENT SATISFACTION</div>
              </div>
              <div className="stagger-item">
                <div className="text-3xl font-bold text-lime-400 mb-2">24/7</div>
                <div className="text-gray-400">SUPPORT AVAILABLE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeAbout;
