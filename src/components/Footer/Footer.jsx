import React from 'react'
import './Footer.css'
import emailIcon from '../../assets/email0ne-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import titktokIcon from '../../assets/tiktok-icon.svg'
import exIcon from '../../assets/x-icon.svg'
import logo from '../../assets/AIK.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <div className='footer-top'>
        <img className='footer-logo' src={logo} alt="logo" />
        <div className='footer-socials'>
            <a target='_blank' href="https://www.instagram.com/aikdesignlab"><img src={instagramIcon} alt="" /></a>
            <a href="mailto: aikdesignlab@gmail.com"><img src={emailIcon} alt="" /></a>
            <a href="#"><img src={titktokIcon} alt="" /></a>
            <a href="#"><img src={facebookIcon} alt="" /></a>
            <a href="#"><img src={exIcon} alt="" /></a>
        </div>
        </div>
        <hr />
        <p>©{year} AIK Design Lab - Design with purpose. Build with vision</p>
    </div>
  )
}

export default Footer