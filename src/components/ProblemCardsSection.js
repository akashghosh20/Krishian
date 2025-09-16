import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProblemCardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: "👥",
      stat: "85%",
      title: "Smallholder Farmers",
      description: "of farmers are smallholders with little bargaining power",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "📊",
      stat: "25-30%",
      title: "Crop Waste",
      description: "of crops are wasted post-harvest due to poor supply chain",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "💰",
      stat: "40%",
      title: "Middleman Cut",
      description: "of farmer's income is taken away by middlemen",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🌍",
      stat: "Regional",
      title: "Price Gaps",
      description: "Price differences across regions hurt both farmers and consumers",
      color: "from-blue-500 to-blue-600"
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="inline-flex items-center bg-red-100 text-red-700 px-6 py-3 rounded-pill text-sm font-medium">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span>Bangladesh's Agriculture Challenges</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            The Problems We Solve
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bangladesh's agriculture sector faces critical challenges that prevent farmers from reaching their full potential and consumers from accessing fresh, affordable food.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-card p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-gray-100 group-hover:border-krishian-green/20 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{problem.icon}</span>
                </div>

                {/* Stat */}
                <div className="text-4xl font-bold text-krishian-dark mb-2 group-hover:text-krishian-green transition-colors duration-300">
                  {problem.stat}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-krishian-dark mb-4 group-hover:text-krishian-green transition-colors duration-300">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {problem.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${problem.color} transition-all duration-1000 ease-out`}
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

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
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
                👉 Krishian was built to solve these challenges with technology and trust.
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                We're creating a transparent, fair, and efficient agricultural ecosystem that benefits everyone in the supply chain.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemCardsSection;

