import React from 'react'
import Logo from '../images/logo.jpg'
import Phone from '../images/Phone.png'
import Mail from '../images/mail.png'
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import X from '../images/X.png'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='FootCont'>
                <h3>Contact</h3>
                <div  className='phone-email-logo'>
                    <img src={Phone} alt="Phone" />
                    <p>  +91 7876531158</p>
                </div>
                <div className='phone-email-logo'>
                    <img src={Mail} alt="Email" />
                    <p>  venturevine@gmail.com</p>
                </div>
            </div>
            <div className='foot-about-main'>
                <h3>About</h3>
                <div className='foot-about'>
                    <img src={Logo} alt="logo" height="40px" />
                    <p>We are a comprehensive platform designed to support founders at every step of their entrepreneurialadventure.</p>
                </div>
            </div>
            <div className='foot-follow'>
                <h3>Follow</h3>
                <br />
                <a href=""><img src={Linkedin} alt="linkedin" height='45px' /></a>
                <a href=""><img src={X} alt="X" height='45px'/></a>
                <a href=""><img src={Facebook} alt="Facebook" height='45px' /></a>
            </div>
        </div>
        <p>Copyright ©2024 VentureVine.com. All rights reserved</p>
    </div>
    
  )
}

export default Footer