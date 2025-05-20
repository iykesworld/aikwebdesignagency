import React from 'react'
import './Portfolio.css'
import menuIcon from '../../assets/menuIcon.png'

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <div className="portfolio-content-wrapper">
      <div className="portfolio-box">
        <div className="portfolio-box-one box-wrapper">
          <p className='portfolio-box-one-heading'>Listing <span className='portfolio-box-one-span'>Position</span></p>
          <div className='portfolio-box-one-content'>
            <h1>Real Estate Agents</h1>
            <span>A modern website that 
              showcase properties and 
              attracts higher end buyers</span>
          </div>
        </div>
        <p className="portfolio-title">Real Estate Agency</p>
      </div>
      <div className="portfolio-box">
      <div className="portfolio-box-two box-wrapper">
        <h1>Fashion and 
        Lifestyle Brand</h1>
        <p>Slick online store that converts</p>
        <span className="get-btn">Get Started</span>
      </div>
      <p className="portfolio-title">E-Commerce Website</p>
      </div>
      <div className="portfolio-box">
      <div className="portfolio-box-three box-wrapper">
        <div className="portfolio-box-three-nav">
          <p>Personal Brand</p>
          <img src={menuIcon} alt="menu icon" />
        </div>
        <h1>Innovate, Grow, 
        Succeed</h1>
      </div>
      <p className="portfolio-title">Startup Firm</p>
      </div>
      </div>
    </section>
  )
}

export default Portfolio