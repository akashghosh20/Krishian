import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const WhoBenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const beneficiaries = [
    {
      icon: "👨‍🌾",
      title: "Farmers",
      benefits: [
        "Fair price for crops",
        "Advance sales opportunities", 
        "Reduced post-harvest waste",
        "Training & finance access"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      description: "Direct market access, better prices, and reduced waste"
    },
    {
      icon: "🏪",
      title: "Retailers/Wholesalers",
      benefits: [
        "Direct supply chain",
        "Stable quality assurance",
        "Lower procurement costs",
        "Real-time inventory"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      description: "Reliable supply, quality control, and cost savings"
    },
    {
      icon: "🛒",
      title: "Consumers",
      benefits: [
        "Affordable fresh food",
        "Reduced price fluctuations",
        "Better food safety",
        "Supporting local farmers"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      description: "Fresh, affordable food with stable pricing"
    },
    {
      icon: "🇧🇩",
      title: "Nation",
      benefits: [
        "Stronger rural economy",
        "Enhanced food security",
        "Export growth potential",
        "Sustainable development"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      description: "Economic growth, food security, and sustainability"
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(11, 110, 79, 0.1) 0%, transparent 50%),
                          linear-gradient(-45deg, rgba(246, 165, 0, 0.1) 0%, transparent 50%)`
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
              <span>Who Benefits from Krishian</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Creating Value for Everyone
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our platform creates a win-win ecosystem where every stakeholder benefits from transparent, efficient, and fair agricultural practices.
          </p>
        </motion.div>

        {/* Beneficiaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${beneficiary.bgColor} rounded-card p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-gray-100 group-hover:border-krishian-green/20 group-hover:-translate-y-2 h-full`}>
                {/* Icon */}
                <div className={`w-16 h-16 ${beneficiary.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{beneficiary.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-krishian-dark mb-4 group-hover:text-krishian-green transition-colors duration-300">
                  {beneficiary.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {beneficiary.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  {beneficiary.benefits.map((benefit, benefitIndex) => (
                    <motion.div 
                      key={benefitIndex} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (benefitIndex * 0.05) }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${beneficiary.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${beneficiary.color} transition-all duration-1000 ease-out`}
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

        {/* Impact Visualization */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-krishian-dark to-gray-900 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(11, 110, 79, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(246, 165, 0, 0.2) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                The Ripple Effect of Change
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {beneficiaries.map((beneficiary, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">{beneficiary.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-krishian-green transition-colors duration-300">
                      {beneficiary.title}
                    </h4>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {beneficiary.description}
                    </p>
                  </div>
                ))}
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
                Join the Agricultural Revolution
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Whether you're a farmer, buyer, or consumer, Krishian creates value for everyone in the agricultural ecosystem. Be part of the change that's transforming Bangladesh's agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-krishian-dark font-semibold px-8 py-4 rounded-card hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Join as Farmer
                </button>
                <button className="bg-white text-krishian-dark font-semibold px-8 py-4 rounded-card hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
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

export default WhoBenefitsSection;
