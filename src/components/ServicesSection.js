import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Market Access",
      description: "Connect farmers directly to high-margin markets and buyers",
      icon: "🏪",
      features: ["Direct buyer connections", "Market price optimization", "Quality assurance"]
    },
    {
      title: "Logistics Management",
      description: "Efficient supply chain management reducing waste and costs",
      icon: "🚚",
      features: ["Route optimization", "Cold chain management", "Real-time tracking"]
    },
    {
      title: "Data Analytics",
      description: "Data-driven insights for better decision making",
      icon: "📊",
      features: ["Crop yield analysis", "Market trends", "Performance metrics"]
    },
    {
      title: "Mobile Platform",
      description: "Easy-to-use mobile app for farmers and buyers",
      icon: "📱",
      features: ["User-friendly interface", "Offline capabilities", "Multi-language support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-krishian-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(160,199,82,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(30,58,138,0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center bg-krishian-blue/10 text-krishian-blue px-6 py-3 rounded-2xl text-sm font-medium border border-krishian-blue/20">
              <div className="w-2 h-2 bg-krishian-blue rounded-full mr-3 animate-pulse"></div>
              <span>Our Services</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to empower farmers and optimize the agricultural supply chain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-krishian-white rounded-2xl p-8 card-hover-unified shadow-lg border border-gray-100 hover:border-krishian-green/20">
              <div className="w-16 h-16 bg-gradient-to-br from-krishian-green/10 to-krishian-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-krishian-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-krishian-green rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-krishian-green to-krishian-blue rounded-2xl p-12 text-krishian-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Agriculture?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of farmers who are already benefiting from our platform.
            </p>
            <button className="bg-krishian-white text-krishian-dark font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-hover-unified shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
