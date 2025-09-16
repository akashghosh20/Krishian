import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

const posts = [
	{
		id: 'post-1',
		title: 'How AI is Transforming Agriculture in Bangladesh',
		excerpt: 'From price prediction to waste reduction — a practical look at impact.',
		date: 'Sep 2025',
		category: 'AI & Data',
		image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80'
	},
	{
		id: 'post-2',
		title: 'Cold Chain Basics for Fresh Produce',
		excerpt: 'Key practices that keep quality high from farm to market.',
		date: 'Aug 2025',
		category: 'Logistics',
		image: 'https://images.unsplash.com/photo-1542801637-3c0a1120d8d6?w=1200&auto=format&fit=crop&q=80'
	},
	{
		id: 'post-3',
		title: 'Designing a Farmer-First Mobile Experience',
		excerpt: 'What we learned building accessible tools for rural users.',
		date: 'Jul 2025',
		category: 'Product',
		image: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1200&auto=format&fit=crop&q=80'
	}
];

const BlogPage = () => {
	return (
		<>
        <Navbar/>
        <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-krishian-white to-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center bg-gradient-to-r from-krishian-green/15 to-krishian-blue/15 px-6 py-3 rounded-full border border-krishian-green/30 mb-6">
						<div className="w-2 h-2 bg-krishian-green rounded-full mr-3"></div>
						<span className="text-sm font-medium text-krishian-dark">Insights & Updates</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-krishian-dark">Blog</h1>
					<p className="text-gray-600 mt-3 max-w-2xl mx-auto">Read the latest from our team about technology, operations, and impact.</p>
				</div>

				{/* Posts Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((p) => (
						<article key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
							<div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<span className="text-xs font-semibold text-krishian-dark/70">{p.date}</span>
									<span className="text-xs bg-gradient-to-r from-krishian-green to-krishian-blue text-white px-3 py-1 rounded-full">{p.category}</span>
								</div>
								<h3 className="text-lg font-semibold text-krishian-dark mb-2">{p.title}</h3>
								<p className="text-gray-600 text-sm">{p.excerpt}</p>
								<div className="mt-5">
									<button className="text-sm font-semibold text-krishian-green hover:text-krishian-blue">Read more</button>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
        <Footer/>
        </>
	);
};

export default BlogPage;


