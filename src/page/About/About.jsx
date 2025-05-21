import React from 'react'
import './About.css'
import beninningImage from '../../assets/beginning-image.png'
import missionImage from '../../assets/mission-image.png'
import valueImage from '../../assets/value-image.png'
import fastImage from '../../assets/fastDelivery-logo.png'
import customImage from '../../assets/custome-logo.png'
import seoImage from '../../assets/seo-logo.png'

const aboutFooter = [
  {
    imgUrl: fastImage,
    ttitle: "Fast Delivery"
  },
  {
    imgUrl: customImage,
    ttitle: "Custom Design"
  },
  {
    imgUrl: seoImage,
    ttitle: "SEO Friendly"
  },
]

const About = () => {
  return (
    <section className='about' id='about'>
      <span className='about-span'>ABOUT</span>
      <div className='about-top'>
        <h1>More Than Just Design . We Build Digital Identity.</h1>
        <h5>We’re a creative agency that transforms ideas into functional, beautiful, and scalable digital experiences.</h5>
        <span>Everyone has a story. Here is ours</span>
      </div>
      <div className="about-container timeline-container">
        <div className="about-beginning" data-aos="zoom-in">
            <img className="about-beginnging-image" src={beninningImage} alt="beginning image" />
          <div className="about-beginnging-right">
            <h4>The Beginning</h4>
            <p>Aik Creative was born from a shared frustration, too many brands had strong messages 
              but poor digital presence. We wanted to fix that. Since launching, we’ve helped startups, 
              small businesses and growing brands turn their ideas into meaningful user experiences. 
              From day one, our focus has been strategy first design, because the best visuals are 
              backed by insight and clarity.</p>
          </div>
        </div>
        <div className="about-mission" data-aos="zoom-in">
        <div className="about-mission-left">
            <h4>Mission</h4>
            <p>At AIK Design Lab, We are on a mission to help brands communicate powerfully through 
              digital design and thoughtful user experiences.</p>
          </div>
            <img className="about-mission-image" src={missionImage} alt="beginning image" />
        </div>
        <div className="about-value" data-aos="zoom-in">
            <img className="about-mission-image" src={valueImage} alt="beginning image" />
        <div className="about-value-left">
            <h4>Value</h4>
            <ul>
              <li>Clarity: No fluff. Just purpose-driven design.</li>
              <li>Creativity: Ideas that stand out and stay relevant.</li>
              <li>Growth: Every project is a chance to evolve.</li>
              <li>Partnership: We collaborate closely with our clients at every step.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <h1>Why Choose Us</h1>
        <div className="about-footer-right">
          {
            aboutFooter.map((item,index)=>(
              <div className='about-footer-right-wrapper' key={index}>
                  <img className="about-footerimage" src={item.imgUrl} alt="" />
                <p>{item.ttitle}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About