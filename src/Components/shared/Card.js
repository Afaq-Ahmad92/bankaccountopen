import React from "react";
import "../styles/Home/Services.css";
const Card = ({ IMG, TITLE, DESCRIPTION }) => {
  return (
    <div className="Card">
      <img className="IMG" src={IMG} alt="SVG" />
      <h3>{TITLE}</h3>
      <p>{DESCRIPTION}</p>
    </div>
  );
};

export default Card;
