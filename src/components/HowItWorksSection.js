import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      icon: "🏆",
      title: "Auction System",
      description: "Farmers sell crops via pre-harvest & post-harvest bidding",
      details: "Our intelligent auction system allows farmers to list their crops before and after harvest, enabling competitive bidding from verified buyers.",
      color: "from-krishian-green to-green-500"
    },
    {
      number: "02", 
      icon: "📋",
      title: "Buyer Requisition",
      description: "Retailers/wholesalers request specific crops, farmers bid",
      details: "Buyers can post specific requirements and farmers compete to fulfill them, ensuring quality and competitive pricing.",
      color: "from-krishian-accent to-orange-500"
    },
    {
      number: "03",
      icon: "🏢",
      title: "Collection Points",
      description: "Local hubs ensure quality check, weighing, and logistics",
      details: "Strategic collection points across Bangladesh provide quality assurance, proper weighing, and efficient logistics coordination.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "04",
      icon: "👨‍🌾",
      title: "Krishian Friends",
      description: "Field officers help farmers with onboarding, training, and sales",
      details: "Our dedicated field officers provide hands-on support, training, and guidance to help farmers maximize their potential.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "05",
      icon: "📊",
      title: "Real-time Price Tracking",
      description: "Reduces regional price gaps, stabilizes the market",
      details: "Advanced analytics and real-time price tracking help stabilize markets and ensure fair pricing across all regions.",
      color: "from-green-600 to-emerald-500"
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
              <span>How Krishian Works</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Our 5-Step Process
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From farmer to consumer, we've streamlined the entire agricultural supply chain with technology and innovation.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-krishian-green via-krishian-accent to-krishian-green transform -translate-y-1/2"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-card p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-gray-100 group-hover:border-krishian-green/20 group-hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-krishian-dark mb-4 group-hover:text-krishian-green transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Details (shown on hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${step.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-krishian-green to-krishian-accent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-krishian-green to-krishian-dark rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Agriculture?
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
                Join thousands of farmers and buyers who are already benefiting from our innovative platform.
              </p>
              <button className="btn-accent text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;