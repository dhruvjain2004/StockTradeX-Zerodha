import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <img src="media/homeHero.png" alt="Hero Image" className='mb-5 img-fluid' style={{maxWidth: '80%', height: 'auto', marginBottom: '2rem'}} />
                    <h1>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button className='btn btn-primary'>Signup Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero