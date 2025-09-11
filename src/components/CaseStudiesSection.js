import React from 'react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Punjab Farmers Cooperative",
      location: "Punjab, India",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      challenge: "Farmers were getting low prices due to middlemen",
      solution: "Connected 500+ farmers directly with buyers",
      results: [
        "40% increase in farmer income",
        "60% reduction in food waste",
        "95% farmer satisfaction rate"
      ]
    },
    {
      title: "Gujarat Vegetable Growers",
      location: "Gujarat, India",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      challenge: "Poor logistics leading to high spoilage rates",
      solution: "Implemented smart logistics and cold chain management",
      results: [
        "50% reduction in spoilage",
        "30% faster delivery times",
        "80% cost savings on logistics"
      ]
    },
    {
      title: "Karnataka Spice Farmers",
      location: "Karnataka, India",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80",
      challenge: "Limited market access for specialty crops",
      solution: "Connected with premium buyers and export markets",
      results: [
        "200% increase in export sales",
        "Premium pricing for quality crops",
        "New international markets opened"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Krishian has transformed farming businesses across different regions and crops.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden card-hover shadow-lg">
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-krishian-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    Case Study
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-krishian-dark mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.location}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-krishian-green rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-krishian-dark mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of farmers who have transformed their businesses with Krishian.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
