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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
            <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
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
        <div className="mt-16 text-center">
          <div className="bg-krishian-green rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Agriculture?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of farmers who are already benefiting from our platform.
            </p>
            <button className="bg-white text-krishian-green font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
