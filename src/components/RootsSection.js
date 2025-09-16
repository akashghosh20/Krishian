import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const RootsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    farmers: 0,
    gdp: 0,
    workforce: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 16.5,
      suffix: "M",
      label: "Farmers",
      description: "85% small & marginal",
      color: "from-krishian-green to-green-500",
      icon: "👨‍🌾"
    },
    {
      number: 12,
      suffix: "%+",
      label: "GDP Contribution",
      description: "Agriculture's share of GDP",
      color: "from-krishian-accent to-orange-500",
      icon: "📈"
    },
    {
      number: 40,
      suffix: "%",
      label: "Workforce",
      description: "Employed in agriculture",
      color: "from-blue-500 to-blue-600",
      icon: "👥"
    }
  ];

  const challenges = [
    {
      icon: "💸",
      title: "Low Income",
      description: "Farmers often earn less than their cost due to middlemen",
      stat: "60% below cost"
    },
    {
      icon: "📦",
      title: "Poor Supply Chain",
      description: "Disorganized supply chain prevents export growth",
      stat: "Limited exports"
    },
    {
      icon: "🌱",
      title: "Small Holdings",
      description: "Most farmers have very small land holdings",
      stat: "0.5 acres avg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate numbers
            const duration = 2000;
            const steps = 60;
            
            // Animate farmers count
            const farmersIncrement = 16.5 / steps;
            let farmersCurrent = 0;
            const farmersTimer = setInterval(() => {
              farmersCurrent += farmersIncrement;
              if (farmersCurrent >= 16.5) {
                farmersCurrent = 16.5;
                clearInterval(farmersTimer);
              }
              setAnimatedStats(prev => ({ ...prev, farmers: farmersCurrent }));
            }, duration / steps);

            // Animate GDP
            const gdpIncrement = 12 / steps;
            let gdpCurrent = 0;
            const gdpTimer = setInterval(() => {
              gdpCurrent += gdpIncrement;
              if (gdpCurrent >= 12) {
                gdpCurrent = 12;
                clearInterval(gdpTimer);
              }
              setAnimatedStats(prev => ({ ...prev, gdp: gdpCurrent }));
            }, duration / steps);

            // Animate workforce
            const workforceIncrement = 40 / steps;
            let workforceCurrent = 0;
            const workforceTimer = setInterval(() => {
              workforceCurrent += workforceIncrement;
              if (workforceCurrent >= 40) {
                workforceCurrent = 40;
                clearInterval(workforceTimer);
              }
              setAnimatedStats(prev => ({ ...prev, workforce: workforceCurrent }));
            }, duration / steps);
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

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-krishian-dark to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 110, 79, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(246, 165, 0, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="inline-flex items-center bg-krishian-green/20 text-krishian-green px-6 py-3 rounded-pill text-sm font-medium">
              <div className="w-2 h-2 bg-krishian-green rounded-full mr-3"></div>
              <span>Our Root - Bangladesh Agriculture Reality</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Understanding the Foundation
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bangladesh's agricultural sector is the backbone of our economy, yet it faces significant challenges that prevent it from reaching its full potential.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 border border-white/20 group-hover:border-krishian-green/40 group-hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{stat.icon}</span>
                </div>

                {/* Animated Number */}
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-krishian-green transition-colors duration-300">
                  {index === 0 && animatedStats.farmers.toFixed(1)}
                  {index === 1 && animatedStats.gdp.toFixed(0)}
                  {index === 2 && animatedStats.workforce.toFixed(0)}
                  <span className="text-3xl">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-krishian-green transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-white/20 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 300}ms`
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Challenges Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Current Challenges
            </h3>
            
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-krishian-green/20 to-krishian-green/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{challenge.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-krishian-green transition-colors duration-300">
                      {challenge.title}
                    </h4>
                    <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">
                      {challenge.description}
                    </p>
                    <div className="text-krishian-accent font-semibold text-sm">
                      {challenge.stat}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Bangladesh Map Representation */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-krishian-green/30 to-krishian-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl">🇧🇩</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Bangladesh</h4>
                <p className="text-gray-300 leading-relaxed">
                  Despite being an agri-country, Bangladesh under-exports due to disorganized supply chain and lack of direct farmer-buyer connections.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-krishian-green to-krishian-accent rounded-2xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                👉 Krishian is building the future of Bangladesh agriculture — transparent, fair, and export-ready.
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                We're creating a platform that connects farmers directly with markets, eliminates middlemen, and builds a sustainable agricultural ecosystem.
              </p>
              <button className="bg-white text-krishian-dark font-semibold px-8 py-4 rounded-card hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Read the Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RootsSection;

