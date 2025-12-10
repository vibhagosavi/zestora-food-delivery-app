import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'




function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt=''/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nemo est beatae et aperiam at in distinctio, fuga eius, placeat animi omnis hic, sint quia esse! Quidem debitis magnam quia?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7809</li>
            <li>contact@zestora.com</li>
          </ul>
        </div>
      </div>
    <hr/>
    <div className="footer-copyright">
      Copyright 2025 © Zestora.com - All Rights Reserved.
    </div>
    </div>
  )
}

export default Footer