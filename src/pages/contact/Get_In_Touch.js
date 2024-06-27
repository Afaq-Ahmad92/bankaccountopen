import React from "react";
import "../../Components/styles/Contact/Get_In_Touch.css";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Get_In_Touch = () => {
  const iconItems = [
    {
      icon: faEnvelope,
      title: "Phone Numbers",
      url: "mailto:someone@example.com",
      text: "sales@cofocsp.com",
      name: "Email",
    },
    {
      icon: faPhone,
      title: "Office Addresses",
      url: "tel:+1234567890",
      text: "+97145777890",
      name: "Call",
    },
    {
      icon: faMapMarkerAlt,
      title: "Office Emails",
      url: "https://www.google.com/maps",
      text: " Floor 29, Office# 32 - Al Saqr Business Tower, Sheikh Zayed Road, Dubai, United Arab Emirates",
      name: "Location",
    },
    // Add more icons and text as needed
  ];
  return (
    <section className="Get__touch">
      <section className="GTop">
        <h2>Get in touch with us!</h2>
        <p>
          Maids table how learn drift but purse stand yet set. Music me house
          could among oh as their.
        </p>
      </section>
      <section className="GBottom">
        {iconItems.map((item, index) => (
          <section className="Gfirst">
            <div className="Gicon-item" key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <FontAwesomeIcon icon={item.icon} className="Gicon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </a>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Get_In_Touch;
