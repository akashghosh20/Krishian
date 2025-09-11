import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 25000,
      label: "Farmers Empowered",
      description: "Smallholder farmers connected to better markets",
      percentage: 85,
      color: "from-krishian-green to-green-400",
      icon: "🌱"
    },
    {
      number: 5000,
      label: "Buyers Served",
      description: "Businesses and consumers accessing fresh produce",
      percentage: 70,
      color: "from-krishian-dark to-green-600",
      icon: "🏪"
    },
    {
      number: 10000,
      label: "Food Waste Reduced",
      description: "Tons of food saved from going to waste",
      percentage: 90,
      color: "from-krishian-green to-emerald-500",
      icon: "♻️"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Animate each stat with delay
            stats.forEach((stat, index) => {
              setTimeout(() => {
                // Animate percentage
                setAnimatedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = stat.percentage;
                  return newStats;
                });

                // Animate numbers
                const duration = 2000;
                const steps = 60;
                const increment = stat.number / steps;
                let current = 0;

                const timer = setInterval(() => {
                  current += increment;
                  if (current >= stat.number) {
                    current = stat.number;
                    clearInterval(timer);
                  }
                  
                  setAnimatedNumbers(prev => {
                    const newNumbers = [...prev];
                    newNumbers[index] = Math.floor(current);
                    return newNumbers;
                  });
                }, duration / steps);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, stats]);

  const CircularProgress = ({ percentage, size = 200, color, index, icon }) => {
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const animatedPercentage = animatedStats[index] || 0;
    const animatedOffset = circumference - (animatedPercentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center group">
        {/* Outer Glow with Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-krishian-green to-krishian-dark opacity-20 blur-xl scale-110 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
        
        {/* Main Circle Container with Enhanced 3D */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-full p-6 shadow-2xl card-3d hover-lift group-hover:scale-105 transition-all duration-500">
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#f3f4f6"
              strokeWidth="20"
              fill="transparent"
              className="drop-shadow-sm"
            />
            {/* Progress Circle with Enhanced Animation */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={`url(#gradient-${index})`}
              strokeWidth="20"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={animatedOffset}
              strokeLinecap="round"
              className="transition-all duration-3000 ease-out drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(140, 198, 63, 0.4))'
              }}
            />
            {/* Animated Dots */}
            <circle
              cx={size / 2 + radius * Math.cos((animatedPercentage * 3.6 - 90) * Math.PI / 180)}
              cy={size / 2 + radius * Math.sin((animatedPercentage * 3.6 - 90) * Math.PI / 180)}
              r="8"
              fill="#8CC63F"
              className="transition-all duration-3000 ease-out"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(140, 198, 63, 0.6))'
              }}
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8CC63F" />
                <stop offset="50%" stopColor="#7AB83A" />
                <stop offset="100%" stopColor="#2E5A27" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center Content with Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <div className="text-3xl font-bold text-gradient-animated mb-1 group-hover:scale-105 transition-transform duration-300">
                {animatedPercentage}%
              </div>
              <div className="text-sm text-gray-500 font-medium group-hover:text-krishian-green transition-colors duration-300">Complete</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background animations removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-8">
            <span className="inline-flex items-center bg-krishian-green bg-opacity-10 text-krishian-dark px-6 py-3 rounded-full text-sm font-medium shimmer hover-glow group">
              <div className="w-3 h-3 bg-krishian-green rounded-full mr-3 pulse-3d group-hover:scale-110 transition-transform duration-300"></div>
              <span className="group-hover:scale-105 transition-transform duration-300">Real Impact, Real Results</span>
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-krishian-dark text-3d hover-scale">Our Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Numbers that speak for our commitment to transforming agriculture through technology and innovation. 
            <span className="block mt-4 text-krishian-green font-semibold">
              Every statistic represents a farmer empowered, a life improved, and a step towards a sustainable future.
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center space-y-8 group"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Enhanced 3D Circular Progress */}
              <div className="flex justify-center">
                <CircularProgress 
                  percentage={stat.percentage} 
                  color={stat.color}
                  index={index}
                  icon={stat.icon}
                />
              </div>
              
              {/* Enhanced Stats Content */}
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-gradient-animated mb-3 text-3d group-hover:scale-110 transition-transform duration-300">
                  {animatedNumbers[index].toLocaleString()}+
                </div>
                <h3 className="text-2xl font-semibold text-krishian-dark mb-4 group-hover:text-krishian-green transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {stat.description}
                </p>
                
                {/* Enhanced Progress Bar */}
                <div className="w-full bg-gray-200/70 backdrop-blur rounded-full h-3 mt-4">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${stat.color} transition-all duration-3000 ease-out relative overflow-hidden`}
                    style={{ width: `${animatedStats[index] || 0}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="text-sm text-gray-500 group-hover:text-krishian-green transition-colors duration-300">
                  {animatedStats[index] || 0}% of target achieved
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-24 text-center fade-in visible">
          <div className="bg-gradient-to-r from-krishian-green to-krishian-dark rounded-3xl p-16 text-white card-3d hover-lift group relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-3d group-hover:scale-105 transition-transform duration-300">
                Join the Agricultural Revolution
              </h3>
              <p className="text-xl mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                Be part of the movement that's transforming how farmers connect with markets and reduce food waste. 
                <span className="block mt-4 text-2xl font-semibold">
                  Together, we're building a sustainable future for agriculture.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-krishian-dark font-semibold px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 glow group-hover:scale-110 relative overflow-hidden">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-krishian-green/10 to-krishian-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="border-2 border-white text-white font-semibold px-10 py-5 rounded-xl hover:bg-white hover:text-krishian-dark transition-all duration-300 transform hover:scale-105 group-hover:scale-110">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
