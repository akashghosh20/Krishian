import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/services" element={<ServicesPage />} />
		</Routes>
	);
};

export default App;