import React from "react";

const Awards = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="media/largestBroker.svg" alt="Largest Broker" className="img-fluid" style={{maxWidth: '100%', height: 'auto'}} />
          </div>
          <div className="col-6">
            <div className="content-wrapper">
              <h1>Largest stock broker in India</h1>
              <p>
                2+ million Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
              </p>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                        <p>Futures and Options</p>
                    </li>
                    <li className="mb-2">
                      <p>Commodity derivatives</p>
                    </li>
                    <li className="mb-2">
                      <p>Currency derivatives</p>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                    <ul className="list-unstyled">
                    <li className="mb-2">
                      <p>Stocks & IPOs</p>
                    </li>
                    <li className="mb-2">
                      <p>Direct mutual funds</p>
                    </li>
                    <li className="mb-2">
                      <p>Bonds and Govt. Securities</p>
                    </li>
                  </ul>
                </div>
              </div>
              <img src="media/pressLogos.png" alt="Press Logos" className="img-fluid mt-4" style={{ width: "95%" }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
