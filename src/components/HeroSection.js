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
        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(11, 110, 79, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(246, 165, 0, 0.1) 0%, transparent 50%)`
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
              <span className="inline-flex items-center bg-krishian-green/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-pill text-xs sm:text-sm font-medium backdrop-blur-sm border border-krishian-green/50">
                <div className="w-2 h-2 bg-krishian-green rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <span className="text-center">Revolutionizing Agriculture in Bangladesh</span>
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Fair Price for</span>
              <span className="block bg-gradient-to-r from-krishian-green to-krishian-accent bg-clip-text text-transparent">
                Farmers.
              </span>
              <span className="block">Fresh Food for</span>
              <span className="block bg-gradient-to-r from-krishian-accent to-krishian-green bg-clip-text text-transparent">
                All.
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Krishian connects farmers directly with retailers and wholesalers through technology-driven auctions and direct sales — ensuring transparency, stability, and dignity in agriculture.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto">
                <span className="relative z-10">Join as Farmer</span>
              </button>
              <button className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group text-white border-white/50 hover:bg-white hover:text-krishian-dark w-full sm:w-auto">
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
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
            <div className="space-y-4 sm:space-y-6">
                {/* Farmer */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-krishian-green rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Farmer</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Sells crops directly</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-krishian-green to-krishian-accent"></div>
              </div>
              
                {/* Krishian Platform */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-krishian-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Krishian Platform</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Technology-driven auctions</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-krishian-accent to-krishian-green"></div>
                </div>
                
                {/* Buyer */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-krishian-green rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Buyer</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">Gets fresh produce</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-krishian-accent/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-krishian-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
