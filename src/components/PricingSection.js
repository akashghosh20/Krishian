import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for small farmers getting started",
      features: [
        "Up to 10 listings per month",
        "Basic buyer matching",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for growing farming operations",
      features: [
        "Unlimited listings",
        "Advanced buyer matching",
        "Priority support",
        "Advanced analytics",
        "Direct buyer contact",
        "Quality certification"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large farming cooperatives",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Bulk operations",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your farming business. All plans include our core features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 card-hover shadow-lg ${
              plan.popular 
                ? 'bg-krishian-green text-white transform scale-105' 
                : 'bg-gray-50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-krishian-dark text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-krishian-dark'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  plan.popular ? 'text-green-100' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-krishian-green'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-lg ${
                    plan.popular ? 'text-green-100' : 'text-gray-600'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                      plan.popular ? 'bg-white' : 'bg-krishian-green'
                    }`}>
                      <svg className={`w-3 h-3 ${
                        plan.popular ? 'text-krishian-green' : 'text-white'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`text-sm ${
                      plan.popular ? 'text-white' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                plan.popular
                  ? 'bg-white text-krishian-green hover:bg-gray-100'
                  : 'bg-krishian-green text-white hover:bg-krishian-dark'
              }`}>
                {plan.name === 'Starter' ? 'Get Started Free' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our pricing?
          </p>
          <a href="#contact" className="text-krishian-green font-medium hover:text-krishian-dark transition-colors">
            Contact our sales team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
