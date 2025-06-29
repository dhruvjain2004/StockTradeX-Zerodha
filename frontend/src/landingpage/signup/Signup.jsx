import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pan: '',
    aadhaar: '',
    password: '',
    confirmPassword: ''
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Account created successfully! Welcome to Zerodha!');
    }, 2000);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-wrapper animate-fade-in-up">
              <div className="signup-header">
                <h1>Join India's Largest Stock Broker</h1>
                <p>Open your trading account in minutes and start your investment journey</p>
              </div>

              <div className="signup-container">
                <div className="signup-form-container">
                  <div className="progress-bar-container">
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        style={{width: `${(step / 3) * 100}%`}}
                      ></div>
                    </div>
                    <div className="step-indicators">
                      <span className={`step ${step >= 1 ? 'active' : ''}`}>1. Personal Info</span>
                      <span className={`step ${step >= 2 ? 'active' : ''}`}>2. Documents</span>
                      <span className={`step ${step >= 3 ? 'active' : ''}`}>3. Verification</span>
                    </div>
      </div>

                  <form onSubmit={handleSubmit} className="signup-form">
                    {step === 1 && (
                      <div className="form-step animate-fade-in-up">
                        <h3>Personal Information</h3>
                        <div className="form-row">
                          <div className="form-group">
                            <label>First Name *</label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="form-control"
                              required
          />
        </div>
                          <div className="form-group">
                            <label>Last Name *</label>
              <input
                type="text"
                              name="lastName"
                              value={formData.lastName}
                onChange={handleChange}
                              className="form-control"
                required
              />
            </div>
                        </div>
                        <div className="form-group">
                          <label>Email Address *</label>
              <input
                type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                onChange={handleChange}
                            className="form-control"
                required
              />
            </div>
                        <button type="button" onClick={nextStep} className="btn btn-primary">
                          Next Step
                        </button>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="form-step animate-fade-in-up">
                        <h3>Document Verification</h3>
                        <div className="form-group">
                          <label>PAN Number *</label>
                          <input
                            type="text"
                            name="pan"
                            value={formData.pan}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="ABCDE1234F"
                            required
                          />
                          <small>Enter your 10-digit PAN number</small>
                        </div>
                        <div className="form-group">
                          <label>Aadhaar Number *</label>
                          <input
                            type="text"
                            name="aadhaar"
                            value={formData.aadhaar}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="1234 5678 9012"
                            required
                          />
                          <small>Enter your 12-digit Aadhaar number</small>
                        </div>
                        <div className="form-actions">
                          <button type="button" onClick={prevStep} className="btn btn-secondary">
                            Previous
                          </button>
                          <button type="button" onClick={nextStep} className="btn btn-primary">
                            Next Step
                          </button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="form-step animate-fade-in-up">
                        <h3>Account Security</h3>
                        <div className="form-group">
                          <label>Password *</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                          <small>Minimum 8 characters with uppercase, lowercase, and number</small>
                        </div>
                        <div className="form-group">
                          <label>Confirm Password *</label>
              <input
                type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                onChange={handleChange}
                            className="form-control"
                required
              />
            </div>
                        <div className="form-actions">
                          <button type="button" onClick={prevStep} className="btn btn-secondary">
                            Previous
                          </button>
                          <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? (
                              <>
                                <span className="loading"></span>
                                Creating Account...
                              </>
                            ) : (
                              'Create Account'
                            )}
            </button>
                        </div>
                      </div>
                    )}
          </form>
                </div>

                <div className="signup-benefits">
                  <h3>Why Choose Zerodha?</h3>
                  <div className="benefits-list">
                    <div className="benefit-item">
                      <div className="benefit-icon">🚀</div>
                      <div className="benefit-content">
                        <h4>Lightning Fast Trading</h4>
                        <p>Execute trades in milliseconds with our high-frequency infrastructure</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">💰</div>
                      <div className="benefit-content">
                        <h4>Lowest Brokerage</h4>
                        <p>Pay only ₹20 or 0.05% per trade, whichever is lower</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">🛡️</div>
                      <div className="benefit-content">
                        <h4>Bank-Grade Security</h4>
                        <p>Your data and funds are protected with enterprise-level security</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">📱</div>
                      <div className="benefit-content">
                        <h4>Multi-Platform Access</h4>
                        <p>Trade seamlessly across web, mobile, and desktop platforms</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">🎓</div>
                      <div className="benefit-content">
                        <h4>Free Education</h4>
                        <p>Learn trading with our comprehensive educational resources</p>
                      </div>
                    </div>
                  </div>

                  <div className="signup-stats">
                    <div className="stat-item">
                      <div className="stat-number">10M+</div>
                      <div className="stat-label">Active Users</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">₹2.5L Cr+</div>
                      <div className="stat-label">Daily Volume</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">99.9%</div>
                      <div className="stat-label">Uptime</div>
                    </div>
                  </div>

                  <div className="signup-cta">
                    <p>Already have an account?</p>
                    <Link to="/login" className="btn btn-secondary">Sign In</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;