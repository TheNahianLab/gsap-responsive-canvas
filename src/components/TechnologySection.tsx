
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TechnologySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-card", 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Farming Precision",
      description: "Drone that can precisely process and operate, with real-time data crop flight operations."
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Crop Surveillance",
      description: "Real-time accurate sensors and devices to track crop growth and field conditions."
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Automated Farming",
      description: "Real-time working robots and tech for healthy crop production and growth optimization."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Gen Solutions For <br />
            <span className="text-green-600">Optimal Crop Growth</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide cutting-edge solutions that help farmers maximize their crop yield and profitability using latest technology. Our advanced monitoring tools enable effective pest control, soil analysis, and real-time crop tracking from soil analysis.
          </p>
        </div>

        <div className="tech-grid grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={tech.image}
                alt={tech.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
