import React from "react";
import "./Home.css";
import images from "../../images";
import Home_services from "../Home_services/Home_services";

function Home() {
  return (
    <div className="app__home section__padding">
      <div className="app__wrapper">
        <div className="app__wrapper_info">
          <h1 className="app__home-h1">FixMyTech</h1>
          <p className="p__opensans">
            FixMyTech is here to revolutionize the way you approach PC repairs!
            Say goodbye to costly repair services and hello to our expert-led
            instructions. Our website offers comprehensive guides for repairing
            your device, making it easier than ever to get your PC back in
            working order. No technical expertise required - just follow our
            step-by-step instructions and troubleshooting tips. At FixMyTech, we
            believe in empowering individuals with the knowledge they need to
            fix their own devices. Join us on this journey, and take control of
            your technology today!
          </p>
        </div>

        <div className="app__wrapper_img">
          <img src={images.home_img} alt="" />
        </div>
      </div>
      <Home_services />
    </div>
  );
}

export default Home;
