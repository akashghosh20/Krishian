import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CrisisAlertSection from '../components/CrisisAlertSection';
import TraditionalSystemSection from '../components/TraditionalSystemSection';
import FasholSolutionSection from '../components/FasholSolutionSection';
import UNSDGSection from '../components/UNSDGSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TechnologySection from '../components/TechnologySection';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import PartnersSection from '../components/PartnersSection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
	return (
		<div className="App">
			<Navbar />
			<HeroSection />
			
			<UNSDGSection />
			<StatsSection />
			<AboutSection />
			<WhyChooseUsSection />
			<ServicesSection />
			<HowItWorksSection />
            <CrisisAlertSection />
			<TraditionalSystemSection />
			<FasholSolutionSection />
			<TechnologySection />
			<TestimonialsSection />
			<CaseStudiesSection />
			<PricingSection />
			<FAQSection />
			<PartnersSection />
			<BlogSection />
			<NewsletterSection />
			<ContactSection />
			<Footer />
			<WhatsAppButton />
			<ScrollToTop />
		</div>
	);
};

export default HomePage;
