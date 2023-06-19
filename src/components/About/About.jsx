import React from "react";
import images from "../../images";
import "./About.css";

function About() {
  return (
    <div className="about-us-wrapper section__padding">
      <div className="about-us-container1">
        <div className="about-us-content">
          <h1 className="about-us-headtext">About Us</h1>
        </div>
        <div className="about-us-intro-container">
        <div className="about__wrapper_img">
            <img src={images.about_us_image} alt="about us image" />
          </div>
          <div className="about-us-intro">
            <div className="intro__heading">
              <h2 className="intro__headtext">
                Your Expert Guide to Effortless PC Repair
              </h2>
            </div>
            <div className="intro__para-wrapper">
              <p className="intro__para">
                Looking to fix your computer? We've got you covered! At
                FixMyTech, we're all about empowering you to repair your
                computer with ease. Our team of experts will guide you every
                step of the way, making you your very own computer repair guru.
                We've simplified the process with easy-to-follow instructions
                that combine visuals and clear explanations. No more headaches
                or guesswork! Our affordable and accessible services cater to
                individuals and small businesses, providing prompt and reliable
                solutions to get your computer running smoothly again. So why
                wait? Take control of your computer repair journey today and
                join us at FixMyTech
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="about-us-container2">
        <div className="why-us-container">
          <div className="why-us-content-wrapper">
            <div className="whyUs-headtext">
              <h1 className="whyUs-heading">Why Us?</h1>
            </div>
            <div className="why-us-paragraph">
              <p className="why-us-para">
                At FixMyTech, we understand the importance of protecting your
                sensitive information. When it comes to choosing a repair
                service, trust is key. Unlike traditional offline centers, our
                platform gives you the power to fix your PC yourself. Say
                goodbye to worries about strangers accessing your personal data.
                With FixMyTech, you're in control, ensuring your privacy remains
                intact. Plus, we offer affordable solutions, saving you money
                without compromising on quality. Stay ahead of the tech curve
                with our tools and resources, designed to empower you. Join us
                and take charge of your PC's repair journey today. Together,
                let's keep your data safe and embrace the digital age.
              </p>
            </div>
          </div>
          <div className="why-us__wrapper_img">
            <img src={images.why_us} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
