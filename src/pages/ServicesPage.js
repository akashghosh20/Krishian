import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';

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
			playStoreUrl: 'https://play.google.com/store/apps/details?id=com.krishian.jogaan',
			description: 'Jogaan is a comprehensive farming app that helps farmers manage their crops, track growth, get expert advice, and connect directly with buyers. Our AI-powered platform provides personalized recommendations for optimal yield.',
			features: [
				'Crop Management & Monitoring',
				'AI-Powered Pest Detection',
				'Weather Forecast & Alerts',
				'Market Prices & Trends',
				'Direct Buyer Connections'
			],
			screenshots: [
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuK48jHoDb65AZZ37pxrT_7bpnzQKo-PP3ww&s',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8AMAI6XHLwBPxPJSDXj8qhRbOEdDOn2TLw&s',
				'/assets/screenshots/jogaan-3.jpg',
				'/assets/screenshots/jogaan-4.jpg'
			]
		},
		{
			id: 'agri-assist',
			audience: 'farmers',
			title: 'Agri Assist',
			tagline: 'Advisory and Task Planner',
			category: 'Agriculture',
			logo: '/assets/logo.png',
			playStoreUrl: '',
			description: 'Agri Assist helps farmers plan their agricultural activities with precision. Get daily task reminders, expert advisory services, and resource management tools all in one place.',
			features: [
				'Personalized Task Planner',
				'Expert Advisory Services',
				'Resource Allocation Tools',
				'Progress Tracking',
				'Yield Prediction'
			],
			screenshots: [
				'/assets/screenshots/agri-assist-1.jpg',
				'/assets/screenshots/agri-assist-2.jpg',
				'/assets/screenshots/agri-assist-3.jpg'
			]
		},
		{
			id: 'buyer-hub',
			audience: 'buyers',
			title: 'Buyer Hub',
			tagline: 'Source Fresh, On Time',
			category: 'Procurement',
			logo: '/assets/logo.png',
			playStoreUrl: '',
			description: 'Buyer Hub connects procurement teams directly with farmers. Source fresh produce, track quality in real-time, and optimize your supply chain with our intelligent platform.',
			features: [
				'Direct Farmer Connections',
				'Quality Assessment Tools',
				'Supply Chain Tracking',
				'Bulk Order Management',
				'Real-time Inventory Updates'
			],
			screenshots: [
				'/assets/screenshots/buyer-hub-1.jpg',
				'/assets/screenshots/buyer-hub-2.jpg',
				'/assets/screenshots/buyer-hub-3.jpg',
				'/assets/screenshots/buyer-hub-4.jpg'
			]
		}
	]), []);

	const [activeTab, setActiveTab] = useState('farmers');
	const [selectedApp, setSelectedApp] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const filteredApps = useMemo(() => apps.filter(a => a.audience === activeTab), [apps, activeTab]);

	const openAppDetails = (app) => {
		setSelectedApp(app);
		setCurrentImageIndex(0);
		document.body.style.overflow = 'hidden'; // Prevent background scrolling
	};

	const closeAppDetails = () => {
		setSelectedApp(null);
		document.body.style.overflow = 'auto'; // Re-enable scrolling
	};

	const nextImage = () => {
		setCurrentImageIndex(prevIndex => 
			prevIndex === selectedApp.screenshots.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex(prevIndex => 
			prevIndex === 0 ? selectedApp.screenshots.length - 1 : prevIndex - 1
		);
	};

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
							<div key={app.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition card-hover cursor-pointer" onClick={() => openAppDetails(app)}>
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
										<a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-krishian-green text-white font-semibold px-5 py-3 rounded-xl shadow-sm hover:shadow transition" onClick={(e) => e.stopPropagation()}>
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

			{/* App Detail Modal */}
			{selectedApp && (
				<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
					<div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
						{/* Close Button */}
						<button 
							onClick={closeAppDetails} 
							className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						{/* Left Side - App Details */}
						<div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
							<div className="flex items-start gap-4 mb-6">
								<img src={selectedApp.logo} alt={selectedApp.title} className="w-16 h-16 rounded-xl object-cover" />
								<div>
									<h2 className="text-3xl font-bold text-krishian-dark">{selectedApp.title}</h2>
									<p className="text-krishian-green font-medium">{selectedApp.tagline}</p>
									<div className="mt-2 inline-flex items-center gap-2">
										<span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-krishian-dark border border-green-100">{selectedApp.category}</span>
										<span className="text-green-600" title="Verified">✅ Verified</span>
									</div>
								</div>
							</div>

							<p className="text-gray-700 mb-6">{selectedApp.description}</p>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-krishian-dark mb-3">Key Features</h3>
								<ul className="space-y-2">
									{selectedApp.features.map((feature, index) => (
										<li key={index} className="flex items-start">
											<svg className="h-5 w-5 text-krishian-green mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mt-6 flex items-center justify-between">
								<div className="flex items-center gap-2 text-green-700">
									<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="font-medium">Free to Download</span>
								</div>
								{selectedApp.playStoreUrl ? (
									<a href={selectedApp.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-krishian-green hover:bg-krishian-dark text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition">
										<svg className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M5.266 9.765A7.08 7.08 0 0 1 6.65 6.699a7.18 7.18 0 0 1 1.025-1.618 7.22 7.22 0 0 1 3.166-2.155 7.304 7.304 0 0 1 4.399-.087c.55.183 1.06.45 1.515.791.325.249.618.537.873.857.212.262.4.543.56.84.192.355.327.736.403 1.129.084.434.12.876.107 1.317-.013.44-.075.877-.185 1.302-.11.425-.27.835-.475 1.222-.206.387-.455.748-.744 1.076-.29.328-.617.62-.976.87-.36.251-.748.46-1.157.62-.41.161-.838.272-1.274.33-.436.059-.877.066-1.316.021-.44-.045-.874-.142-1.292-.29a7.22 7.22 0 0 1-1.129-.56 7.08 7.08 0 0 1-.857-.873 7.304 7.304 0 0 1-.791-1.515 7.18 7.18 0 0 1-.29-1.292 7.08 7.08 0 0 1-.021-1.316c.013-.44.059-.877.142-1.316zm13.468 4.47a7.08 7.08 0 0 1-1.025 1.618 7.22 7.22 0 0 1-3.166 2.155 7.304 7.304 0 0 1-4.399.087 7.18 7.18 0 0 1-1.515-.791 7.08 7.08 0 0 1-.873-.857 7.304 7.304 0 0 1-.56-.84 7.18 7.18 0 0 1-.403-1.129 7.08 7.08 0 0 1-.107-1.317c.013-.44.075-.877.185-1.302.11-.425.27-.835.475-1.222.206-.387.455-.748.744-1.076.29-.328.617-.62.976-.87.36-.251.748-.46 1.157-.62.41-.161.838-.272 1.274-.33.436-.059.877-.066 1.316-.021.44.045.874.142 1.292.29.418.148.813.355 1.129.56.316.206.612.443.873.73.262.287.487.61.67.957.183.347.322.718.413 1.104.092.386.135.783.129 1.18.006.398-.037.795-.129 1.18z" fill="white"/>
										</svg>
										<span>Get on Google Play</span>
									</a>
								) : (
									<span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 font-semibold px-5 py-3 rounded-xl">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
										</svg>
										<span>Coming Soon</span>
									</span>
								)}
							</div>
						</div>

						{/* Right Side - Image Carousel */}
						<div className="w-full md:w-1/2 bg-gray-100 relative">
							{/* Main Image */}
							<div className="h-full flex items-center justify-center p-4">
								<img 
									src={selectedApp.screenshots[currentImageIndex]} 
									alt={`${selectedApp.title} screenshot ${currentImageIndex + 1}`}
									className="max-h-full max-w-full object-contain rounded-lg shadow-md"
								/>
							</div>

							{/* Navigation Arrows */}
							{selectedApp.screenshots.length > 1 && (
								<>
									<button 
										onClick={prevImage}
										className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
										</svg>
									</button>
									<button 
										onClick={nextImage}
										className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</>
							)}

							{/* Thumbnail Indicators */}
							{selectedApp.screenshots.length > 1 && (
								<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
									{selectedApp.screenshots.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentImageIndex(index)}
											className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-krishian-green' : 'bg-gray-300'}`}
											aria-label={`Go to screenshot ${index + 1}`}
										/>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			)}

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
			<Footer />
		</div>
	);
};

export default ServicesPage;