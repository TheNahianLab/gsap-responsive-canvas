
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".journey-text", 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".journey-text",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(".journey-image", 
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".journey-image",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="journey-image">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Agricultural landscape"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="mt-4 text-right text-sm text-gray-500">
              See Real Growing Experience
            </div>
          </div>
          
          <div className="journey-text">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Journey to a <br />
              <span className="text-green-600">Perfection.</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">2019</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Despite Advances In Agri-Tech, Traditional Labor-Intensive Farming Still Highlights Ongoing Inefficiencies.
                </p>
              </div>
              
              <div className="flex space-x-8">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Organic fresh</h4>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Bio-artificial organ</h4>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
