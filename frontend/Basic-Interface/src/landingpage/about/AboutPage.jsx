import React from 'react'
import Hero from './Hero'
import Team from './Team'


const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h1>About Zerodha</h1>
                <p>India's largest stock broker by retail equity volumes. We're on a mission to make trading accessible to everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Our Story</h2>
                <p>
                  Founded in 2010 by Nithin Kamath, Zerodha started with a simple mission: to break down all barriers that traders and investors face in India in terms of cost, support, and technology. What began as a small team in Bangalore has now grown into India's largest stock broker by retail equity volumes.
                </p>
                <p>
                  We believe that technology is the great equalizer and that everyone should have access to the same tools and opportunities. Our platform has been built from the ground up to be fast, reliable, and user-friendly, making trading accessible to millions of Indians.
                </p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <div className="highlight-number">2010</div>
                    <div className="highlight-text">Founded in Bangalore</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">2015</div>
                    <div className="highlight-text">Launched Kite Trading Platform</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">2018</div>
                    <div className="highlight-text">Reached 1 Million Users</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-number">2023</div>
                    <div className="highlight-text">10+ Million Active Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Our Mission & Values</h2>
                <div className="mission-values-grid">
                  <div className="mission-card">
                    <div className="mission-icon">🎯</div>
                    <h3>Mission</h3>
                    <p>To make trading accessible to everyone by breaking down barriers of cost, support, and technology.</p>
                  </div>
                  <div className="mission-card">
                    <div className="mission-icon">👁️</div>
                    <h3>Vision</h3>
                    <p>To be the most trusted and preferred financial services platform for every Indian.</p>
                  </div>
                  <div className="mission-card">
                    <div className="mission-icon">💎</div>
                    <h3>Values</h3>
                    <p>Transparency, Innovation, Customer First, and Continuous Learning drive everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Technology at Our Core</h2>
                <p>
                  We believe that technology is the great equalizer. Our platform has been built from the ground up to be fast, reliable, and user-friendly. We invest heavily in technology to ensure that our users get the best trading experience possible.
                </p>
                <div className="tech-features">
                  <div className="tech-feature">
                    <div className="tech-icon">⚡</div>
                    <h4>High-Frequency Trading</h4>
                    <p>Execute trades in milliseconds with our cutting-edge infrastructure</p>
                  </div>
                  <div className="tech-feature">
                    <div className="tech-icon">🔒</div>
                    <h4>Bank-Grade Security</h4>
                    <p>Your data and funds are protected with enterprise-level security measures</p>
                  </div>
                  <div className="tech-feature">
                    <div className="tech-icon">📱</div>
                    <h4>Multi-Platform</h4>
                    <p>Trade seamlessly across web, mobile, and desktop platforms</p>
                  </div>
                  <div className="tech-feature">
                    <div className="tech-icon">📊</div>
                    <h4>Advanced Analytics</h4>
                    <p>Get insights with real-time charts and technical analysis tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Our Impact</h2>
                <p>
                  Over the years, we've helped millions of Indians start their investment journey. Here's what we've achieved together:
                </p>
                <div className="impact-stats">
                  <div className="impact-stat">
                    <div className="impact-number">10M+</div>
                    <div className="impact-label">Active Users</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-number">₹2.5L Cr+</div>
                    <div className="impact-label">Daily Trading Volume</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-number">99.9%</div>
                    <div className="impact-label">Platform Uptime</div>
                  </div>
                  <div className="impact-stat">
                    <div className="impact-number">15+</div>
                    <div className="impact-label">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Awards & Recognition</h2>
                <p>
                  Our commitment to excellence has been recognized by industry leaders and customers alike.
                </p>
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
                  <div className="award-card">
                    <div className="award-icon">🌟</div>
                    <h3>Customer Choice Award</h3>
                    <p>Money Control Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Meet Our Leadership</h2>
                <p>
                  Our success is driven by a team of passionate individuals who are committed to making trading accessible to everyone.
                </p>
                <div className="team-grid">
                  <div className="team-member">
                    <img src="https://mangalorepeople.com/wp-content/uploads/2023/03/Nithin-Kamath-1-1.jpg" alt="Nithin Kamath" />
                    <h3>Nithin Kamath</h3>
                    <p>Founder & CEO</p>
                  </div>
                  <div className="team-member">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JbahxVle98ntK8qUF7UNrkIRlitEMoAkbA&s" alt="Nikhil Kamath" />
                    <h3>Nikhil Kamath</h3>
                    <p>Co-Founder & CTO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-wrapper">
                <h2>Looking Forward</h2>
                <p>
                  As we continue to grow, our commitment to making trading accessible to everyone remains unchanged. We're constantly innovating and improving our platform to provide the best possible experience for our users.
                </p>
                <div className="future-goals">
                  <div className="goal-item">
                    <div className="goal-icon">🌍</div>
                    <h4>Global Expansion</h4>
                    <p>Expanding our services to international markets</p>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🤖</div>
                    <h4>AI Integration</h4>
                    <p>Leveraging artificial intelligence for better trading insights</p>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">📚</div>
                    <h4>Education First</h4>
                    <p>Making financial education accessible to everyone</p>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🔗</div>
                    <h4>Blockchain Integration</h4>
                    <p>Exploring blockchain technology for enhanced security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-content">
                <h2>Join Us on This Journey</h2>
                <p>Be part of India's largest and most trusted trading community. Start your investment journey with Zerodha today!</p>
                <div className="cta-buttons">
                  <a href="/signup" className="btn btn-primary">Open Free Account</a>
                  <a href="/products" className="btn btn-secondary">Explore Products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage