import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImageSlider from '../components/ImageSlider';
import CrisisAlertSection from '../components/CrisisAlertSection';
import UNSDGSection from '../components/UNSDGSection';
import ProblemCardsSection from '../components/ProblemCardsSection';
import AboutSection from '../components/AboutSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TraditionalSystemSection from '../components/TraditionalSystemSection';
import FasholSolutionSection from '../components/FasholSolutionSection';
import TechnologySection from '../components/TechnologySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import ImpactSection from '../components/ImpactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
	return (
		<div className="App">
			<Navbar />
			<ImageSlider />
			<CrisisAlertSection />
			<UNSDGSection />
			<ProblemCardsSection />
			<AboutSection />
			<HowItWorksSection />
			<TraditionalSystemSection />
			<FasholSolutionSection />
			<TechnologySection />
			<TestimonialsSection />
			<FAQSection />
			<ContactSection />
			{/* <ImpactSection /> */}
			<Footer />
			<WhatsAppButton />
			<ScrollToTop />
		</div>
	);
};

export default HomePage;
