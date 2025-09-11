import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account and complete your profile in minutes",
      icon: "📝"
    },
    {
      number: "02",
      title: "List Your Produce",
      description: "Upload details about your crops, quantity, and quality",
      icon: "🌾"
    },
    {
      number: "03",
      title: "Get Matched",
      description: "Our AI matches you with the best buyers in your area",
      icon: "🤝"
    },
    {
      number: "04",
      title: "Sell & Deliver",
      description: "Complete the sale and arrange efficient delivery",
      icon: "🚚"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Krishian in just four simple steps and transform your farming business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-krishian-green transform translate-x-8 -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 card-hover shadow-lg">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-4xl font-bold text-krishian-green mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-krishian-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to get started? It only takes a few minutes to set up your account.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
