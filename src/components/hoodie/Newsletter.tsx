
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    tl.fromTo(sectionRef.current, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(formRef.current?.children || [], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.5"
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      scale: 1.05,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-cover bg-center relative fade-up"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            SUBSCRIBE TO OUR
          </h2>
          <h3 className="text-5xl md:text-6xl font-black mb-8">
            NEWSLETTER
          </h3>
          
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
