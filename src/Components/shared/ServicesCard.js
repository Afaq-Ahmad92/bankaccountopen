import React from "react";
import "../styles/CBA/ServicesCard.css";
const ServicesCard = ({ IMG, TITLE, DESCRIPTION }) => {
  return (
    <div className="ServicesCard">
      <img className="IMG" src={IMG} alt="SVG" />
      <h3>{TITLE}</h3>
      <p>{DESCRIPTION}</p>
    </div>
  );
};

export default ServicesCard;
