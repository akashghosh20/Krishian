import React from 'react';

const TechnologySection = () => {
  const technologies = [
    {
      title: "AI-Powered Matching",
      description: "Our advanced algorithms match farmers with the best buyers based on location, crop type, and quality requirements.",
      icon: "🤖",
      features: ["Machine Learning", "Real-time Analysis", "Smart Recommendations"]
    },
    {
      title: "Blockchain Traceability",
      description: "Complete supply chain transparency from farm to table using blockchain technology.",
      icon: "⛓️",
      features: ["Immutable Records", "Quality Assurance", "Consumer Trust"]
    },
    {
      title: "IoT Sensors",
      description: "Smart sensors monitor crop conditions and provide real-time data for better decision making.",
      icon: "📡",
      features: ["Soil Monitoring", "Weather Tracking", "Crop Health"]
    },
    {
      title: "Mobile-First Design",
      description: "Intuitive mobile app designed specifically for farmers with limited technical knowledge.",
      icon: "📱",
      features: ["Offline Capability", "Multi-language", "Voice Commands"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Powered by Advanced Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technology to create innovative solutions for modern agriculture.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover">
              <div className="text-5xl mb-6">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-krishian-dark mb-4">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="bg-krishian-green text-white px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-krishian-green to-krishian-dark rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Technology Impact
            </h3>
            <p className="text-xl opacity-90">
              Our technology solutions are making a real difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-green-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5s</div>
              <div className="text-green-100">Avg Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">256-bit</div>
              <div className="text-green-100">Encryption</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

