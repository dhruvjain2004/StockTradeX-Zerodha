import React from "react";

const Pricing = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="content-wrapper">
              <h1>Unbeatable pricing</h1>
              <p>
                We pioneered the concept of discount broking and price transparency
                in India. Flat fees and no hidden charges.
              </p>
              <a href="" className="text-decoration-none" style={{ color: '#007bff' }}>
                See Pricing{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className="content-wrapper">
              <div className="row text-center">
                <div className="col-6">
                  <div className="card">
                    <h1>₹0</h1>
                    <p>
                      Free equity delivery and
                      <br />
                      direct mutual funds
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <h1>₹20</h1>
                    <p>Intraday and F&O</p>
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

export default Pricing;
