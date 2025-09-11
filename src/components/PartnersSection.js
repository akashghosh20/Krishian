import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "Ministry of Agriculture", logo: "🌾" },
    { name: "Farmers Cooperative", logo: "🤝" },
    { name: "AgriTech Solutions", logo: "📱" },
    { name: "Green Logistics", logo: "🚚" },
    { name: "Sustainable Farms", logo: "🌱" },
    { name: "Rural Development", logo: "🏘️" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-krishian-dark mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600">
            We work with government agencies, cooperatives, and industry leaders
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-4xl mb-3">{partner.logo}</div>
              <h3 className="text-sm font-medium text-gray-600 text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-krishian-green mb-2">50+</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-krishian-green mb-2">15+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-krishian-green mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

