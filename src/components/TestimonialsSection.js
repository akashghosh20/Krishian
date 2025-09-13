import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer, Satkhira",
      avatar: "👨‍🌾",
      content: "Krishian has transformed my farming business. I now get better prices for my crops and have direct access to buyers. My income has increased by 40% since joining the platform.",
      rating: 5,
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      impact: "40% Income Increase"
    },
    {
      name: "Fatima Begum",
      role: "Buyer, Khulna",
      avatar: "👩‍💼",
      content: "The quality of produce I get through Krishian is exceptional. The logistics are smooth and I can track my orders in real-time. It's a game-changer for my business.",
      rating: 5,
      color: "from-krishian-accent to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      impact: "100% Quality Assured"
    },
    {
      name: "Amit Hasan",
      role: "Farmer, Mymensingh",
      avatar: "👨‍🌾",
      content: "The mobile app is so easy to use. I can check market prices, connect with buyers, and manage my inventory all from my phone. It has made farming much more efficient.",
      rating: 5,
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      impact: "24/7 Access"
    },
    {
      name: "Rashida Akter",
      role: "Retailer, Chittagong",
      avatar: "👩‍💼",
      content: "Krishian has helped me build direct relationships with farmers. The transparency and fair pricing benefit both of us. My customers love the fresh produce quality.",
      rating: 5,
      color: "from-krishian-accent to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      impact: "Direct Connection"
    },
    {
      name: "Karim Uddin",
      role: "Farmer, Rajshahi",
      avatar: "👨‍🌾",
      content: "Before Krishian, I was at the mercy of middlemen. Now I have control over my prices and can plan my harvests better. My family's life has completely changed.",
      rating: 5,
      color: "from-krishian-green to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      impact: "Life Transformed"
    },
    {
      name: "Nusrat Jahan",
      role: "Wholesaler, Dhaka",
      avatar: "👩‍💼",
      content: "The platform's AI predictions help me make better purchasing decisions. I can plan my inventory based on accurate market forecasts. It's like having a crystal ball!",
      rating: 5,
      color: "from-krishian-accent to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      impact: "AI-Powered Insights"
    }
  ];

  const StarRating = ({ rating, color = "text-yellow-400" }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? color : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-krishian-green/5 via-krishian-accent/5 to-krishian-green/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 110, 79, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(246, 165, 0, 0.1) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating Quote Icons */}
        <div className="absolute top-20 left-20 text-6xl text-krishian-green/20 animate-bounce">💬</div>
        <div className="absolute top-40 right-32 text-5xl text-krishian-accent/20 animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-32 left-1/4 text-6xl text-krishian-green/20 animate-bounce" style={{ animationDelay: '1s' }}>💬</div>
        <div className="absolute bottom-20 right-20 text-5xl text-krishian-accent/20 animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-krishian-green/20 to-krishian-accent/20 px-8 py-4 rounded-full border border-krishian-green/30 mb-8">
            <div className="w-3 h-3 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
            <span className="text-krishian-green font-semibold text-sm">What Our Users Say</span>
          </div>
          
          <h2 className="text-6xl font-bold text-krishian-dark mb-6">
            <span className="bg-gradient-to-r from-krishian-green to-krishian-accent bg-clip-text text-transparent">
              Real Stories,
            </span>
            <br />
            <span className="text-krishian-dark">Real Impact</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hear from farmers and buyers who have transformed their lives and businesses with Krishian. 
            These are real people with real stories of success and growth.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${testimonial.bgColor} ${testimonial.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:border-opacity-50 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${testimonial.color} rounded-full`}></div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-4xl text-gray-300/20">💬</div>

                {/* Rating */}
                <div className="flex items-center mb-6 relative z-10">
                  <StarRating rating={testimonial.rating} color={`text-krishian-accent`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-2xl`}>
                      {testimonial.avatar}
                    </div>
                <div>
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className={`inline-block bg-gradient-to-r ${testimonial.color} text-white px-4 py-2 rounded-full text-sm font-bold group-hover:scale-105 transition-transform duration-300`}>
                    {testimonial.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-krishian-green to-krishian-accent rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-8">
                Trusted by Thousands
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">98%</div>
                  <div className="text-xl text-white/80">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">25K+</div>
                  <div className="text-xl text-white/80">Happy Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">5K+</div>
                  <div className="text-xl text-white/80">Active Buyers</div>
                </div>
          </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
