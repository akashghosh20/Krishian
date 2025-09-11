import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to join the movement? Contact us to learn more about how Krishian can help your farming community.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
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
                    <div className="w-12 h-12 bg-krishian-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-krishian-dark">Email</h4>
                      <p className="text-gray-600">hello@krishian.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-krishian-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-krishian-dark">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-krishian-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-krishian-dark">Address</h4>
                      <p className="text-gray-600">123 Farm Street, Agriculture City, AC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-krishian-dark mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your first name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-krishian-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your last name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-krishian-green focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-krishian-green focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Enter subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-krishian-green focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      placeholder="Enter your message" 
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-krishian-green focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
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
