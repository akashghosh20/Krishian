import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [pathname]);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<button
			aria-label="Scroll to top"
			onClick={scrollUp}
			className={`fixed bottom-6 left-6 z-50 rounded-full bg-krishian-green text-white w-12 h-12 shadow-lg transition-all duration-300 hover:bg-krishian-dark ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
				<path fillRule="evenodd" d="M11.47 3.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12.75 5.81v14.44a.75.75 0 0 1-1.5 0V5.81l-6.22 6.47a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
			</svg>
		</button>
	);
};

export default ScrollToTop;
