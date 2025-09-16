import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-krishian-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(160,199,82,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(30,58,138,0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center bg-krishian-blue/10 text-krishian-blue px-6 py-3 rounded-2xl text-sm font-medium border border-krishian-blue/20">
              <div className="w-2 h-2 bg-krishian-blue rounded-full mr-3 animate-pulse"></div>
              <span>Get in Touch</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to join the movement? Contact us to learn more about how Krishian can help your farming community.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-krishian-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-krishian-dark">Contact Information</h3>
                  <p className="text-lg text-gray-600">
                    We're here to help you get started with Krishian. Reach out to us for any questions or support.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-krishian-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-krishian-dark">Email</h4>
                      <p className="text-gray-600">hello@krishian.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-krishian-blue to-krishian-blue-light rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-krishian-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-krishian-dark">Phone</h4>
                      <p className="text-gray-600">+880 1234-567890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-krishian-green to-krishian-green-light rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-krishian-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-krishian-dark">Address</h4>
                      <p className="text-gray-600">House 12, Road 4, Dhanmondi, Dhaka 1209, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Form */}
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-krishian-dark mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your first name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-krishian-green focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your last name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-krishian-green focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-krishian-green focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Enter subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-krishian-green focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      placeholder="Enter your message" 
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-krishian-green focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary btn-hover-unified w-full shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
