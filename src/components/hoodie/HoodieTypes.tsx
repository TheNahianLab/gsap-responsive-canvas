
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HoodieTypes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.type-item');
    if (items) {
      gsap.fromTo(items, 
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    }
  }, []);

  const types = [
    {
      number: '01',
      title: 'SWEATSHIRT',
      description: 'Comfortable and stylish sweatshirts perfect for everyday wear. Made with premium cotton blend for ultimate comfort.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      number: '02',
      title: 'ATHLETIC',
      description: 'High-performance athletic wear designed for active lifestyles. Moisture-wicking fabric keeps you dry during workouts.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {types.map((type, index) => (
          <div 
            key={type.number}
            className={`type-item grid lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
          >
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="flex items-center mb-6">
                <span className="text-6xl font-black text-gray-200 mr-6">{type.number}</span>
                <h3 className="text-3xl font-bold">{type.title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {type.description}
              </p>
              <button 
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                EXPLORE
              </button>
            </div>
            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoodieTypes;
