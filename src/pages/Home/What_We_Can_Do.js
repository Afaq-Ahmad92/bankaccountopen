import React from "react";
import "../../Components/styles/Home/What_We_Can_Do.css";
const What_We_Can_Do = () => {
  return (
    <section className="What__We__can__Do__Section">
      <div className="What__RightSide">
        <h3>What we can do for you</h3>
        <h4>We Offer A Full Stack Of Digital Services</h4>
        <p>
          Her companions instrument set estimating remarkably solicitude
          motionless. Property men the why smallest graceful day insisted
          required. Inquiry justice country old placing sitting any ten age.
          Looking venture justice in evident in totally he do ability. Be is
          lose girl long of up give.
        </p>
        <ul className="custom-list">
          <li>
            Desirous men exercise overcame procured speaking her followed.
          </li>
          <li>Property men the why smallest graceful day insisted required.</li>
          <li>Situation admitting promotion at or to perceived be.</li>
        </ul>
        <button className="Button">Get Start Now</button>
      </div>
      <div className="What__LeftSide">
        <img src="/assets/What_We_Offer.jpg" alt="What we can do" />
      </div>
    </section>
  );
};

export default What_We_Can_Do;
