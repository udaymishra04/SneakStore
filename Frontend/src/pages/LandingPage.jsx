import React from "react";
import 'aos/dist/aos.css';
import "../styles/LandingPage.css";
import Sneaker from '../assets/Images/Air_Jordan.png';
import ProductCard from "../components/ProductCard";
import SneakerBrands from "../components/SneakerBrands";

function LandingPage() {
  return (
    <>
      <div data-aos="fade-in" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Step Into Your <span className="highlight">Style</span></h1>
            <p>Discover the latest drops, exclusive releases, and timeless classics. Your perfect pair is waiting at SneakHub - where every step tells a story.</p>
            <div className="hero-buttons">
              <a href="#categories" className="btn-primary">Shop Now</a>
              <a href="#brands" className="btn-secondary">Explore Brands</a>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Premium Sneakers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Top Brands</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="sneaker-showcase">
              <div className="sneaker-card">
                <img src={Sneaker} alt="Sneaker" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="landing-page-products">
        <SneakerBrands />
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid-container">
          {/* Product Cards */}
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
          <ProductCard image={Sneaker} name="Air Jordan 1" price="150" rating="4" />
        </div>
      </div>
    </>
  );
}
export default LandingPage;