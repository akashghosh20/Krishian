import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TraditionalSystemSection = () => {
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

  const supplyChainSteps = [
    {
      id: 1,
      name: "Farmer",
      role: "Producer",
      wastage: "3%",
      profit: "15%",
      time: "0 days",
      icon: "🌾",
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      description: "Smallholder farmers with limited bargaining power"
    },
    {
      id: 2,
      name: "Local Trader",
      role: "First Middleman",
      wastage: "6.5%",
      profit: "25%",
      time: "1-2 days",
      icon: "📊",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      description: "Local traders who buy directly from farmers"
    },
    {
      id: 3,
      name: "City Distributor",
      role: "Urban Middleman",
      wastage: "19%",
      profit: "35%",
      time: "3-5 days",
      icon: "🚚",
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      description: "City-based distributors handling bulk quantities"
    },
    {
      id: 4,
      name: "Regional Wholesaler",
      role: "Regional Middleman",
      wastage: "12%",
      profit: "30%",
      time: "2-3 days",
      icon: "📦",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      description: "Regional wholesalers managing multiple districts"
    },
    {
      id: 5,
      name: "Retailer",
      role: "Final Seller",
      wastage: "25%",
      profit: "40%",
      time: "1-2 days",
      icon: "🏪",
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      description: "Local retailers selling to end consumers"
    },
    {
      id: 6,
      name: "Consumer",
      role: "End User",
      wastage: "30%",
      profit: "0%",
      time: "0 days",
      icon: "👥",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      description: "End consumers paying premium prices"
    }
  ];

  const totalWastage = supplyChainSteps.reduce((sum, step) => sum + parseFloat(step.wastage), 0);
  const totalProfit = supplyChainSteps.reduce((sum, step) => sum + parseFloat(step.profit), 0);
  const totalTime = supplyChainSteps.reduce((sum, step) => sum + parseInt(step.time), 0);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 110, 79, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(246, 165, 0, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-orange-50 px-6 py-3 rounded-full border border-red-200 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-red-700 font-semibold text-sm">Traditional Supply Chain</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-krishian-dark via-gray-800 to-krishian-dark bg-clip-text text-transparent">
              Understanding the
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The traditional agricultural supply chain in Bangladesh creates a complex web of intermediaries, 
            each adding costs, time, and wastage while reducing farmer profits.
          </p>
        </motion.div>

        {/* Supply Chain Visualization */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {supplyChainSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connection Line */}
                {index < supplyChainSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-krishian-green via-orange-400 to-krishian-green transform translate-x-4 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-krishian-green via-orange-400 to-krishian-green animate-pulse"></div>
                  </div>
                )}

                {/* Step Card */}
                <div className={`relative z-10 ${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg mb-4`}>
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold ${step.textColor} mb-2`}>{step.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{step.role}</p>
                  <p className="text-xs text-gray-500 mb-4">{step.description}</p>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Wastage:</span>
                      <span className={`text-sm font-bold ${step.textColor}`}>{step.wastage}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Profit:</span>
                      <span className={`text-sm font-bold ${step.textColor}`}>{step.profit}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Time:</span>
                      <span className={`text-sm font-bold ${step.textColor}`}>{step.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <motion.div 
          className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 rounded-3xl p-12 border-2 border-red-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-red-700 mb-4">
              The True Cost of Tradition
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The traditional system creates massive inefficiencies that hurt everyone in the supply chain, 
              especially farmers and consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{totalWastage}%</span>
              </div>
              <h4 className=" font-bold text-red-700 mb-2">Total Wastage</h4>
              <p className="text-gray-600 text-sm">Combined wastage across all steps</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{totalProfit}%</span>
              </div>
              <h4 className="text-xl font-bold text-orange-700 mb-2">Total Profit</h4>
              <p className="text-gray-600 text-sm">Combined profit for middlemen</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-krishian-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{totalTime}</span>
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">Total Days</h4>
              <p className="text-gray-600 text-sm">Time from farm to consumer</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full border-2 border-red-200">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-700 font-semibold">
                This is why we need Krishian - to eliminate these inefficiencies
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionalSystemSection;
