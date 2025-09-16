import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		const onScroll = () => {
			const s = window.scrollY > 10;
			setScrolled(s);
			controls.start({ height: s ? 64 : 80, backdropFilter: s ? 'saturate(120%) blur(6px)' : 'none', transition: { type: 'spring', stiffness: 260, damping: 30 } });
		};
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [controls]);

	const navBgImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjd6LSq7g_bS1uFIMWwxUUNdjMAWIJj1Ls3Q&s";
	return (
		<motion.nav 
			animate={controls} 
			className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-colors duration-300 ${scrolled ? 'border-b border-krishian-green/20' : 'border-b border-transparent'}`}
			style={{
				backgroundColor: scrolled ? '#ffffff' : 'ffffff',
				backgroundImage: scrolled ? 'none' : 'none',
				backgroundSize: undefined,
				backgroundPosition: undefined,
				backgroundRepeat: undefined,
				backdropFilter: 'blur(10px)'
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link to="/" className="flex items-center space-x-2">
							<img 
								src="/assets/logo.png" 
								alt="Krishian Logo" 
								className="h-20 w-auto hover:opacity-90 transition-opacity duration-200"
							/>
							{/* <span className="hidden sm:inline text-xl font-semibold text-krishian-dark">Krishian</span> */}
						</Link>
					</div>
					
					{/* Navigation Links - Desktop */}
					<div className="hidden lg:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<a href="#home" className={`${scrolled ? 'text-krishian-dark hover:text-krishian-green drop-shadow-sm' : 'text-krishian-dark hover:text-krishian-green'} px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-krishian-green/10`}>
								Home
							</a>
							<Link to="/about" className={`${scrolled ? 'text-krishian-dark hover:text-krishian-green drop-shadow-sm' : 'text-krishian-dark hover:text-krishian-green'} px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-krishian-green/10`}>
								About
							</Link>
							<Link to="/services" className={`${scrolled ? 'text-krishian-dark hover:text-krishian-green drop-shadow-sm' : 'text-krishian-dark hover:text-krishian-green'} px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-krishian-green/10`}>
								Services
							</Link>
							<Link to="/blog" className={`${scrolled ? 'text-krishian-dark hover:text-krishian-green drop-shadow-sm' : 'text-krishian-dark hover:text-krishian-green'} px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-krishian-green/10`}>
								Blog
							</Link>
							<Link to="/contact" className={`${scrolled ? 'text-krishian-dark hover:text-krishian-green drop-shadow-sm' : 'text-krishian-dark hover:text-krishian-green'} px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-krishian-green/10`}>
								Contact
							</Link>
						</div>
					</div>

					{/* Actions - Desktop */}
					<div className="hidden md:flex items-center gap-4">
						<a href="tel:+8801234567890" className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-krishian-green/40 text-krishian-dark hover:bg-krishian-green/10 transition-all duration-300 hover:scale-105">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-krishian-green">
								<path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h1.078c.98 0 1.845.63 2.117 1.566l.498 1.744a2.25 2.25 0 0 1-.57 2.232l-1.01 1.01a15.97 15.97 0 0 0 6.03 6.03l1.01-1.01a2.25 2.25 0 0 1 2.232-.57l1.744.498A2.25 2.25 0 0 1 19.5 18.422V19.5a2.25 2.25 0 0 1-2.25 2.25h-.75C8.407 21.75 2.25 15.593 2.25 8.25v-.75Z" />
							</svg>
							<span className="text-sm font-medium">Call Us</span>
						</a>
						<a href="mailto:hello@krishian.com" className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-krishian-green text-krishian-white hover:bg-krishian-green-dark transition-all duration-300 hover:scale-105 shadow-lg">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
								<path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.25-.75a.75.75 0 0 0-.75.75v.243l8.25 4.95 8.25-4.95V6.75a.75.75 0 0 0-.75-.75H3.75Zm16.5 3.207-7.86 4.723a.75.75 0 0 1-.78 0L3.75 9.207v8.043c0 .414.336.75.75.75h15.75a.75.75 0 0 0 .75-.75V9.207Z" />
							</svg>
							<span className="text-sm font-semibold">Send Mail</span>
						</a>
					</div>
					
					{/* Mobile menu button */}
					<div className="md:hidden">
						<button 
							aria-label="Open menu"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`text-krishian-dark hover:text-krishian-green focus:outline-none`}
						>
							{!isMenuOpen ? (
								<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							) : (
								<svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
				</div>
				
				{/* Mobile menu */}
				{isMenuOpen && (
					<div className="md:hidden fixed inset-0 z-[60]" style={{
						backgroundImage: `linear-gradient(to bottom, rgba(83,109,75,0.9), rgba(160,199,82,0.8)), url('${navBgImage}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'top center'
					}}>
						<div className="flex flex-col h-full p-6">
							<div className="flex items-center justify-between">
								<Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
									<img src="/assets/logo.png" alt="Krishian Logo" className="h-12 w-auto"/>
								</Link>
								<button aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className="text-krishian-white">
									<svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							<nav className="mt-10 space-y-3 text-krishian-white text-lg">
								<a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-2xl hover:bg-krishian-white/10 transition-all duration-300">Home</a>
								<Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-2xl hover:bg-krishian-white/10 transition-all duration-300">About</Link>
								<Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-2xl hover:bg-krishian-white/10 transition-all duration-300">Services</Link>
								<Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-2xl hover:bg-krishian-white/10 transition-all duration-300">Blog</Link>
								<Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-2xl hover:bg-krishian-white/10 transition-all duration-300">Contact</Link>
								<div className="flex gap-4 pt-6">
									<a href="tel:+8801234567890" className="flex-1 text-center px-4 py-3 rounded-2xl border border-krishian-white/40 text-krishian-white hover:bg-krishian-white/10 transition-all duration-300">Call Us</a>
									<a href="mailto:hello@krishian.com" className="flex-1 text-center px-4 py-3 rounded-2xl bg-krishian-blue text-krishian-white hover:bg-krishian-blue-dark transition-all duration-300 shadow-lg">Send Mail</a>
								</div>
							</nav>
							<div className="mt-auto text-xs text-krishian-white/70">© {new Date().getFullYear()} Krishian</div>
						</div>
					</div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;
