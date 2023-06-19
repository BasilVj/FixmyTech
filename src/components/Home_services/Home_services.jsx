import React from "react";
import "./Home_services.css";
import constants from "../../constants";

function Home_services() {
  return (
    <div className="our__services-container">
      <div className="services__headtext">
        <h2> Our Services </h2>
      </div>
      <div className="our__services-wrapper">
        <div className="our__services-img">
          <img src={constants.windows11} alt="" />
          <div className="service__name">
            <p>Install Windows OS</p>
          </div>
        </div>
        <div className="our__services-img">
          <img src={constants.keyboard} alt="" />
          <div className="service__name">
            <p>Install Windows OS</p>
          </div>
        </div>
        <div className="our__services-img">
          <img src={constants.pc_build} alt="" />
          <div className="service__name">
            <p>Install Windows OS</p>
          </div>
        </div>
        <div className="our__services-img">
          <img src={constants.port} alt="" />
          <div className="service__name">
            <p>Install Windows OS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_services;
