import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perPage, setPerPage] = useState(4);

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

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setPerPage(4);
      } else if (width >= 768) {
        setPerPage(2);
      } else {
        setPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer, Satkhira",
      avatar: "👨‍🌾",
      content: "Krishian has transformed my farming business. I now get better prices for my crops and have direct access to buyers. My income has increased by 40% since joining the platform.",
      rating: 5,
      color: "from-krishian-green to-krishian-blue",
      bgColor: "bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5",
      borderColor: "border-krishian-green/20",
      impact: "40% Income Increase"
    },
    {
      name: "Fatima Begum",
      role: "Buyer, Khulna",
      avatar: "👩‍💼",
      content: "The quality of produce I get through Krishian is exceptional. The logistics are smooth and I can track my orders in real-time. It's a game-changer for my business.",
      rating: 5,
      color: "from-krishian-green to-krishian-blue",
      bgColor: "bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5",
      borderColor: "border-krishian-green/20",
      impact: "100% Quality Assured"
    },
    {
      name: "Amit Hasan",
      role: "Farmer, Mymensingh",
      avatar: "👨‍🌾",
      content: "The mobile app is so easy to use. I can check market prices, connect with buyers, and manage my inventory all from my phone. It has made farming much more efficient.",
      rating: 5,
      color: "from-krishian-green to-krishian-blue",
      bgColor: "bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5",
      borderColor: "border-krishian-green/20",
      impact: "24/7 Access"
    },
    {
      name: "Rashida Akter",
      role: "Retailer, Chittagong",
      avatar: "👩‍💼",
      content: "Krishian has helped me build direct relationships with farmers. The transparency and fair pricing benefit both of us. My customers love the fresh produce quality.",
      rating: 5,
      color: "from-krishian-green to-krishian-blue",
      bgColor: "bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5",
      borderColor: "border-krishian-green/20",
      impact: "Direct Connection"
    },
    {
      name: "Karim Uddin",
      role: "Farmer, Rajshahi",
      avatar: "👨‍🌾",
      content: "Before Krishian, I was at the mercy of middlemen. Now I have control over my prices and can plan my harvests better. My family's life has completely changed.",
      rating: 5,
      color: "from-krishian-green to-krishian-blue",
      bgColor: "bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5",
      borderColor: "border-krishian-green/20",
      impact: "Life Transformed"
    },
    {
      name: "Nusrat Jahan",
      role: "Wholesaler, Dhaka",
      avatar: "👩‍💼",
      content: "The platform's AI predictions help me make better purchasing decisions. I can plan my inventory based on accurate market forecasts. It's like having a crystal ball!",
      rating: 5,
      color: "from-krishian-green to-krishian-blue",
      bgColor: "bg-gradient-to-br from-krishian-green/5 to-krishian-blue/5",
      borderColor: "border-krishian-green/20",
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

  const totalSlides = Math.ceil(testimonials.length / perPage);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-krishian-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-krishian-green/5 via-krishian-blue/5 to-krishian-green/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(160,199,82,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(30,58,138,0.1) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating Quote Icons */}
        <div className="absolute top-20 left-20 text-6xl text-krishian-green/20 animate-bounce">💬</div>
        <div className="absolute top-40 right-32 text-5xl text-krishian-blue/20 animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-32 left-1/4 text-6xl text-krishian-green/20 animate-bounce" style={{ animationDelay: '1s' }}>💬</div>
        <div className="absolute bottom-20 right-20 text-5xl text-krishian-blue/20 animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header removed for a cleaner look */}

        {/* Testimonials Carousel - professional cards */}
        <div className="relative mb-20">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-1">
                  {testimonials
                    .slice(slideIndex * perPage, slideIndex * perPage + perPage)
                    .map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-card transition-all duration-300 relative">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-krishian-green to-krishian-blue text-white flex items-center justify-center text-xl">
                                {testimonial.avatar}
                              </div>
                              <div>
                                <h4 className="font-semibold text-krishian-dark">{testimonial.name}</h4>
                                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                              </div>
                            </div>
                            <StarRating rating={testimonial.rating} color={`text-krishian-green`} />
                          </div>

                          <blockquote className="text-gray-700 leading-relaxed mb-4">
                            "{testimonial.content}"
                          </blockquote>

                          <div className="text-xs font-semibold text-krishian-dark/70">
                            {testimonial.impact}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              aria-label="Previous testimonials"
              onClick={goPrev}
              className="rounded-full border-2 border-krishian-green text-krishian-dark px-4 py-2 hover:bg-krishian-green hover:text-white transition-colors"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full ${i === currentSlide ? 'bg-krishian-green' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonials slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonials"
              onClick={goNext}
              className="rounded-full border-2 border-krishian-green text-krishian-dark px-4 py-2 hover:bg-krishian-green hover:text-white transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-krishian-green to-krishian-blue rounded-2xl p-12 text-krishian-white relative overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-krishian-white mb-8">
                Trusted by Thousands
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-krishian-white mb-2">98%</div>
                  <div className="text-xl text-krishian-white/80">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-krishian-white mb-2">25K+</div>
                  <div className="text-xl text-krishian-white/80">Happy Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-krishian-white mb-2">5K+</div>
                  <div className="text-xl text-krishian-white/80">Active Buyers</div>
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

