import React, { useState, useEffect } from 'react';

const CrisisAlertSection = () => {
  const [moneyLost, setMoneyLost] = useState(5.9);
  const [produceWasted, setProduceWasted] = useState(4.5);
  const [farmersAffected, setFarmersAffected] = useState(3.2);

  // Simulate live updating numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setMoneyLost(prev => prev + (Math.random() * 0.1));
      setProduceWasted(prev => prev + (Math.random() * 0.05));
      setFarmersAffected(prev => prev + (Math.random() * 0.02));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: 'Farmer' },
    { label: 'Local Trader' },
    { label: 'Arot' },
    { label: 'City Market' },
    { label: 'Retailer' },
    { label: 'Consumer' }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <style>{`
        @keyframes arrowDash {
          0% { transform: translateX(0); opacity: .2; }
          50% { transform: translateX(6px); opacity: 1; }
          100% { transform: translateX(12px); opacity: .2; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Critical Alert Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Critical Challenges Alert
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            The Hidden Crisis in
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6">
            Bangladesh Agriculture
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every second, Bangladesh loses thousands of taka and tons of fresh produce due to systematic inefficiencies. Watch the crisis unfold in real-time.
          </p>
        </div>

        {/* Live Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Money Lost */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-gray-800">Money Lost Today</h3>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              ৳{moneyLost.toFixed(1)}Cr
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span>Live updating • BD Time</span>
              <svg className="w-4 h-4 ml-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Produce Wasted */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-gray-800">Produce Wasted</h3>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {produceWasted.toFixed(1)}K TON
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span>Live updating • BD Time</span>
              <svg className="w-4 h-4 ml-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Farmers Affected */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-semibold text-gray-800">Farmers Affected</h3>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {farmersAffected.toFixed(1)}K+
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span>Live updating • BD Time</span>
              <svg className="w-4 h-4 ml-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Step-by-step flow with animated arrows */}
        {/* <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-red-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center md:flex-1">
                <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-red-50 text-red-700 border border-red-100 w-full">
                  <span className="text-sm md:text-base font-semibold">{index + 1}. {step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center mx-3 md:mx-4">
                    <svg
                      className="w-8 h-8 text-red-400"
                      style={{ animation: `arrowDash 1.2s linear infinite`, animationDelay: `${index * 160}ms` }}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-red-500">Arrows animate in sequence to illustrate delays and waste across the chain.</div>
        </div> */}

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
            <span className="text-lg font-semibold text-gray-800">Traditional System</span>
          </div> */}
          {/* <div className="flex items-center justify-end">
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">6 Steps • 30% wastage • 30%-60% price hike</span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default CrisisAlertSection;
