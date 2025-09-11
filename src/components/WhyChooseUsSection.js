import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Fast & Reliable",
      description: "Get your produce to market quickly with our optimized logistics network"
    },
    {
      icon: "💰",
      title: "Better Prices",
      description: "Direct market access ensures farmers get fair prices for their crops"
    },
    {
      icon: "📱",
      title: "Easy to Use",
      description: "Simple mobile app interface designed for farmers of all tech levels"
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description: "Reducing food waste and promoting sustainable farming practices"
    },
    {
      icon: "📊",
      title: "Data Driven",
      description: "Real-time analytics help farmers make informed decisions"
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your farming needs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Why Choose Krishian?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions that empower farmers and transform the agricultural supply chain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl card-hover bg-gray-50">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-krishian-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-krishian-green to-krishian-dark rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Farming Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of farmers who are already benefiting from our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-krishian-green font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-krishian-green transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

