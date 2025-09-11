import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY > 10;
      setScrolled(s);
      controls.start({ height: s ? 64 : 80, backdropFilter: s ? 'saturate(120%) blur(6px)' : 'none', transition: { type: 'spring', stiffness: 260, damping: 30 } });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <motion.nav animate={controls} className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-white/90 shadow-md' : 'bg-white'}` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <img 
                src="/assets/logo.png" 
                alt="Krishian Logo" 
                className="h-20 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#home" className="text-krishian-dark hover:text-krishian-green px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-krishian-dark hover:text-krishian-green px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#services" className="text-krishian-dark hover:text-krishian-green px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
              </a>
              <a href="#pricing" className="text-krishian-dark hover:text-krishian-green px-3 py-2 text-sm font-medium transition-colors duration-200">
                Pricing
              </a>
              <a href="#blog" className="text-krishian-dark hover:text-krishian-green px-3 py-2 text-sm font-medium transition-colors duration-200">
                Blog
              </a>
              <a href="#contact" className="text-krishian-dark hover:text-krishian-green px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-krishian-dark hover:text-krishian-green focus:outline-none focus:text-krishian-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#home" className="text-krishian-dark hover:text-krishian-green block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-krishian-dark hover:text-krishian-green block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#services" className="text-krishian-dark hover:text-krishian-green block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#pricing" className="text-krishian-dark hover:text-krishian-green block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#blog" className="text-krishian-dark hover:text-krishian-green block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <a href="#contact" className="text-krishian-dark hover:text-krishian-green block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
