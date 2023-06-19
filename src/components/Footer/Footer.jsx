import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoPinterest, IoLogoReddit } from 'react-icons/io';

function Footer() {
  return (
   <footer className="app__footer section__padding">
    <div className="footer__h2-container">
      <h2 className="footer__h2">FixMyTech</h2>
    </div>
    <div className="footer__links-container">
      <ul className="footer__links">

        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/legal">Legal</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </div>
    <div className="footer__social-container">
      <div className="footer__h3-container">
      <h3 className="footer__h3">Stay in touch</h3>
      </div>
      <div className="social-links__container">
      <ul className="social-links">

      <li><Link to="/"><IoLogoInstagram size={22} color="#C13584" /></Link></li>
      <li><Link to="/"><IoLogoFacebook size={22} color="#3B5998" /></Link></li>
      <li><Link to="/"><IoLogoTwitter size={22} color="#1DA1F2" /></Link></li>
      <li><Link to="/"><IoLogoPinterest size={22} color="#BD081C" /></Link></li>
      <li><Link to="/"><IoLogoReddit size={22} color="#FF4500" /></Link></li>

      </ul>    
      </div> 
      <div className="copyright">
        <p className="copyright__text">© FixMyTech. All Rights Reserved.</p>
      </div>
    </div>
   </footer>
  );
}

export default Footer;
