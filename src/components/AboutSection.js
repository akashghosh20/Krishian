import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const teamMembers = [
    {
      name: "Ayesha Rahman",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop",
      description: "Passionate about sustainable agriculture and farmer empowerment in Bangladesh."
    },
    {
      name: "Tanvir Hasan",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop",
      description: "Tech innovator building the future of agricultural technology."
    },
    {
      name: "Nusrat Jahan",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
      description: "Operations expert ensuring smooth supply chain management."
    },
    {
      name: "Mehedi Ahmed",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
      description: "Full-stack developer creating innovative solutions for farmers."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-krishian-white via-gray-50 to-krishian-green/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(160,199,82,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(30,58,138,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="inline-flex items-center bg-krishian-green/10 text-krishian-green px-6 py-3 rounded-2xl text-sm font-medium border border-krishian-green/20 group">
              <div className="w-3 h-3 bg-krishian-green rounded-full mr-3 animate-pulse"></div>
              <span className="group-hover:scale-105 transition-transform duration-300">Our Story</span>
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-krishian-dark mb-8">
            About <span className="text-gradient">Krishian</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a team of passionate individuals dedicated to transforming agriculture through technology and innovation, creating a sustainable future for farmers worldwide.
            <span className="block mt-4 text-krishian-green font-semibold">
              Every innovation we create is designed to empower farmers and build a better tomorrow.
            </span>
          </p>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-krishian-dark">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower smallholder farmers by connecting them to high-margin markets through data-driven logistics and real-time pricing, ensuring better incomes and reducing food waste.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-krishian-green rounded-full"></div>
                <span className="text-gray-700">Tech-enabled agricultural platform</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-krishian-green rounded-full"></div>
                <span className="text-gray-700">Data-driven logistics optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-krishian-green rounded-full"></div>
                <span className="text-gray-700">Real-time market pricing</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80"
              alt="Team working together"
              className="w-full h-96 object-cover rounded-2xl shadow-xl border border-krishian-green/10"
            />
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-krishian-dark text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-krishian-white rounded-2xl p-6 text-center card-hover-unified shadow-lg border border-gray-100 hover:border-krishian-green/20">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border border-krishian-green/10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-krishian-dark mb-2">
                  {member.name}
                </h4>
                <p className="text-krishian-green font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
