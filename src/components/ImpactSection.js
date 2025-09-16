import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    income: 0,
    waste: 0,
    farmers: 0,
    buyers: 0,
    points: 0
  });
  const sectionRef = useRef(null);

  const impactMetrics = [
    {
      number: 30,
      suffix: "-50%",
      label: "Expected Income Increase",
      description: "for farmers using our platform",
      color: "from-krishian-green to-krishian-blue",
      icon: "📈"
    },
    {
      number: 40,
      suffix: "%",
      label: "Reduction in Waste",
      description: "post-harvest crop loss reduction",
      color: "from-krishian-green to-krishian-blue",
      icon: "♻️"
    },
    {
      number: 1000,
      suffix: "+",
      label: "Farmers Onboarded",
      description: "in the first year of operation",
      color: "from-krishian-green to-krishian-blue",
      icon: "👨‍🌾"
    },
    {
      number: 100,
      suffix: "+",
      label: "Buyers Served",
      description: "retailers and wholesalers connected",
      color: "from-krishian-green to-krishian-blue",
      icon: "🏪"
    },
    {
      number: 20,
      suffix: "+",
      label: "Collection Points",
      description: "set up nationwide",
      color: "from-krishian-green to-krishian-blue",
      icon: "🏢"
    }
  ];

  const testimonials = [
    {
      name: "Rahim Ali",
      role: "Farmer, Dhaka District",
      quote: "Krishian has transformed my farming business. I now get fair prices for my crops and can plan my harvests better. My income has increased by 40% in just 6 months.",
      avatar: "👨‍🌾",
      rating: 5
    },
    {
      name: "Fatima Begum",
      role: "Retailer, Chittagong",
      quote: "The quality of produce I get through Krishian is consistently excellent. The direct connection with farmers ensures freshness and fair pricing for both of us.",
      avatar: "👩‍💼",
      rating: 5
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
            
            // Animate income increase
            const incomeIncrement = 30 / steps;
            let incomeCurrent = 0;
            const incomeTimer = setInterval(() => {
              incomeCurrent += incomeIncrement;
              if (incomeCurrent >= 30) {
                incomeCurrent = 30;
                clearInterval(incomeTimer);
              }
              setAnimatedStats(prev => ({ ...prev, income: incomeCurrent }));
            }, duration / steps);

            // Animate waste reduction
            const wasteIncrement = 40 / steps;
            let wasteCurrent = 0;
            const wasteTimer = setInterval(() => {
              wasteCurrent += wasteIncrement;
              if (wasteCurrent >= 40) {
                wasteCurrent = 40;
                clearInterval(wasteTimer);
              }
              setAnimatedStats(prev => ({ ...prev, waste: wasteCurrent }));
            }, duration / steps);

            // Animate farmers
            const farmersIncrement = 1000 / steps;
            let farmersCurrent = 0;
            const farmersTimer = setInterval(() => {
              farmersCurrent += farmersIncrement;
              if (farmersCurrent >= 1000) {
                farmersCurrent = 1000;
                clearInterval(farmersTimer);
              }
              setAnimatedStats(prev => ({ ...prev, farmers: farmersCurrent }));
            }, duration / steps);

            // Animate buyers
            const buyersIncrement = 100 / steps;
            let buyersCurrent = 0;
            const buyersTimer = setInterval(() => {
              buyersCurrent += buyersIncrement;
              if (buyersCurrent >= 100) {
                buyersCurrent = 100;
                clearInterval(buyersTimer);
              }
              setAnimatedStats(prev => ({ ...prev, buyers: buyersCurrent }));
            }, duration / steps);

            // Animate collection points
            const pointsIncrement = 20 / steps;
            let pointsCurrent = 0;
            const pointsTimer = setInterval(() => {
              pointsCurrent += pointsIncrement;
              if (pointsCurrent >= 20) {
                pointsCurrent = 20;
                clearInterval(pointsTimer);
              }
              setAnimatedStats(prev => ({ ...prev, points: pointsCurrent }));
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-krishian-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(160,199,82,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(30,58,138,0.1) 0%, transparent 50%)`
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
            <span className="inline-flex items-center bg-krishian-green/10 text-krishian-green px-6 py-3 rounded-2xl text-sm font-medium border border-krishian-green/20">
              <div className="w-2 h-2 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
              <span>Our Impact</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Data-Driven Results
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our platform is delivering measurable impact across the agricultural ecosystem, creating value for farmers, buyers, and consumers alike.
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-krishian-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-krishian-green/20 group-hover:-translate-y-2 card-hover-unified">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-krishian-green/10 to-krishian-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{metric.icon}</span>
                </div>

                {/* Animated Number */}
                <div className="text-4xl font-bold text-krishian-dark mb-2 group-hover:text-krishian-green transition-colors duration-300">
                  {index === 0 && Math.floor(animatedStats.income)}
                  {index === 1 && Math.floor(animatedStats.waste)}
                  {index === 2 && Math.floor(animatedStats.farmers).toLocaleString()}
                  {index === 3 && Math.floor(animatedStats.buyers).toLocaleString()}
                  {index === 4 && Math.floor(animatedStats.points)}
                  <span className="text-2xl">{metric.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-krishian-dark mb-2 group-hover:text-krishian-green transition-colors duration-300">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {metric.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section removed as requested */}

        {/* Ripple Effect Section - Unique Design */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-krishian-white rounded-3xl p-16 text-krishian-dark relative overflow-hidden border-2 border-krishian-green/20 shadow-xl">
            {/* Simple Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-krishian-green/20 to-krishian-blue/20 px-8 py-4 rounded-2xl border border-krishian-green/30 mb-8">
                  <div className="w-3 h-3 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
                  <span className="text-krishian-green font-semibold text-sm">The Ripple Effect</span>
                </div>
                
                <h3 className="text-6xl font-bold text-krishian-dark mb-6">
                  <span className="bg-gradient-to-r from-krishian-green to-krishian-blue bg-clip-text text-transparent">
                    Creating Waves of
                  </span>
                  <br />
                  <span className="text-krishian-dark">Positive Change</span>
                </h3>
                
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Every farmer we help creates a ripple effect that extends far beyond our platform, 
                  transforming entire communities and strengthening the agricultural ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Ripple 1 - Direct Impact */}
                <motion.div 
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="bg-krishian-green/10 backdrop-blur-sm rounded-2xl p-8 border border-krishian-green/20 group-hover:border-krishian-green/50 transition-all duration-300 group-hover:scale-105 card-hover-unified">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">👨‍🌾</span>
                    </div>
                    <h4 className="text-2xl font-bold text-krishian-dark mb-4">Direct Impact</h4>
                    <p className="text-gray-700 mb-6">Farmers get fair prices and better market access</p>
                    <div className="text-4xl font-bold text-krishian-green mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Farmers Empowered</div>
                  </div>
                </motion.div>

                {/* Ripple 2 - Community Impact */}
                <motion.div 
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-krishian-blue/10 backdrop-blur-sm rounded-2xl p-8 border border-krishian-blue/20 group-hover:border-krishian-blue/50 transition-all duration-300 group-hover:scale-105 card-hover-unified">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-krishian-blue to-krishian-blue-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🏘️</span>
                    </div>
                    <h4 className="text-2xl font-bold text-krishian-dark mb-4">Community Impact</h4>
                    <p className="text-gray-700 mb-6">Rural communities see economic growth and stability</p>
                    <div className="text-4xl font-bold text-krishian-blue mb-2">50+</div>
                    <div className="text-sm text-gray-600">Communities Transformed</div>
                  </div>
                </motion.div>

                {/* Ripple 3 - National Impact */}
                <motion.div 
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-krishian-green/10 backdrop-blur-sm rounded-2xl p-8 border border-krishian-green/20 group-hover:border-krishian-green/50 transition-all duration-300 group-hover:scale-105 card-hover-unified">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🇧🇩</span>
                    </div>
                    <h4 className="text-2xl font-bold text-krishian-dark mb-4">National Impact</h4>
                    <p className="text-gray-700 mb-6">Strengthening Bangladesh's agricultural sector</p>
                    <div className="text-4xl font-bold text-krishian-green mb-2">40%</div>
                    <div className="text-sm text-gray-600">Waste Reduction</div>
                  </div>
                </motion.div>
              </div>

              {/* Impact Chain Visualization */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-2xl">🌾</span>
                    </div>
                    <div className="text-sm text-gray-700">Farmers</div>
                  </div>
                  
                  <div className="text-2xl text-krishian-green">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-krishian-blue to-krishian-blue-light rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-2xl">🏪</span>
                    </div>
                    <div className="text-sm text-gray-700">Buyers</div>
                  </div>
                  
                  <div className="text-2xl text-krishian-blue">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="text-sm text-gray-700">Consumers</div>
                  </div>
                  
                  <div className="text-2xl text-krishian-green">→</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-krishian-blue to-krishian-blue-light rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div className="text-sm text-gray-700">Global Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-krishian-green to-krishian-blue rounded-2xl p-12 text-krishian-white relative overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-krishian-white mb-6">
                Be Part of the Agricultural Revolution
              </h3>
              <p className="text-xl text-krishian-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Join thousands of farmers and buyers who are already transforming their agricultural practices with Krishian. Together, we're building a sustainable future for agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-krishian-white text-krishian-dark font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-hover-unified shadow-lg">
                  Sign Up as Farmer
                </button>
                <button className="bg-krishian-white text-krishian-dark font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-hover-unified shadow-lg">
                  Sign Up as Buyer
                </button>
                <button className="border-2 border-krishian-white text-krishian-white font-semibold px-8 py-4 rounded-2xl hover:bg-krishian-white hover:text-krishian-dark transition-all duration-300 transform hover:scale-105 btn-hover-unified">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
