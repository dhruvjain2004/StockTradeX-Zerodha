import React from "react";

const Hero = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="pricing-hero">
          <h1>Pricing</h1>
          <h3>
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
        <div className="pricing-cards">
          <div className="row">
            <div className="col-4">
              <div className="pricing-card">
                <img src="media/pricingEquity.svg" alt="Equity" />
                <h1>Free equity delivery</h1>
                <p>
                  All equity delivery investments (NSE, BSE), are absolutely free — ₹
                  0 brokerage.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing-card">
                <img src="media/intradayTrades.svg" alt="Intraday" />
                <h1>Intraday and F&O trades</h1>
                <p>
                  Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                  intraday trades across equity, currency, and commodity trades.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing-card">
                <img src="media/pricingMF.svg" alt="Mutual Funds" />
                <h1>Free direct MF</h1>
                <p>
                  All direct mutual fund investments are absolutely free — ₹ 0
                  commissions & DP charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
