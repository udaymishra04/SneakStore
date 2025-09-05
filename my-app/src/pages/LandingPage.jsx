import React from "react";
import "./../styles/LandingPage.css";
import Sneaker from '../assets/Images/Sneaker.png';

function LandingPage() {
  return (
    <>

    <div className="hero">
      <div class="hero-content">
            <div class="hero-text">
                <h1>Step Into Your <span class="highlight">Style</span></h1>
                <p>Discover the latest drops, exclusive releases, and timeless classics. Your perfect pair is waiting at SneakHub - where every step tells a story.</p>
                
                <div class="hero-buttons">
                    <a href="#categories" class="btn-primary">Shop Now</a>
                    <a href="#brands" class="btn-secondary">Explore Brands</a>
                </div>

                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">500+</span>
                        <span class="stat-label">Premium Sneakers</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Top Brands</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">10K+</span>
                        <span class="stat-label">Happy Customers</span>
                    </div>
                </div>
            </div>
            <div class="hero-visual">
                <div class="sneaker-showcase">
                    <div class="sneaker-card">
                      <img src={Sneaker} alt="Sneaker" />
                    </div>
                    {/* <div class="sneaker-card">🔥</div>
                    <div class="sneaker-card">⚡</div> */}
                </div>
            </div>
    </div>
    </div>
    </>
  )}
export default LandingPage;