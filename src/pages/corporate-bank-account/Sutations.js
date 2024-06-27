import React from "react";
import "../../Components/styles/CBA/Sutation.css";
import Card from "../../Components/shared/Card";
const Sutations = () => {
  const Row1Card1 = [
    {
      Svg: "/assets/Student-stress-rafiki.svg",
      Title: "You are not 100% sure...",
      Description:
        "...how to comply with all the specific requirements in the UAE for accounting, bookkeeping, taxes or financial reporting. You like to have a certified accounting expert take care of that for you, so you avoid facing financial penalties and legal problems.",
    },
  ];
  const Row1Card2 = [
    {
      Svg: "/assets/Processing-thoughts-rafiki.svg",
      Title: "You want to focus on growing your business...",
      Description:
        "...instead of dealing with accounting and bookkeeping tasks. You need someone who you can trust to do your accounting accurate and timely, so you are always in control of your finances and in compliance with local laws.",
    },
  ];
  const Row2Card1 = [
    {
      Svg: "/assets/Deadline-rafiki.svg",
      Title: "You feel a bit stressed...",
      Description:
        "...because you have to take care of many things at the same time and have to somehow manage all the finances and cash flows of your company. You have to take business decisions but are sometimes not 100% sure if it is financially feasible at the moment.",
    },
  ];
  const Row2Card2 = [
    {
      Svg: "/assets/oversight-rafiki.svg",
      Title: "You lack financial clarity and control...",
      Description:
        "... and don't know or understand all the relevant metrics, KPIs, and required reports. This makes it difficult for you to plan ahead. Should you hire someone or not? Can you spend more money on marketing or should you wait? Will the summer months be financially secured?",
    },
  ];
  return (
    <section className="SuationMain">
      <section className="TopText">
        <h3>SITUATIONS</h3>
        <p>Do you recognize one of the following situations?</p>
      </section>
      <section className="SuationCards">
        <section className="SuationLeft">
          {Row1Card1.map((data, id) => {
            return (
              <Card
                IMG={data.Svg}
                key={id}
                TITLE={data.Title}
                DESCRIPTION={data.Description}
              />
            );
          })}
        </section>
        <section className="SuationRight">
          {Row1Card2.map((data, id) => {
            return (
              <Card
                IMG={data.Svg}
                key={id}
                TITLE={data.Title}
                DESCRIPTION={data.Description}
              />
            );
          })}
        </section>
      </section>
      <section className="SuationCards">
        <section className="SuationLeft">
          {Row2Card1.map((data, id) => {
            return (
              <Card
                IMG={data.Svg}
                key={id}
                TITLE={data.Title}
                DESCRIPTION={data.Description}
              />
            );
          })}
        </section>
        <section className="SuationRight">
          {Row2Card2.map((data, id) => {
            return (
              <Card
                IMG={data.Svg}
                key={id}
                TITLE={data.Title}
                DESCRIPTION={data.Description}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Sutations;
