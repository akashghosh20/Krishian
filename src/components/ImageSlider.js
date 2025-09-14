import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Fair Price for Farmers",
      subtitle: "Fresh Food for All",
      description: "Connecting farmers directly with retailers through technology-driven auctions — ensuring transparency and fair pricing."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Smart Technology",
      subtitle: "AI-Powered Solutions",
      description: "Our platform uses advanced technology to match farmers with buyers, optimizing the agricultural supply chain."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Sustainable Agriculture",
      subtitle: "Building the Future",
      description: "Join us in creating a more sustainable and profitable agricultural ecosystem for Bangladesh."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Direct Connection",
      subtitle: "Farm to Market",
      description: "Eliminate middlemen and get fresh produce directly from farmers to your table."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
        
        {/* Simple dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center bg-krishian-green text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
                  <span className="text-center">Krishian Platform</span>
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">{slides[currentSlide].title}</span>
                <span className="block text-krishian-green">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto">
                  <span className="relative z-10">Join as Farmer</span>
                </button>
                <button className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group text-white border-white hover:bg-white hover:text-krishian-green w-full sm:w-auto">
                  <span className="relative z-10">Join as Buyer</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Visual - Slide Counter */}
            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/30">
                <div className="text-center space-y-4">
                  <div className="text-6xl sm:text-8xl font-bold text-white">
                    {String(currentSlide + 1).padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-sm sm:text-base">
                    of {slides.length}
                  </div>
                  <div className="text-krishian-green text-lg sm:text-xl font-semibold">
                    {slides[currentSlide].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="p-3 rounded-full bg-krishian-green text-white hover:bg-krishian-green/80 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-krishian-green text-white hover:bg-krishian-green/80 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-krishian-green"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default ImageSlider;
