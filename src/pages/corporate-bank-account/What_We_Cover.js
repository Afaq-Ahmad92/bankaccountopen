import React from "react";
import "../../Components/styles/CBA/What_We_Cover.css";
import ServicesCard from "../../Components/shared/ServicesCard";
const What_We_Cover = () => {
  const ServicesArray = [
    {
      Svg: "/Assets/Bookeeping.svg",
      Title: "Bookkeeping",
      Description:
        "We record and update all your financial transactions accurately to save your time.",
    },
    {
      Svg: "/Assets/Payroll-Management.svg",
      Title: "Payroll Management",
      Description:
        "We manage your company’s monthly payroll, including generating reports, gratuity calculations and pay slips.",
    },
    {
      Svg: "/Assets/Audit-Support.svg",
      Title: "Auditing Support",
      Description:
        "We support you in completing the auditing process for your financial year and ensure your records are fully compliant.",
    },
    {
      Svg: "/Assets/Account-Reconciliation.svg",
      Title: "Account Reconciliation",
      Description:
        "We ensure that your general ledger is correct, up-to-date and balances so you never run into legal trouble.",
    },
    {
      Svg: "/Assets/Financial-Reporting.svg",
      Title: "Financial Reporting",
      Description:
        "We generate your financial reports to determine how your business is performing. Consisting of: Trial balance, Profit and loss statement, Balance sheet, Cash flow statement, general ledgers",
    },
  ];
  return (
    <section className="CoverMain">
      <section className="CoverTop">
        <h5>SERVICES</h5>
        <p>
          What we cover for you to grow your business and feel calm and relaxed:
        </p>
      </section>
      <section className="CoverBottom">
        {ServicesArray.map((data, id) => {
          return (
            <ServicesCard
              IMG={data.Svg}
              key={id}
              TITLE={data.Title}
              DESCRIPTION={data.Description}
            />
          );
        })}
      </section>
    </section>
  );
};

export default What_We_Cover;
