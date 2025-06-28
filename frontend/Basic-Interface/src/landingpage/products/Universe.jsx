import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted">Algo and Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="text-small text-muted p-3">Option Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/zerodhaFundhouse.png" style={{ width: "70%" }} />
          <p className="text-small text-muted p-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-3">Bonus Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/dittoLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted p-3">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
