import React from 'react';

const TraditionalSystemSection = () => {
  const supplyChainEntities = [
    {
      name: "Farmer",
      wastage: "3%",
      icon: "👥",
      color: "bg-red-100",
      textColor: "text-red-600",
      isActive: true
    },
    {
      name: "Local Trader",
      wastage: "6.5%",
      icon: "📊",
      color: "bg-gray-100",
      textColor: "text-red-600",
      isActive: false
    },
    {
      name: "City Distributor",
      wastage: "19%",
      icon: "🚚",
      color: "bg-red-100",
      textColor: "text-gray-600",
      isActive: true
    },
    {
      name: "Regional Wholesaler",
      wastage: "12%",
      icon: "📦",
      color: "bg-gray-100",
      textColor: "text-red-600",
      isActive: false
    },
    {
      name: "Retailer",
      wastage: "25%",
      icon: "📈",
      color: "bg-gray-100",
      textColor: "text-gray-600",
      isActive: false
    },
    {
      name: "Consumer",
      wastage: "30%",
      icon: "🎯",
      color: "bg-gray-100",
      textColor: "text-gray-600",
      isActive: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-800">Traditional System</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Traditional: <span className="font-semibold">64%</span>
            </div>
            <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </div>
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">6 Steps • 30% wastage • 30%-60% price hike</span>
            </div>
          </div>
        </div>

        {/* Red Line */}
        <div className="w-full h-1 bg-red-500 mb-12"></div>

        {/* Supply Chain Diagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {supplyChainEntities.map((entity, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${entity.color}`}>
                {entity.icon}
              </div>
              <h3 className={`text-sm font-semibold mb-2 ${entity.textColor}`}>
                {entity.name}
              </h3>
              <p className="text-xs text-gray-500">
                {entity.wastage} wastage
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-1 bg-red-500"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-4">
            <span className="text-gray-600 font-bold">VS</span>
          </div>
          <div className="w-16 h-1 bg-gray-300"></div>
        </div>

        {/* Total Wastage Summary */}
        <div className="mt-12 text-center">
          <div className="bg-red-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Total System Wastage: 95.5%
            </h3>
            <p className="text-gray-600 mb-6">
              The traditional supply chain in Bangladesh agriculture results in massive inefficiencies, with nearly all produce being lost or wasted through the 6-step process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">6</div>
                <div className="text-sm text-gray-600">Steps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">30%</div>
                <div className="text-sm text-gray-600">Wastage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">60%</div>
                <div className="text-sm text-gray-600">Price Hike</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalSystemSection;
