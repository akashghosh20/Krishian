import React from 'react';
import { motion } from 'framer-motion';

const CoreValuesSection = () => {
  const values = [
    {
      title: "Farmer First",
      description: "We exist to serve farmers - ensuring better prices, respect, and long-term prosperity.",
      icon: "🌾",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Accountability",
      description: "We act with integrity and own every outcome - to our farmers, partners, and team.",
      icon: "🤝",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Sustainability",
      description: "We build for the future - reducing waste and protecting resources at every step.",
      icon: "🌱",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 mx-auto`}>
                <span className="text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-krishian-dark mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
