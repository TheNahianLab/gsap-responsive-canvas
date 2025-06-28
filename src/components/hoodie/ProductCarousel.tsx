
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = itemsRef.current?.children;
    if (items) {
      // Horizontal scroll animation
      gsap.to(items, {
        x: -100,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      });

      // Individual item animations
      Array.from(items).forEach((item, index) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%"
            }
          }
        );
      });
    }
  }, []);

  const products = [
    { name: 'HOODIE', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'CAP', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'BAG', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section ref={carouselRef} className="py-16 bg-white fade-up">
      <div className="container mx-auto px-4">
        <div ref={itemsRef} className="flex gap-8 overflow-x-auto pb-4">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
                gsap.to(e.currentTarget.querySelector('.explore-btn'), { 
                  scale: 1.1, 
                  backgroundColor: '#000',
                  duration: 0.3 
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                gsap.to(e.currentTarget.querySelector('.explore-btn'), { 
                  scale: 1, 
                  backgroundColor: '#374151',
                  duration: 0.3 
                });
              }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <button className="explore-btn bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
