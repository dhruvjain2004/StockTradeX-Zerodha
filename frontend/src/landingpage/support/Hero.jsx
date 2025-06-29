import React from 'react';

function Hero() {
  return (
    <div className="support-hero">
      <div className="container">
        <div className="row align-items-center" style={{ marginBottom: '40px' }}>
          <div className="col-md-6">
            <h4>Support Portal</h4>
          </div>
          <div className="col-md-6 text-end">
            <a href="#" className="text-decoration-underline">Track Tickets</a>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="row">
          
          {/* Left Column */}
          <div className="col-md-8 mb-4">
            <h1>
              Search for an answer or browse help topics<br/>to create a ticket
            </h1>

            <div className="support-search">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              />
            </div>

            <div className="support-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            <div className="support-featured">
              <h1>Featured</h1>
              <ol>
                <li>
                  <a href="#">
                    Current Takeovers and Delisting – May 2025
                  </a>
                </li>
                <li>
                  <a href="#">
                    Latest Intraday leverages – MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
