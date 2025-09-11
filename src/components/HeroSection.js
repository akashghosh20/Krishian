import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef(null);
  

  useEffect(() => {
    // Intersection Observer for simple fade/slide animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = heroRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 min-h-[90vh] md:min-h-screen flex items-center relative overflow-hidden"
      ref={heroRef}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1684691583342-0dfafc6942cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuZ2xhZGVzaCUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Dark, subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10"></div>
      {/* Soft vignette to frame content */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_80%_at_10%_40%,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.55)_70%)] opacity-70"></div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-10 items-start">
          {/* Left Content */}
          <motion.div className="space-y-8 max-w-6xl bg-white/5 md:bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center bg-white/15 text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-medium mb-6 group backdrop-blur-[2px] ring-1 ring-white/20">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-krishian-green rounded-full mr-3 ring-2 ring-white/40"></div>
                  <span className="group-hover:scale-105 transition-transform duration-300">Revolutionizing Agriculture</span>
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
                <div className="space-y-2">
                  <div className="slide-in-left stagger-1">
                    <span className="text-white">Empowering</span>
                    <span className="ml-4 bg-gradient-to-r from-krishian-green to-emerald-400 bg-clip-text text-transparent">Farmers.</span>
                  </div>
                  <div className="slide-in-left stagger-2">
                    <span className="text-white">Reducing</span>
                    <span className="ml-4 bg-gradient-to-r from-emerald-400 to-krishian-green bg-clip-text text-transparent">Waste.</span>
                  </div>
                  <div className="slide-in-left stagger-3">
                    <span className="text-white">Building a</span>
                    <span className="ml-4 bg-gradient-to-r from-krishian-green to-emerald-400 bg-clip-text text-transparent">Better Food Chain.</span>
                  </div>
                </div>
              </h1>
              
              <p className="text-base md:text-xl text-gray-100/90 leading-relaxed max-w-4xl slide-in-left stagger-4 group drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
                We are a tech-enabled agri platform connecting smallholder farmers to high-margin markets through data-driven logistics and real-time pricing ensuring better incomes and less food loss.
                <span className="block mt-4 text-krishian-green font-semibold group-hover:scale-105 transition-transform duration-300">
                  Join the agricultural revolution today!
                </span>
              </p>
            </div>
          
            <div className="flex flex-col sm:flex-row gap-5 slide-in-up stagger-5">
              <button 
                className="btn-primary text-lg px-10 py-5 group relative overflow-hidden shadow-[0_12px_24px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_32px_rgba(16,185,129,0.45)] transition-shadow"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Join the Movement
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-krishian-green to-krishian-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="btn-secondary text-lg px-10 py-5 group !text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-colors">
                <span className="text-black relative z-10 group-hover:scale-105 transition-transform duration-300 text-white">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-krishian-green/5 to-krishian-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Removed right image per request; background now shows farming visuals */}
      </div>
    </section>
  );
};

export default HeroSection;
