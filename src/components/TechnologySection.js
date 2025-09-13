import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TechnologySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const technologies = [
    {
      icon: "📱",
      title: "Mobile App (Flutter)",
      description: "Cross-platform mobile app for farmers and buyers",
      features: ["Offline functionality", "Real-time notifications", "Easy-to-use interface", "Multi-language support"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      icon: "💻",
      title: "Admin Dashboard",
      description: "Laravel, MySQL, Redis powered management system",
      features: ["Real-time analytics", "User management", "Transaction tracking", "Performance monitoring"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      icon: "🤖",
      title: "AI Price Prediction",
      description: "Machine learning model to forecast market trends",
      features: ["Price forecasting", "Risk assessment", "Market analysis", "Trend prediction"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      icon: "🌐",
      title: "Low-bandwidth Optimized",
      description: "Designed for rural areas with limited internet",
      features: ["Data compression", "Progressive loading", "Offline sync", "Rural connectivity"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
    }
  ];

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

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 110, 79, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(246, 165, 0, 0.1) 0%, transparent 50%)`
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
            <span className="inline-flex items-center bg-krishian-green/10 text-krishian-green px-6 py-3 rounded-pill text-sm font-medium">
              <div className="w-2 h-2 bg-krishian-green rounded-full mr-3"></div>
              <span>Our Technology Stack</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Powered by Innovation
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage cutting-edge technology to create a seamless, efficient, and accessible platform for all stakeholders in the agricultural ecosystem.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${tech.bgColor} rounded-card p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-gray-100 group-hover:border-krishian-green/20 group-hover:-translate-y-2 h-full`}>
                {/* Icon */}
                <div className={`w-16 h-16 ${tech.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{tech.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-krishian-dark mb-4 group-hover:text-krishian-green transition-colors duration-300">
                {tech.title}
              </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {tech.description}
              </p>

                {/* Features List */}
                <div className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature}
                  </span>
            </div>
          ))}
        </div>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
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

        {/* AI Price Prediction Demo - Unique Design */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-krishian-green/10 via-white to-krishian-accent/10 rounded-3xl p-16 text-krishian-dark relative overflow-hidden border-2 border-krishian-green/20">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-krishian-green/20 via-krishian-accent/20 to-krishian-green/20"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 110, 79, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(246, 165, 0, 0.1) 0%, transparent 50%)`
              }}></div>
              
              {/* Floating Neural Network Nodes */}
              <div className="absolute top-20 left-20 w-4 h-4 bg-krishian-green rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-32 w-3 h-3 bg-krishian-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-krishian-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 right-20 w-4 h-4 bg-krishian-accent rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 left-10 w-3 h-3 bg-krishian-green rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left - AI Description */}
                <div>
                  <div className="inline-flex items-center bg-gradient-to-r from-krishian-green/20 to-krishian-accent/20 px-6 py-3 rounded-full border border-krishian-green/30 mb-8">
                    <div className="w-3 h-3 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
                    <span className="text-krishian-green font-semibold text-sm">AI Price Prediction Model</span>
                  </div>
                  
                  <h3 className="text-5xl font-bold text-krishian-dark mb-6">
                    <span className="bg-gradient-to-r from-krishian-green to-krishian-accent bg-clip-text text-transparent">
                      Neural Intelligence
                    </span>
                    <br />
                    <span className="text-krishian-dark">for Agriculture</span>
            </h3>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Our advanced AI model processes millions of data points including market trends, weather patterns, 
                    historical data, and global events to provide accurate price predictions with 95% accuracy.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-krishian-green/10 backdrop-blur-sm rounded-2xl p-6 border border-krishian-green/20">
                      <div className="text-3xl font-bold text-krishian-green mb-2">95%</div>
                      <div className="text-sm text-gray-700">Prediction Accuracy</div>
                    </div>
                    <div className="bg-krishian-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-krishian-accent/20">
                      <div className="text-3xl font-bold text-krishian-accent mb-2">24/7</div>
                      <div className="text-sm text-gray-700">Real-time Analysis</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Real-time market analysis",
                      "Weather pattern integration", 
                      "Historical data processing",
                      "Risk assessment algorithms",
                      "Global market trends",
                      "Supply chain optimization"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-krishian-green to-krishian-accent rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Interactive AI Visualization */}
                <div className="relative">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-krishian-green/20 relative overflow-hidden">
                    {/* AI Brain Visualization */}
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-krishian-green to-krishian-accent rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <span className="text-4xl">🧠</span>
                      </div>
                      <h4 className="text-2xl font-bold text-krishian-dark mb-2">AI Neural Network</h4>
                      <p className="text-gray-700">Processing live data streams</p>
                    </div>
                    
                    {/* Data Flow Visualization */}
                    <div className="space-y-6">
                      {/* Input Data */}
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-700">Market Data</div>
                        <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-krishian-green to-krishian-accent rounded-full animate-pulse" style={{ width: '85%' }}></div>
                        </div>
                        <div className="text-sm text-krishian-green font-bold">85%</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-700">Weather Data</div>
                        <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-krishian-accent to-krishian-green rounded-full animate-pulse" style={{ width: '92%' }}></div>
                        </div>
                        <div className="text-sm text-krishian-accent font-bold">92%</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-700">Historical Data</div>
                        <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-krishian-green to-krishian-accent rounded-full animate-pulse" style={{ width: '78%' }}></div>
                        </div>
                        <div className="text-sm text-krishian-green font-bold">78%</div>
          </div>
          
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-700">Global Trends</div>
                        <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-krishian-accent to-krishian-green rounded-full animate-pulse" style={{ width: '88%' }}></div>
                        </div>
                        <div className="text-sm text-krishian-accent font-bold">88%</div>
                      </div>
            </div>
                    
                    {/* Prediction Output */}
                    <div className="mt-8 text-center">
                      <div className="text-4xl font-bold text-krishian-green mb-2">+23%</div>
                      <div className="text-sm text-gray-700">Predicted Price Increase</div>
                      <div className="text-xs text-gray-600 mt-2">Next 30 days</div>
            </div>
            </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-krishian-green/30 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-krishian-accent/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
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
          <div className="bg-gradient-to-r from-krishian-green to-krishian-accent rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience the Future of Agriculture
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Download our mobile app and join thousands of farmers and buyers who are already using our technology to transform their agricultural practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-krishian-dark font-semibold px-8 py-4 rounded-card hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Download App
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-card hover:bg-white hover:text-krishian-dark transition-all duration-300 transform hover:scale-105">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;