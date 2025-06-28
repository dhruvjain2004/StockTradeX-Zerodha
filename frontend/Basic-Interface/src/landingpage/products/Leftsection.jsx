import React from "react";

const Leftsection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="product-content">
              <img src={imageURL} alt={productName} />
            </div>
          </div>
          <div className="col-6">
            <div className="product-content">
              <h2>{productName}</h2>
              <p>{productDesription}</p>
              <div className="product-links">
                {tryDemo && <a href={tryDemo}>Try Demo</a>}
                {learnMore && <a href={learnMore}>Learn More</a>}
              </div>
              <div className="product-links">
                {googlePlay && (
                  <a href={googlePlay}>
                    <img src="media/googlePlayBadge.svg" alt="Google Play" />
                  </a>
                )}
                {appStore && (
                  <a href={appStore}>
                    <img src="media/appstoreBadge.svg" alt="App Store" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftsection;
