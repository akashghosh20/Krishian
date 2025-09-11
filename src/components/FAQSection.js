import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Krishian help farmers get better prices?",
      answer: "Krishian connects farmers directly with buyers, eliminating middlemen and ensuring fair market prices. Our platform provides real-time pricing data and matches farmers with the best buyers in their area."
    },
    {
      question: "Is there a cost to join Krishian?",
      answer: "We offer a free starter plan for small farmers. Our paid plans start at $29/month and include advanced features like unlimited listings, priority support, and detailed analytics."
    },
    {
      question: "How do I get started on the platform?",
      answer: "Simply sign up, complete your profile, and start listing your produce. Our AI will match you with suitable buyers, and you can begin selling within minutes."
    },
    {
      question: "What types of crops can I sell on Krishian?",
      answer: "Krishian supports all types of agricultural produce including vegetables, fruits, grains, spices, and more. We work with farmers growing everything from staple crops to specialty items."
    },
    {
      question: "How does the delivery system work?",
      answer: "We have a network of logistics partners who can handle pickup and delivery. You can also arrange your own transportation. Our platform helps coordinate the entire process."
    },
    {
      question: "Is my data secure on Krishian?",
      answer: "Yes, we take data security seriously. All your information is encrypted and protected. We never share your personal data with third parties without your consent."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Krishian and how we can help your farming business.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-krishian-dark pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-krishian-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="text-krishian-green font-medium hover:text-krishian-dark transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

