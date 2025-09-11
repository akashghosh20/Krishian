import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const AboutPage = () => {
	return (
		<div className="App">
			<Navbar />
			<section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden text-center">
				<div className="absolute inset-0 opacity-20 pointer-events-none">
					<div className="w-full h-full" style={{
						backgroundImage: `radial-gradient(circle at 20% 20%, rgba(140, 198, 63, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(46, 90, 39, 0.2) 0%, transparent 50%)`
					}}></div>
				</div>
				<h1 className="text-4xl md:text-6xl font-bold text-krishian-dark text-3d">About Us</h1>
				<p className="text-gray-600 mt-5 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Learn more about our mission, vision, and the team driving agricultural transformation.</p>
				<div className="mt-10 flex justify-center gap-4">
					<a href="#about" className="btn-primary">Our Story</a>
					<a href="#team" className="btn-secondary">Meet the Team</a>
				</div>
			</section>
			<AboutSection />
			<WhyChooseUsSection />
			<TestimonialsSection />
			<Footer />
		</div>
	);
};

export default AboutPage;
