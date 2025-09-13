import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CrisisAlertSection = () => {
  const [moneyLost, setMoneyLost] = useState(5.9);
  const [produceWasted, setProduceWasted] = useState(4.5);
  const [farmersAffected, setFarmersAffected] = useState(3.2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Simulate live updating numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setMoneyLost(prev => prev + (Math.random() * 0.1));
      setProduceWasted(prev => prev + (Math.random() * 0.05));
      setFarmersAffected(prev => prev + (Math.random() * 0.02));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    { 
      label: 'Farmer', 
      icon: '👨‍🌾',
      description: 'Sells at low price',
      color: 'from-red-500 to-red-600'
    },
    { 
      label: 'Local Trader', 
      icon: '🚚',
      description: 'Adds 20-30% markup',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      label: 'Arot', 
      icon: '🏪',
      description: 'Wholesale distribution',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      label: 'City Market', 
      icon: '🏬',
      description: 'Retail preparation',
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'Retailer', 
      icon: '🛒',
      description: 'Final markup',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Consumer', 
      icon: '👥',
      description: 'Pays 2-3x original price',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const crisisStats = [
    {
      icon: "💰",
      value: "৳5.9Cr",
      label: "Lost Daily",
      description: "Due to middleman markup",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "🍅",
      value: "4.5K TON",
      label: "Wasted Daily",
      description: "Fresh produce goes bad",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "👨‍🌾",
      value: "3.2K+",
      label: "Farmers Affected",
      description: "Earning below cost",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Critical Alert Banner */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-red-100 text-red-700 px-6 py-3 rounded-pill text-sm font-medium mb-6 animate-pulse">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">🚨 CRITICAL ALERT: Bangladesh Agriculture Crisis</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            The Hidden Crisis in
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-8">
            Bangladesh Agriculture
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every second, Bangladesh loses thousands of taka and tons of fresh produce due to systematic inefficiencies. 
            <span className="block mt-4 text-2xl font-bold text-red-600">
              Watch the crisis unfold in real-time.
            </span>
          </p>
        </motion.div>

        {/* Live Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {crisisStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-card p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-gray-100 group-hover:border-red-200 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{stat.icon}</span>
            </div>

                  {/* Value */}
                  <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {index === 0 && `৳${moneyLost.toFixed(1)}Cr`}
                    {index === 1 && `${produceWasted.toFixed(1)}K TON`}
                    {index === 2 && `${farmersAffected.toFixed(1)}K+`}
            </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Live Indicator */}
                  <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <span>Live updating • BD Time</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 300}ms`
                      }}
                    ></div>
                  </div>
            </div>
              </div>
            </motion.div>
          ))}
          </div>

        {/* Supply Chain Crisis Flow */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-card border border-red-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                                linear-gradient(-45deg, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
                The Broken Supply Chain
              </h3>
              
              {/* Steps Flow */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-card p-6 border border-gray-200 group-hover:border-red-300 group-hover:shadow-lg transition-all duration-300">
                      {/* Step Number */}
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                        {index + 1}
            </div>
                      
                      {/* Icon */}
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
            </div>
                      
                      {/* Label */}
                      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {step.label}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
          </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:flex items-center justify-center mt-4">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 relative">
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-red-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                        </div>
            </div>
                    )}
                  </motion.div>
                ))}
            </div>
              
              {/* Crisis Summary */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-red-100 text-red-700 px-6 py-3 rounded-pill text-sm font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
                  <span className="font-semibold">6 Steps • 30% Wastage • 200-300% Price Hike</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
        </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                🚨 This Crisis Ends Now
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Krishian is breaking the chain of middlemen, reducing waste, and ensuring fair prices for both farmers and consumers. 
                <span className="block mt-4 text-2xl font-semibold">
                  Join the agricultural revolution today!
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 font-semibold px-8 py-4 rounded-card hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Stop the Crisis
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-card hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrisisAlertSection;
