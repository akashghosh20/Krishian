import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer, Satkhira",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: "Krishian has transformed my farming business. I now get better prices for my crops and have direct access to buyers. My income has increased by 40% since joining the platform.",
      rating: 5
    },
    {
      name: "Rahul ",
      role: "Buyer, Khulna",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: "The quality of produce I get through Krishian is exceptional. The logistics are smooth and I can track my orders in real-time. It's a game-changer for my business.",
      rating: 5
    },
    {
      name: "Amit ",
      role: "Farmer, Mymensingh",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "The mobile app is so easy to use. I can check market prices, connect with buyers, and manage my inventory all from my phone. It has made farming much more efficient.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from farmers and buyers who have transformed their businesses with Krishian.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-hover shadow-lg">
              <div className="flex items-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-krishian-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-krishian-green mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-krishian-green mb-2">25K+</div>
            <div className="text-gray-600">Happy Farmers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-krishian-green mb-2">5K+</div>
            <div className="text-gray-600">Active Buyers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
