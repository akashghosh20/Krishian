import React from 'react';

const UNSDGSection = () => {
  const sdgGoals = [
    {
      number: "1",
      title: "NO POVERTY",
      color: "bg-krishian-green",
      icon: "🌾",
      description: "Empowering farmers with better income opportunities"
    },
    {
      number: "2", 
      title: "ZERO HUNGER",
      color: "bg-krishian-dark",
      icon: "🌱",
      description: "Reducing food waste and ensuring food security"
    },
    {
      number: "8",
      title: "DECENT WORK AND ECONOMIC GROWTH",
      color: "bg-krishian-green",
      icon: "💰",
      description: "Creating sustainable livelihoods for farmers"
    },
    {
      number: "9",
      title: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
      color: "bg-krishian-dark",
      icon: "🚀",
      description: "Building smart agricultural infrastructure",
      keyword: "Tech-enabled farming"
    },
    {
      number: "12",
      title: "RESPONSIBLE CONSUMPTION AND PRODUCTION",
      color: "bg-krishian-green",
      icon: "♻️",
      description: "Promoting sustainable farming practices",
      keyword: "Zero waste agriculture"
    },
    {
      number: "13",
      title: "CLIMATE ACTION",
      color: "bg-krishian-dark",
      icon: "🌍",
      description: "Supporting climate-smart agriculture",
      keyword: "Carbon neutral farming"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-krishian-green bg-opacity-10 text-krishian-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-krishian-green rounded-full mr-2"></div>
            Krishian's Global Impact
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-krishian-dark">Building a Sustainable</span>
            <br />
            <span className="text-krishian-green">Agricultural Future</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Through our innovative platform, Krishian is directly contributing to the UN Sustainable Development Goals, creating positive impact for farmers, communities, and the environment.
          </p>
        </div>

        {/* First Row - 3 SDG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sdgGoals.slice(0, 3).map((goal, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${goal.color} flex items-center justify-center text-white`}>
                <span className="text-2xl">{goal.icon}</span>
              </div>
              <div className="text-3xl font-bold text-krishian-dark mb-2">
                {goal.number}
              </div>
              <h3 className="text-lg font-bold text-krishian-dark mb-3">
                {goal.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Detailed SDG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sdgGoals.slice(3, 6).map((goal, index) => (
            <div key={index} className={`border-2 rounded-2xl p-8 ${
              goal.color === 'bg-krishian-green' ? 'border-krishian-green bg-green-50' :
              'border-krishian-dark bg-gray-50'
            }`}>
              {/* SDG Icon */}
              <div className={`w-16 h-16 rounded-full ${goal.color} flex items-center justify-center text-white mb-6`}>
                <span className="text-2xl">{goal.icon}</span>
              </div>
              
              {/* SDG Number */}
              <div className="text-3xl font-bold text-krishian-dark mb-2">
                {goal.number}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-krishian-dark mb-3">
                {goal.title.split(' ').slice(0, 2).join(' ')}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {goal.description}
              </p>
              
              {/* Keyword Bubble */}
              {goal.keyword && (
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  goal.color === 'bg-krishian-green' ? 'bg-krishian-green text-white' :
                  'bg-krishian-dark text-white'
                }`}>
                  {goal.keyword}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-krishian-green to-krishian-dark rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Krishian's Commitment to Global Goals
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Together with our farmers and partners, we're building a more sustainable and equitable agricultural ecosystem for Bangladesh and beyond.
            </p>
            
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-100">Supporting the</span>
              <button className="bg-white text-krishian-dark px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                UN SDGs
              </button>
              <span className="text-green-100">framework</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UNSDGSection;
