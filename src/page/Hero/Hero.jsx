import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero-image.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-left'>
            <h1>Design That Speaks. Solutions That Work.</h1>
            <p>We craft high converting websites that blend beauty with functionality.</p>
            <a href="#contact">Start a Project</a>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt="hero image" />
        </div>
    </section>
  )
}

export default Hero