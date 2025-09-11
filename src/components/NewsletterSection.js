import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-krishian-green to-krishian-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with Krishian
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest news, tips, and updates about agriculture and technology delivered to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-krishian-green font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-green-100 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="bg-white bg-opacity-20 rounded-xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-green-100">
                You've successfully subscribed to our newsletter.
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">Weekly Updates</h3>
              <p className="text-green-100 text-sm">
                Get the latest market trends and farming tips
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Content</h3>
              <p className="text-green-100 text-sm">
                Access to premium articles and case studies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Early Access</h3>
              <p className="text-green-100 text-sm">
                Be the first to know about new features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
