import React from "react";
import "./Service.css";

function Service({ image,name }) {
  return (
    <div className="service__container">
        <div className="service__name">
            <p>{name}</p>
        </div>
      <div className="service__img">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Service;
