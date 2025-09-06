import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true,}); // 'once' animates only once per element
  }, []);
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
