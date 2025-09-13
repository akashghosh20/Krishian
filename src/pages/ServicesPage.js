import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';

const ServicesPage = () => {
	// App catalog for tabs
	const apps = useMemo(() => ([
		{
			id: 'jogaan',
			audience: 'farmers',
			title: 'Jogaan',
			tagline: 'Grow Smart, Sell Better',
			category: 'Agriculture',
			logo: '/assets/logo.png',
			playStoreUrl: 'https://play.google.com/store/apps/details?id=com.krishian.jogaan'
		},
		{
			id: 'agri-assist',
			audience: 'farmers',
			title: 'Agri Assist',
			tagline: 'Advisory and Task Planner',
			category: 'Agriculture',
			logo: '/assets/logo.png',
			playStoreUrl: ''
		},
		{
			id: 'buyer-hub',
			audience: 'buyers',
			title: 'Buyer Hub',
			tagline: 'Source Fresh, On Time',
			category: 'Procurement',
			logo: '/assets/logo.png',
			playStoreUrl: ''
		}
	]), []);

	const [activeTab, setActiveTab] = useState('farmers');

	const filteredApps = useMemo(() => apps.filter(a => a.audience === activeTab), [apps, activeTab]);

	return (
		<div className="App">
			<Navbar />
			<section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden text-center">
				<div className="absolute inset-0 opacity-20 pointer-events-none">
					<div className="w-full h-full" style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, rgba(140, 198, 63, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(46, 90, 39, 0.2) 0%, transparent 50%)`
					}}></div>
				</div>
				<h1 className="text-4xl md:text-6xl font-bold text-krishian-dark text-3d">Our Services</h1>
				<p className="text-gray-600 mt-5 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Deep dive into our technology-driven services that empower farmers and businesses.</p>
			</section>

			{/* Choose Your Solution - Tabs */}
			<section className="py-10">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-krishian-dark mb-6">Choose Your Solution</h2>
					<p className="text-center text-gray-600 mb-8">Tailored applications designed for different roles in the agricultural ecosystem.</p>

					<div className="flex justify-center gap-4 mb-10">
						<button onClick={() => setActiveTab('farmers')} className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold shadow-sm transition ${activeTab === 'farmers' ? 'bg-krishian-green text-white' : 'bg-white text-krishian-dark'} border border-green-100`}>
							<span className="text-xl">🌱</span>
							<span>For Farmers</span>
							<span className={`ml-2 inline-flex items-center justify-center w-6 h-6 text-sm rounded-full ${activeTab === 'farmers' ? 'bg-white text-krishian-dark' : 'bg-gray-100 text-gray-700'}`}>{apps.filter(a => a.audience === 'farmers').length}</span>
						</button>
						<button onClick={() => setActiveTab('buyers')} className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold shadow-sm transition ${activeTab === 'buyers' ? 'bg-krishian-dark text-white' : 'bg-white text-krishian-dark'} border border-green-100`}>
							<span className="text-xl">🛒</span>
							<span>For Buyers</span>
							<span className={`ml-2 inline-flex items-center justify-center w-6 h-6 text-sm rounded-full ${activeTab === 'buyers' ? 'bg-white text-krishian-dark' : 'bg-gray-100 text-gray-700'}`}>{apps.filter(a => a.audience === 'buyers').length}</span>
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{filteredApps.map(app => (
							<div key={app.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition card-hover">
								<div className="flex items-start gap-4">
									<img src={app.logo} alt={app.title} className="w-16 h-16 rounded-xl object-cover" />
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-krishian-dark">{app.title}</h3>
										<p className="text-gray-600">{app.tagline}</p>
										<div className="mt-3 inline-flex items-center gap-2">
											<span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-krishian-dark border border-green-100">{app.category}</span>
											<span className="text-green-600" title="Verified">✅</span>
										</div>
									</div>
								</div>
								<p className="text-gray-700 mt-4">{activeTab === 'farmers' ? 'Built to streamline farming operations and improve productivity.' : 'Designed for procurement teams to source fresh produce efficiently.'}</p>
								<div className="mt-5 flex items-center justify-between">
									<div className="flex items-center gap-2 text-green-700">
										<span>✔</span>
										<span className="text-sm font-medium">Free to Download</span>
									</div>
									{app.playStoreUrl ? (
										<a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-krishian-green text-white font-semibold px-5 py-3 rounded-xl shadow-sm hover:shadow transition">
											<span className="text-lg">▶</span>
											<span>Install</span>
										</a>
									) : (
										<span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 font-semibold px-5 py-3 rounded-xl cursor-not-allowed">
											<span className="text-lg">⏳</span>
											<span>Coming Soon</span>
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{ title: 'Smart Aggregation', desc: 'Optimize collection with data-driven routing and real-time quality control.' },
						{ title: 'Cold Chain Logistics', desc: 'Preserve freshness with temperature-monitored, optimized dispatch.' },
						{ title: 'Market Intelligence', desc: 'Leverage live pricing and demand forecasts for better decisions.' }
					].map((item, i) => (
						<div key={i} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
							<h3 className="text-2xl font-semibold text-krishian-dark mb-2">{item.title}</h3>
							<p className="text-gray-600">{item.desc}</p>
							<div className="w-full h-1 bg-gradient-to-r from-krishian-green to-krishian-dark rounded-full mt-4"></div>
						</div>
					))}
				</div>
			</section>

			<ServicesSection />
			<HowItWorksSection />
			{/* <PricingSection /> */}
			<Footer />
		</div>
	);
};

export default ServicesPage;
