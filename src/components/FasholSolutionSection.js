import React, { useEffect, useRef } from 'react';

const FasholSolutionSection = () => {
  const solutionSteps = [
    {
      step: 1,
      title: "Farmer",
      icon: "👥",
      color: "bg-green-100",
      description: "Direct connection to platform"
    },
    {
      step: 2,
      title: "Fashol Platform",
      icon: "⚡",
      color: "bg-green-500",
      description: "Smart matching & logistics",
      isActive: true,
      activeText: "Fashol: 67% Active"
    },
    {
      step: 3,
      title: "Buyers",
      icon: "🎯",
      color: "bg-gray-100",
      description: "Direct market access"
    }
  ];

  const benefits = [
    {
      metric: "26%",
      description: "Waste Reduction"
    },
    {
      metric: "30%",
      description: "Less Millage Used"
    },
    {
      metric: "80%",
      description: "Middleman Removed"
    }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* VS Comparison Header */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-1 bg-red-500"></div>
          <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-4">
            <span className="text-white font-bold text-lg">VS</span>
          </div>
          <div className="w-16 h-1 bg-green-500"></div>
        </div>

        {/* Success Badge */}
        <div className="flex justify-end mb-8">
          <div className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">3 Steps • 26% waste reduction • 20%-40% profit</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fashol Solution
          </h2>
        </div>

        {/* Vertical Timeline */}
        <Timeline steps={solutionSteps} />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {benefit.metric}
              </div>
              <div className="text-lg font-semibold text-gray-600">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>

        {/* Solution Description */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How Fashol Transforms Agriculture
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our streamlined 3-step process eliminates the traditional 6-step supply chain, 
              reducing waste by 26% and increasing farmer profits by 20-40% while removing 80% of middlemen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-semibold text-gray-800 mb-2">Traditional System Problems:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 6 complex steps</li>
                  <li>• 30% wastage</li>
                  <li>• 30-60% price hikes</li>
                  <li>• Multiple middlemen</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-gray-800 mb-2">Fashol Solution Benefits:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Only 3 simple steps</li>
                  <li>• 26% waste reduction</li>
                  <li>• 20-40% profit increase</li>
                  <li>• 80% fewer middlemen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
            Join the Fashol Revolution
          </button>
        </div>
      </div>
    </section>
  );
};

export default FasholSolutionSection;

// Timeline component with simple on-scroll animations
const Timeline = ({ steps }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = containerRef.current?.querySelectorAll('.timeline-anim');
    items?.forEach((el) => observer.observe(el));

    return () => items?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto mb-16">
      {/* Center line on md+, left line on mobile */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-green-200 md:left-1/2 md:-translate-x-1/2"></div>

      {steps.map((step, index) => (
        <div key={index} className="relative md:grid md:grid-cols-2 md:gap-12 mb-12">
          {/* Mobile dot on left line */}
          <div className="absolute left-[6px] md:hidden top-6 w-3 h-3 bg-green-500 rounded-full ring-4 ring-green-100"></div>

          {/* Center dot on md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-green-500 rounded-full ring-8 ring-green-100"></div>

          {/* Content card */}
          <div className={`${index % 2 === 0 ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
            <div className={`timeline-anim ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} bg-white rounded-2xl shadow-lg p-6`}
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 mr-3 rounded-full flex items-center justify-center text-lg ${step.isActive ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'}`}>
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-green-700">Step {step.step}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {step.isActive && step.activeText && (
                <div className="mt-4 inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {step.activeText}
                </div>
              )}
            </div>
          </div>

          {/* Spacer on the opposite side to balance grid */}
          <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} hidden md:block`}></div>
        </div>
      ))}
    </div>
  );
};
