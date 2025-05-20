import React from 'react'
import './Services.css'
import uxLogo from '../../assets/UXframe.png'
import brandingLogo from '../../assets/branding-logo.png'
import webLogo from '../../assets/webFrame.png'
import maintenanceLogo from '../../assets/maintenance-logo.png'
import projectLogo from '../../assets/project-plan.png'
import ratingLogo from '../../assets/rating (1).png'
import raiseLogo from '../../assets/raise.png'
import timelineLogo from '../../assets/timeline 1.png'

const ourServices = [
  {
    imgUrl: uxLogo,
    title: "UX Design",
    subtitle: "User centric interfaces with seamless experience"
  },
  {
    imgUrl: webLogo,
    title: "Web Development",
    subtitle: "High-performance websites built to scale."
  },
  {
    imgUrl: brandingLogo,
    title: "Branding & Identity",
    subtitle: "Unique and Visual systems that define and differentiate."
  },
  {
    imgUrl: maintenanceLogo,
    title: "Mentainance & Support",
    subtitle: "Reliable care to keep your site running smoothly."
  },
]

const ourProjects = [
  {
    imgUrl: projectLogo,
    title: "Completed Project",
    subtitle: "100 +"
  },
  {
    imgUrl: ratingLogo,
    title: "Customer Satisfaction",
    subtitle: "100%"
  },
  {
    imgUrl: raiseLogo,
    title: "Raised by Clent",
    subtitle: "$20M"
  },
  {
    imgUrl: timelineLogo,
    title: "Years in Business",
    subtitle: "2 Years"
  },
]

const Services = () => {
  return (
    <section className='service' id='services'>
      <h1>Services</h1>
      <div className="services-top-wrapper">
        {
          ourServices.map((item, index)=>(
            <div key={index} className='services-top-container'>
              <div className="services-top-image">
                <img src={item.imgUrl} alt={item.imgUrl} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          ))
        }
      </div>
      <div className="service-middle-wrapper">
        {
          ourProjects.map((item, index)=>(
            <div key={index} className='service-middle-container'>
              <div className='service-middle-image'>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </div>
              <h5>{item.title}</h5>
              <p>{item.subtitle}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services