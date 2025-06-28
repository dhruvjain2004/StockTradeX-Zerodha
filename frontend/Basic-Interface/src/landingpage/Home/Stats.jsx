import React from "react";

const Stats = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="content-wrapper">
              <h1>Trust with confidence</h1>
              <h2>Customer-first always</h2>
              <p>
                That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
                worth of equity investments.
              </p>
              <h2>No spam or gimmicks</h2>
              <p>
                No gimmicks, spam, "gamification", or annoying push notifications.
                High quality apps that you use at your pace, the way you like.
              </p>
              <h2>The Zerodha universe</h2>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your needs.
              </p>
              <h2>Do better with money</h2>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with your
                money.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="content-wrapper">
              <img src="media/ecosystem.png" alt="Ecosystem" className="img-fluid mb-4" style={{ width: "90%" }} />
              <div className="text-center">
                <a href="" className="mx-5 text-decoration-none" style={{ color: '#007bff' }}>
                  Explore our products{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
                <a href="" className="text-decoration-none" style={{ color: '#007bff' }}>
                  Try Kite demo{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
