import React from "react";
import "../../Components/styles/Home/What_We_Can_Do.css"

const Skills = () => {
  const progressBarData = [
    { skill: "UI/UX", percentage: 95 },
    { skill: "Development", percentage: 75 },
    { skill: "Marketing", percentage: 56 },
    { skill: "Motion", percentage: 82 },
  ];

  return (
    <section className="What__We__can__Do__Section">
      <div className="What__LeftSide">
        <img src="/assets/Skills.jpg" alt="What we can do" />
      </div>
      <div className="What__RightSide">
        <h5>Skills</h5>
        <h4>Our Work Skills</h4>
        <p>
          Her companions instrument set estimating remarkably solicitude
          motionless. Property men the why smallest graceful day insisted
          required. Inquiry justice country old placing sitting any ten age.
          Looking venture justice in evident in totally he do ability. Be is
          lose girl long of up give.
        </p>
        <ul className="custom-list progress-bar-list">
          {progressBarData.map((item, index) => (
            <div className="progress-bar-item" key={index}>
              <div className="progress-bar-label">
                <span>{item.skill}</span>
                <span>{item.percentage} %</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
