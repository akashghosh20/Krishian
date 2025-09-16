import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-krishian-dark to-krishian-dark-dark text-krishian-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(160,199,82,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(30,58,138,0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/assets/logo.png" 
                alt="Krishian Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Empowering Farmers. Reducing Waste. Building a Better Food Chain.
            </p>
            <div className="flex space-x-3" aria-label="Social media links">
              <a
                href="https://facebook.com/krishian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Krishian on Facebook"
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-krishian-green/10 hover:bg-krishian-green/20 border border-krishian-green/20 hover:border-krishian-green/40 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-krishian-green">
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.95 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href="https://x.com/krishian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Krishian on X"
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-krishian-blue/10 hover:bg-krishian-blue/20 border border-krishian-blue/20 hover:border-krishian-blue/40 transition-all duration-300 hover:scale-105"fd 
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-krishian-blue">
                  <path d="M3 3h4.6l4.06 6.06L16.9 3H21l-6.9 8.02L21 21h-4.6l-4.3-6.34L6.9 21H3l7.06-8.17L3 3Zm3.65 1.5 12.7 15.99h1.7L9.99 4.5h-3.34Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/krishian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Krishian on LinkedIn"
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-krishian-green/10 hover:bg-krishian-green/20 border border-krishian-green/20 hover:border-krishian-green/40 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-krishian-green">
                  <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM3.75 8.25h6.38v12H3.75v-12Zm8.62 0h6.12v1.65h.09c.85-1.35 2.35-2.21 4.33-2.21 4.64 0 5.49 3.05 5.49 7.01v5.55h-6.38V15.1c0-1.48-.03-3.39-2.07-3.39-2.08 0-2.4 1.62-2.4 3.29v5.25h-6.18v-12Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/krishian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Krishian on Instagram"
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-krishian-blue/10 hover:bg-krishian-blue/20 border border-krishian-blue/20 hover:border-krishian-blue/40 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-krishian-blue">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@krishian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Krishian on YouTube"
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-krishian-green/10 hover:bg-krishian-green/20 border border-krishian-green/20 hover:border-krishian-green/40 transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-krishian-green">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.6-1.9.6-5.8.6-5.8s0-3.9-.6-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-krishian-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-krishian-green transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-krishian-green transition-colors duration-300">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-krishian-green transition-colors duration-300">Services</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-krishian-green transition-colors duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-krishian-green transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-krishian-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-krishian-green transition-colors duration-300">hello@krishian.com</li>
              <li className="text-gray-300 hover:text-krishian-green transition-colors duration-300">+880 1234-567890</li>
              <li className="text-gray-300 hover:text-krishian-green transition-colors duration-300">House 12, Road 4, Dhanmondi, Dhaka 1209, Bangladesh</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-krishian-green/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Krishian. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-krishian-green text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-krishian-green text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
