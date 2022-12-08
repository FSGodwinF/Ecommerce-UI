import React from 'react'
import './contact.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-wrapper">
            <span className="contact-span">GET IN TOUCH WITH US</span>
            <div className="contact-mail">
                <input className="contact-input" type="text" placeholder="Enter your email"/>
                <button className="contact-button">JOIN US</button>
            </div>
            <div className="contact-socials">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact