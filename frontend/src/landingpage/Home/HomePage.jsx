import React, { useEffect } from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from './OpenAccount';

import Navbar from '../Navbar';
import Footer from '../Footer';

const HomePage = () => {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section with enhanced styling */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper animate-fade-in-up">
                <h1>India's Largest Stock Broker</h1>
                <p>Trade with confidence on India's most trusted trading platform. Join millions of traders who choose Zerodha for their investment journey.</p>
                <div className="hero-buttons">
                  <a href="/signup" className="btn btn-primary animate-bounce">Open Free Account</a>
                  <a href="/products" className="btn btn-secondary">Explore Products</a>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number animate-pulse">10M+</div>
                    <div className="stat-label">Active Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number animate-pulse">₹2.5L Cr+</div>
                    <div className="stat-label">Daily Trading Volume</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number animate-pulse">99.9%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>Why Choose Zerodha?</h1>
                <p>Discover the features that make us India's preferred trading platform</p>
                
                <div className="features-grid">
                  <div className="feature-card animate-float">
                    <div className="feature-icon">🚀</div>
                    <h3>Lightning Fast</h3>
                    <p>Execute trades in milliseconds with our high-frequency trading infrastructure</p>
                  </div>
                  
                  <div className="feature-card animate-float" style={{animationDelay: '0.2s'}}>
                    <div className="feature-icon">💰</div>
                    <h3>Lowest Brokerage</h3>
                    <p>Pay only ₹20 or 0.05% per trade, whichever is lower</p>
                  </div>
                  
                  <div className="feature-card animate-float" style={{animationDelay: '0.4s'}}>
                    <div className="feature-icon">🛡️</div>
                    <h3>Bank-Grade Security</h3>
                    <p>Your data and funds are protected with enterprise-level security</p>
                  </div>
                  
                  <div className="feature-card animate-float" style={{animationDelay: '0.6s'}}>
                    <div className="feature-icon">📱</div>
                    <h3>Multi-Platform</h3>
                    <p>Trade seamlessly across web, mobile, and desktop platforms</p>
                  </div>
                  
                  <div className="feature-card animate-float" style={{animationDelay: '0.8s'}}>
                    <div className="feature-icon">📊</div>
                    <h3>Advanced Analytics</h3>
                    <p>Get insights with real-time charts and technical analysis tools</p>
                  </div>
                  
                  <div className="feature-card animate-float" style={{animationDelay: '1s'}}>
                    <div className="feature-icon">🎓</div>
                    <h3>Free Education</h3>
                    <p>Learn trading with our comprehensive educational resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>What Our Traders Say</h2>
                <div className="testimonials-grid">
                  <div className="testimonial-card">
                    <div className="testimonial-text">
                      "Zerodha has revolutionized my trading experience. The platform is incredibly fast and the brokerage is unbeatable!"
                    </div>
                    <div className="testimonial-author">- Rahul Sharma, Professional Trader</div>
                  </div>
                  
                  <div className="testimonial-card">
                    <div className="testimonial-text">
                      "The educational content on Varsity helped me understand trading better. Highly recommended for beginners!"
                    </div>
                    <div className="testimonial-author">- Priya Patel, Retail Investor</div>
                  </div>
                  
                  <div className="testimonial-card">
                    <div className="testimonial-text">
                      "Best trading platform I've ever used. The customer support is excellent and the features are top-notch."
                    </div>
                    <div className="testimonial-author">- Amit Kumar, Day Trader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>Recognition & Awards</h1>
                <p>Our commitment to excellence has been recognized by industry leaders</p>
                
                <div className="awards-grid">
                  <div className="award-card">
                    <div className="award-icon">🏆</div>
                    <h3>Best Trading Platform 2023</h3>
                    <p>NSE Excellence Awards</p>
                  </div>
                  
                  <div className="award-card">
                    <div className="award-icon">⭐</div>
                    <h3>Most Trusted Broker</h3>
                    <p>Economic Times Awards</p>
                  </div>
                  
                  <div className="award-card">
                    <div className="award-icon">🎯</div>
                    <h3>Innovation in Fintech</h3>
                    <p>Fintech India Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>Our Impact in Numbers</h1>
                <p>Join millions of traders who trust Zerodha with their investments</p>
                
                <div className="stats-counter">
                  <div className="stat-item">
                    <div className="stat-number">10M+</div>
                    <div className="stat-label">Active Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">₹2.5L Cr+</div>
                    <div className="stat-label">Daily Trading Volume</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">99.9%</div>
                    <div className="stat-label">Platform Uptime</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>Transparent Pricing</h1>
                <p>No hidden charges, no surprises. Know exactly what you pay</p>
                
                <div className="pricing-cards">
                  <div className="pricing-card">
                    <div className="pricing-header">
                      <h3>Equity Delivery</h3>
                      <div className="price">₹0</div>
                    </div>
                    <ul>
                      <li>Free equity delivery trades</li>
                      <li>No account maintenance charges</li>
                      <li>Free demat account</li>
                    </ul>
                  </div>
                  
                  <div className="pricing-card featured">
                    <div className="pricing-header">
                      <h3>Intraday & F&O</h3>
                      <div className="price">₹20</div>
                    </div>
                    <ul>
                      <li>₹20 or 0.05% per trade</li>
                      <li>Whichever is lower</li>
                      <li>No hidden charges</li>
                    </ul>
                  </div>
                  
                  <div className="pricing-card">
                    <div className="pricing-header">
                      <h3>Currency & Commodity</h3>
                      <div className="price">₹20</div>
                    </div>
                    <ul>
                      <li>₹20 or 0.05% per trade</li>
                      <li>Whichever is lower</li>
                      <li>Transparent pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>Learn Trading for Free</h1>
                <p>Master the art of trading with our comprehensive educational resources</p>
                
                <div className="education-grid">
                  <div className="education-card">
                    <div className="education-icon">📚</div>
                    <h3>Varsity</h3>
                    <p>Free trading courses for beginners and advanced traders</p>
                    <a href="https://zerodha.com/varsity" className="btn btn-primary">Start Learning</a>
                  </div>
                  
                  <div className="education-card">
                    <div className="education-icon">🎥</div>
                    <h3>Video Tutorials</h3>
                    <p>Step-by-step guides for platform features</p>
                    <a href="https://zerodha.com/support" className="btn btn-primary">Watch Videos</a>
                  </div>
                  
                  <div className="education-card">
                    <div className="education-icon">📊</div>
                    <h3>Market Analysis</h3>
                    <p>Daily market insights and analysis</p>
                    <a href="https://zerodha.com/marketintel" className="btn btn-primary">Read Analysis</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-content">
                <h2>Ready to Start Your Trading Journey?</h2>
                <p>Join millions of traders who trust Zerodha. Open your account in minutes and start trading today!</p>
                <div className="cta-buttons">
                  <a href="/signup" className="btn btn-primary animate-pulse">Open Free Account</a>
                  <a href="/support" className="btn btn-secondary">Get Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Account Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>Open Your Account Today</h1>
                <p>Start your trading journey with India's most trusted broker</p>
                
                <div className="account-steps">
                  <div className="step-card">
                    <div className="step-number">1</div>
                    <h3>Sign Up</h3>
                    <p>Complete your registration with basic details</p>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">2</div>
                    <h3>Upload Documents</h3>
                    <p>Submit PAN, Aadhaar, and bank details</p>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">3</div>
                    <h3>Start Trading</h3>
                    <p>Fund your account and begin trading</p>
                  </div>
                </div>
                
                <div className="account-cta">
                  <a href="/signup" className="btn btn-primary btn-lg">Open Account Now</a>
                  <p className="mt-3">Takes only 10 minutes to complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
