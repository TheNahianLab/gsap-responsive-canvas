
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Technology Integration",
      category: "IOT"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Technology Innovation",
      category: "Organic"
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Technology Innovation",
      category: "UI"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Agricultural Services",
      category: "Advanced Irrigation"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get <br />
            <span className="text-green-600">Started Now</span>
          </h2>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-80 mb-1">{service.category}</p>
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-white text-sm">‹</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-gray-600 text-sm">›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
