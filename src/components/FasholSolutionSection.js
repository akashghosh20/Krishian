import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FasholSolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const solutionFeatures = [
    {
      id: 1,
      title: "Direct Farmer Connection",
      icon: "🌾",
      description: "Farmers connect directly to our platform",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-white/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-white",
      stats: "100% Direct",
      benefits: ["No middlemen", "Fair pricing", "Real-time updates"]
    },
    {
      id: 2,
      title: "AI-Powered Matching",
      icon: "🤖",
      description: "Smart algorithms match farmers with buyers",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-white/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-white",
      stats: "95% Accuracy",
      benefits: ["Instant matching", "Price optimization", "Demand forecasting"]
    },
    {
      id: 3,
      title: "Seamless Logistics",
      icon: "🚚",
      description: "End-to-end supply chain management",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-white/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-white",
      stats: "24h Delivery",
      benefits: ["Cold chain", "Quality control", "Tracking system"]
    }
  ];

  const impactMetrics = [
    {
      metric: "67%",
      label: "Active Platform",
      description: "Farmers actively using",
      color: "from-emerald-500 to-emerald-600",
      icon: "📈"
    },
    {
      metric: "26%",
      label: "Waste Reduction",
      description: "Less food waste",
      color: "from-emerald-500 to-emerald-600",
      icon: "♻️"
    },
    {
      metric: "80%",
      label: "Middlemen Removed",
      description: "Direct connections",
      color: "from-emerald-500 to-emerald-600",
      icon: "✂️"
    },
    {
      metric: "40%",
      label: "Profit Increase",
      description: "Higher farmer income",
      color: "from-emerald-500 to-emerald-600",
      icon: "💰"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-emerald-500/20 px-8 py-4 rounded-full border border-emerald-500/30 mb-8">
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-emerald-300 font-semibold text-sm">Krishian Solution</span>
        </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-white">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Agriculture
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary 3-step process that transforms traditional agriculture 
            into a modern, efficient, and profitable ecosystem for everyone.
          </p>
        </motion.div>

        {/* Solution Features */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Connection Lines */}
                {index < solutionFeatures.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-500 transform -translate-y-1/2 translate-x-4 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 animate-pulse"></div>
                  </div>
                )}

                {/* Feature Card */}
                <div className={`relative z-10 ${feature.bgColor} ${feature.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:border-opacity-50`}>
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.id}
        </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold ${feature.textColor} mb-4 group-hover:text-opacity-80 transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>

                  {/* Stats */}
                  <div className={`inline-block bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full text-lg font-bold mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    {feature.stats}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3`}></div>
                        {benefit}
              </div>
                    ))}
              </div>
            </div>
              </motion.div>
          ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Measurable Impact
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{metric.icon}</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {metric.metric}
                </div>
                <div className="text-xl font-semibold text-gray-300 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Agriculture?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of farmers and buyers who are already experiencing the future of agriculture with Krishian.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-emerald-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Start as Farmer
                </button>
                <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Join as Buyer
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FasholSolutionSection;
