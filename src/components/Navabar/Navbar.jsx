import React, { useState } from "react";
import images from "../../images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);

    // Toggle body scrolling
    if (!toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.fixmytech_logo} alt="" />
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              <i className="fa-solid fa-user-group"></i> About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>
              <i className="fa-solid fa-wrench"></i> Services
            </Link>
          </li>
          <li>
            <Link to="/file_an_issue" onClick={handleLinkClick}>
              <i className="fa-solid fa-paperclip"></i> File an Issue
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              <i className="fa-solid fa-headset"></i> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <Link to="/"> Log in / Sign Up</Link>
      </div>

      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <MdClose color="black" fontSize={31} onClick={handleMenuToggle} />
        ) : (
          <GiHamburgerMenu color="black" fontSize={27} onClick={handleMenuToggle} />
        )}

        {toggleMenu && (
          <div className="navbar__links-container__smallscreen app__navbar-smallscreen_overlay">
            <ul className="navbar__links-smallscreen" onClick={handleLinkClick}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/file_an_issue">File an Issue</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
