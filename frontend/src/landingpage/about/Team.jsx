import React from "react";

const Team = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="team-section">
          <h1>People</h1>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="team-member">
              <img
                src="media/nithinKamath.jpg"
                alt="Nithin Kamath"
              />
              <h4>Nithin Kamath</h4>
              <h6>Founder, CEO</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="content-wrapper">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader. Today,
                Zerodha has changed the landscape of the Indian broking industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>Playing basketball is his zen.</p>
              <p>
                Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
                <a href="">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
