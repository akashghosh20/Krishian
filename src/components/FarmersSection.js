import React from 'react';

const FarmersSection = () => {
  return (
    <section id="farmers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark">
                Empowering Farmers
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide farmers with the tools, technology, and market access they need to thrive in today's competitive agricultural landscape.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-krishian-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-krishian-dark mb-2">Mobile App</h3>
                  <p className="text-gray-600">Easy-to-use platform for farmers to manage their crops and connect with buyers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-krishian-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-krishian-dark mb-2">Fair Pricing</h3>
                  <p className="text-gray-600">Real-time market prices ensuring farmers get the best value for their produce</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-krishian-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🚚</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-krishian-dark mb-2">Logistics</h3>
                  <p className="text-gray-600">Efficient supply chain management reducing waste and improving delivery</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary text-lg px-8 py-4">
              Learn More
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Farmer using mobile app"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-krishian-dark/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmersSection;
