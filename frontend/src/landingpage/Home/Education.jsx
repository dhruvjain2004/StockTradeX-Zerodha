import React from 'react'

const Education = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="content-wrapper">
              <img src="media/education.svg" alt="Education" className="img-fluid" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="col-6">
            <div className="content-wrapper">
              <h1>Free and open market education</h1>
              <p>
                Varsity, the largest online stock market education book in the world
                covering everything from the basics to advanced trading.
              </p>
              <a href="" className="text-decoration-none mb-4 d-inline-block" style={{ color: '#007bff' }}>
                Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <p>
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a href="" className="text-decoration-none d-inline-block" style={{ color: '#007bff' }}>
                TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education