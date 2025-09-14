import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const UNSDGSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const sdgGoals = [
    {
      number: "1",
      title: "NO POVERTY",
      subtitle: "End poverty in all forms everywhere",
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      icon: "🌾",
      description: "Empowering farmers with better income opportunities through direct market access",
      impact: "30-50% income increase",
      progress: 85,
      stats: ["1000+ farmers", "40% income boost", "Direct payments"]
    },
    {
      number: "2",
      title: "ZERO HUNGER",
      subtitle: "End hunger, achieve food security",
      color: "from-krishian-accent to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      icon: "🌱",
      description: "Reducing food waste and ensuring food security through efficient supply chains",
      impact: "40% waste reduction",
      progress: 78,
      stats: ["26% less waste", "Fresh delivery", "Quality control"]
    },
    {
      number: "8",
      title: "DECENT WORK",
      subtitle: "Promote sustained economic growth",
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      icon: "💰",
      description: "Creating sustainable livelihoods and decent work for agricultural communities",
      impact: "1000+ jobs created",
      progress: 92,
      stats: ["1000+ jobs", "Fair wages", "Skill development"]
    },
    {
      number: "9",
      title: "INNOVATION",
      subtitle: "Build resilient infrastructure",
      color: "from-krishian-accent to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      icon: "🚀",
      description: "Building smart agricultural infrastructure and promoting innovation",
      impact: "20+ collection points",
      progress: 88,
      stats: ["20+ hubs", "Smart tech", "AI integration"]
    },
    {
      number: "12",
      title: "RESPONSIBLE",
      subtitle: "Ensure sustainable consumption",
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      icon: "♻️",
      description: "Promoting sustainable farming practices and responsible consumption",
      impact: "Zero waste agriculture",
      progress: 95,
      stats: ["Zero waste", "Eco-friendly", "Sustainable"]
    },
    {
      number: "13",
      title: "CLIMATE ACTION",
      subtitle: "Take urgent climate action",
      color: "from-krishian-accent to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      icon: "🌍",
      description: "Supporting climate-smart agriculture and environmental protection",
      impact: "Carbon neutral farming",
      progress: 82,
      stats: ["Carbon neutral", "Climate smart", "Green farming"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-krishian-green/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
        <div className="inline-flex items-center bg-gradient-to-r from-krishian-green/20 to-krishian-accent/20 px-8 py-4 rounded-full border border-krishian-green/30 mb-8">
          <div className="w-3 h-3 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
          <span className="text-krishian-green font-semibold text-sm">UN Sustainable Development Goals</span>
        </div>

        <h2 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-krishian-dark via-krishian-green to-krishian-dark bg-clip-text text-transparent">
            Global Impact
          </span>
          <br />
          <span className="bg-gradient-to-r from-krishian-green via-krishian-accent to-krishian-green bg-clip-text text-transparent">
            Through Innovation
          </span>
        </h2>

        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Krishian is actively contributing to the United Nations Sustainable Development Goals, 
            creating measurable impact across multiple dimensions of global development.
          </p>
        </motion.div>

        {/* SDG Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sdgGoals.map((goal, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className={`${goal.bgColor} ${goal.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:border-opacity-50 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${goal.color} rounded-full`}></div>
                </div>

                {/* SDG Number */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${goal.color} text-white font-bold text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {goal.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">{goal.icon}</div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-medium">
                    {goal.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {goal.description}
                  </p>

                  {/* Impact Badge */}
                  <div className={`inline-block bg-gradient-to-r ${goal.color} text-white px-6 py-3 rounded-full text-lg font-bold mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    {goal.impact}
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 mb-6">
                    {goal.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${goal.color} rounded-full mr-3`}></div>
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${goal.color} transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? `${goal.progress}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 font-medium">
                    {goal.progress}% Complete
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Summary */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
        <div className="bg-gradient-to-r from-krishian-green to-krishian-accent rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)`
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🌍 Our Global Commitment
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Through innovative technology and sustainable practices, Krishian is making a measurable impact 
                on the UN Sustainable Development Goals, creating a better future for farmers, communities, and the planet.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">6</div>
                  <div className="text-lg text-white/80">SDGs Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">1000+</div>
                  <div className="text-lg text-white/80">Farmers Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">85%</div>
                  <div className="text-lg text-white/80">Average Progress</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  View Impact Report
                </button>
                <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Join Our Mission
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UNSDGSection;
