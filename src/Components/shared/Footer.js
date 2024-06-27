"use client";
import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const iconItems = [
    {
      icon: faEnvelope,
      url: "mailto:someone@example.com",
      text: "sales@cofocsp.com",
      name: "Email",
    },
    {
      icon: faPhone,
      url: "tel:+1234567890",
      text: "+97145777890",
      name: "Call",
    },
    {
      icon: faMapMarkerAlt,
      url: "https://www.google.com/maps",
      text: " Floor 29, Office# 32 - Al Saqr Business Tower, Sheikh Zayed Road, Dubai, United Arab Emirates",
      name: "Location",
    },
    // Add more icons and text as needed
  ];
  const socialMediaLinks = [
    { icon: faFacebook, url: "https://www.facebook.com", name: "Facebook" },
    { icon: faTwitter, url: "https://www.twitter.com", name: "Twitter" },
    { icon: faInstagram, url: "https://www.instagram.com", name: "Instagram" },
    { icon: faLinkedin, url: "https://www.linkedin.com", name: "LinkedIn" },
    { icon: faYoutube, url: "https://www.youtube.com", name: "YouTube" },
  ];
  return (
    <footer className="Footer">
      <section className="Top">
        <div className="subscribe-section bg-blend-darken">
          <p className="subscribe-heading">Get To Know More!</p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="sample@mail.com"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <section className="Bottom">
        <section className="First">
          <img src="" />
          <p>
            Maids table how learn drift but purse stand yet set. Music me house
            could among oh as their.
          </p>
        </section>
        <section className="Second">
          <p>Contact Info</p>
          <div className="icon-list">
            {iconItems.map((item, index) => (
              <div className="icon-item" key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{
                      color: "#ffffff",
                    }}
                    className="icon"
                  />
                  <span>{item.text}</span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="Third">
          <p>Quick Links</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Corporate Bank Account</li>
            <li>Personal Bank Account</li>
          </ul>
        </section>
        <section className="Fourth">
          <p>Follow Us</p>
          <ul className="social-media-list">
            {socialMediaLinks.map((link, index) => (
              <li key={index} className="social-media-item">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="social-media-icon"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Created by Company Formation
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
