import React from "react";

import "../../Components/styles/Home/Banner.css";
const Banner = () => {
  return (
    <section className="HBanner w-full bg-blend-darken   flex flex-col items-center justify-center">
      <h1>
        Welcome to Bank Account Open in Dubai Your trusted banking partner
      </h1>
      <p>
        With us, opening a bank account in Dubai is simple. We’re with you every
        step, ensuring you get the support you need for a hassle-free banking
        setup.
      </p>
      <button className="Button">Get Start Now</button>
    </section>
  );
};

export default Banner;
