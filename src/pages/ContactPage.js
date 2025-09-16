import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
	return (
		<>
        <Navbar/>
        <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-krishian-white to-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center bg-gradient-to-r from-krishian-green/15 to-krishian-blue/15 px-6 py-3 rounded-full border border-krishian-green/30 mb-6">
						<div className="w-2 h-2 bg-krishian-green rounded-full mr-3"></div>
						<span className="text-sm font-medium text-krishian-dark">Get in touch</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-krishian-dark">Contact</h1>
					<p className="text-gray-600 mt-3 max-w-2xl mx-auto">Questions, partnerships, or press — we respond within 1 business day.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Form */}
					<form className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-soft space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Your name" />
							<input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Email" />
						</div>
						<input className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Subject" />
						<textarea rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Message" />
						<div className="flex items-center gap-3">
							<button type="button" className="bg-krishian-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-krishian-green-dark">Send message</button>
							<span className="text-xs text-gray-500">We’ll never share your info.</span>
						</div>
					</form>

					{/* Info */}
					<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-soft">
						<h3 className="text-xl font-semibold text-krishian-dark mb-2">Office</h3>
						<p className="text-gray-600">Dhaka, Bangladesh</p>
						<div className="mt-4 space-y-1 text-gray-600">
							<p>Email: hello@krishian.com</p>
							<p>Phone: +880 1234 567890</p>
						</div>
						<div className="mt-6">
							<h4 className="text-sm font-semibold text-krishian-dark mb-2">Follow</h4>
							<div className="flex gap-3 text-sm">
								<a href="#" className="text-krishian-green hover:text-krishian-blue">Facebook</a>
								<a href="#" className="text-krishian-green hover:text-krishian-blue">Twitter</a>
								<a href="#" className="text-krishian-green hover:text-krishian-blue">LinkedIn</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <Footer/>
        </>
	);
};

export default ContactPage;


