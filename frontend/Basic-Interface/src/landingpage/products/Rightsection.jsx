import React from 'react'

const Rightsection = ({imageURL, productName, productDesription, learnMore}) => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="product-content">
              <h2>{productName}</h2>
              <p>{productDesription}</p>
              <div className="product-links">
                {learnMore && <a href={learnMore}>Learn More</a>}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product-content">
              <img src={imageURL} alt={productName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightsection