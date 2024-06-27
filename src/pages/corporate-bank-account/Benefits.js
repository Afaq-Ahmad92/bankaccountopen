import React from "react";
import "../../Components/styles/CBA/Benefits.css";
const Benefits = () => {
  const BenefitsArray = [
    {
      Title:
        "Calm and secure feeling about the financial health of your business and about audits by local regulators",
      Description:
        "We work fast, reliable, and transparent so you don't have to worry about deadlines and are always in compliance with local laws. We provide you with financial reports that you understand.",
    },
    {
      Title: "Focus on running and growing your business",
      Description:
        "We handle your bookkeeping and accounting autonomously. We just need your confirmation for finished tasks from time to time. This frees up your time so you can focus on scaling your business.",
    },
    {
      Title:
        "Accurate and reliable data to strengthen and backup your decision making",
      Description:
        "Only if you know all your financials and can be certain that they are accurate you can take relevant decisions and plan ahead to grow. Feel in control and understand everything that is going on financially in your business. This will get rid of your stress and anxiety.",
    },
  ];
  return (
    <section className="BenefitsMain">
      <section className="BenefitsTop">
        <h4>BENEFITS</h4>
        <p>
          So let us handle your accounting and bookkeeping instead and enjoy the
          following...
        </p>
      </section>
      <section className="BenefitsMid">
        <section className="BenefitsMidLeft">
          {BenefitsArray.map((data, id) => {
            return (
              <section key={id} className="BenefitsList">
                <h6>{data.Title}</h6>
                <p>{data.Description}</p>
              </section>
            );
          })}
        </section>
        <section className="BenefitsMidRight">
          <img src="/assets/Benefits.webp" alt="" />
        </section>
      </section>
      <section className="BenefitsEnd">
        <button className="BenefitsButton">Get Start Now</button>
      </section>
    </section>
  );
};

export default Benefits;
