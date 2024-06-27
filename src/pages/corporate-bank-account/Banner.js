import React from "react";
import "../../Components/styles/CBA/CBABanner.css";
const Banner = () => {
  return (
    <section className="CBABanner bg-blend-darken ">
      <section className="CBALeft">

        <h1>
          As Certified UAE Accountants we take care of your Bookkeeping and
          Accounting
        </h1>
        <p>We work autonomous and accurate so that:</p>
        <ul className="custom-list">
          <li>
            You can focus on growing your business and are in control of your
            finances.
          </li>
          <li>
            You can rely on accurate, financial information to make strategic
            decisions.
          </li>
          <li>
            You are always compliant with local UAE laws, to not face penalties.
          </li>
        </ul>
        <button className="CBAButton">Get Start Now</button>
      </section>
      <section className="CBARight"></section>
    </section>
  );
};

export default Banner;
