import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Intersection Observer for animations
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
      className="pt-20 sm:pt-24 min-h-screen flex items-center relative overflow-hidden"
      ref={heroRef}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Unified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-krishian-dark/65 via-krishian-dark/45 to-krishian-green/35"></div>
      
      {/* Subtle pattern overlay with unified colors */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(160,199,82,0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(30,58,138,0.2) 0%, transparent 50%)`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center bg-krishian-green/20 text-krishian-white px-6 py-3 rounded-2xl text-sm font-medium backdrop-blur-sm border border-krishian-green/30 shadow-lg">
                <div className="w-2 h-2 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-center">Revolutionizing Agriculture in Bangladesh</span>
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-krishian-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Fair Price for</span>
              <span className="block bg-gradient-to-r from-krishian-green to-krishian-green-light bg-clip-text text-transparent">
                Farmers.
              </span>
              <span className="block">Fresh Food for</span>
              <span className="block bg-gradient-to-r from-krishian-blue to-krishian-blue-light bg-clip-text text-transparent">
                All.
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Krishian connects farmers directly with retailers and wholesalers through technology-driven auctions and direct sales — ensuring transparency, stability, and dignity in agriculture.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="btn-primary btn-hover-unified text-lg px-8 py-4 group w-full sm:w-auto shadow-lg">
                <span className="relative z-10">Join as Farmer</span>
              </button>
              <button className="btn-accent btn-hover-unified text-lg px-8 py-4 group w-full sm:w-auto shadow-lg">
                <span className="relative z-10">Join as Buyer</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Farm-to-Market Flow Illustration */}
            <div className="relative bg-krishian-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-krishian-white/20 shadow-lg">
              <div className="space-y-6">
                {/* Farmer */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-krishian-white text-xl">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-krishian-white font-semibold text-base">Farmer</h3>
                    <p className="text-gray-200 text-sm">Sells crops directly</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-krishian-green to-krishian-blue rounded-full"></div>
                </div>
              
                {/* Krishian Platform */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-krishian-blue to-krishian-blue-light rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-krishian-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-krishian-white font-semibold text-base">Krishian Platform</h3>
                    <p className="text-gray-200 text-sm">Technology-driven auctions</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-krishian-blue to-krishian-green rounded-full"></div>
                </div>
                
                {/* Buyer */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-krishian-white text-xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="text-krishian-white font-semibold text-base">Buyer</h3>
                    <p className="text-gray-200 text-sm">Gets fresh produce</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-krishian-blue/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-krishian-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
