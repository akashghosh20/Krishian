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
      className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden"
      ref={heroRef}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center bg-krishian-green bg-opacity-10 text-krishian-dark px-6 py-3 rounded-full text-sm font-medium mb-6 group">
                  <div className="w-3 h-3 bg-krishian-green rounded-full mr-3"></div>
                  <span className="group-hover:scale-105 transition-transform duration-300">Revolutionizing Agriculture</span>
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <div className="space-y-2">
                  <div className="slide-in-left stagger-1">
                    <span className="text-krishian-dark">Empowering</span>
                    <span className="text-gradient-animated ml-4">Farmers.</span>
                  </div>
                  <div className="slide-in-left stagger-2">
                    <span className="text-krishian-dark">Reducing</span>
                    <span className="text-gradient-animated ml-4">Waste.</span>
                  </div>
                  <div className="slide-in-left stagger-3">
                    <span className="text-krishian-dark">Building a</span>
                    <span className="text-gradient-animated ml-4">Better Food Chain.</span>
                  </div>
                </div>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl slide-in-left stagger-4 group">
                We are a tech-enabled agri platform connecting smallholder farmers to high-margin markets through data-driven logistics and real-time pricing ensuring better incomes and less food loss.
                <span className="block mt-4 text-krishian-green font-semibold group-hover:scale-105 transition-transform duration-300">
                  Join the agricultural revolution today!
                </span>
              </p>
            </div>
          
            <div className="flex flex-col sm:flex-row gap-6 slide-in-up stagger-5">
              <button 
                className="btn-primary text-lg px-10 py-5 group relative overflow-hidden"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Join the Movement
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-krishian-green to-krishian-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="btn-secondary text-lg px-10 py-5 group">
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-krishian-green/5 to-krishian-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Farmers working in field"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-krishian-dark/30 via-transparent to-transparent"></div>
              
              {/* Overlay Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(140, 198, 63, 0.3) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(46, 90, 39, 0.3) 0%, transparent 50%)`
                }}></div>
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">25,000+</div>
                <div className="text-sm text-gray-600 font-medium">Farmers Empowered</div>
                <div className="w-full h-1 bg-gradient-to-r from-krishian-green to-krishian-dark rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">10,000+ MT</div>
                <div className="text-sm text-gray-600 font-medium">Food Waste Reduced</div>
                <div className="w-full h-1 bg-gradient-to-r from-krishian-green to-krishian-dark rounded-full mt-2"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-krishian-green rounded-full flex justify-center">
              <div className="w-1 h-3 bg-krishian-green rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
