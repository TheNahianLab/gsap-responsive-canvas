
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CollectionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(filtersRef.current?.children || [], 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.3"
    )
    .fromTo(gridRef.current?.children || [], 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.2"
    );
  }, []);

  const filters = ['HOODIE', 'CAPS & BAGS', 'OUTERWEAR', 'SHOES', 'POPULAR'];
  const products = [
    { id: 1, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', price: '$49.99' },
    { id: 2, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', price: '$29.99' },
    { id: 3, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', price: '$39.99' },
    { id: 4, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', price: '$54.99' },
    { id: 5, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', price: '$24.99' },
    { id: 6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', price: '$44.99' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 fade-up">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-black text-center mb-12">
          OUR COLLECTION
        </h2>
        
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button 
              key={filter}
              className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            >
              {filter}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="stagger-item bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -10, duration: 0.3 });
                gsap.to(e.currentTarget.querySelector('img'), { scale: 1.1, duration: 0.5 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, duration: 0.3 });
                gsap.to(e.currentTarget.querySelector('img'), { scale: 1, duration: 0.5 });
              }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt="Product"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">{product.price}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
