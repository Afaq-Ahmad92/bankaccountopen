import React from "react";
import "../../Components/styles/Home/Services.css";
import { Array1, Array2 } from "../../Components/shared/Card_Array";
import Card from "../../Components/shared/Card";
const Services = () => {
  return (
    <section className="HServices">
      <div className="RightSide">
        <h2>Services provide for you</h2>
        <p>
          Demesne far hearted suppose venture excited see had has. Dependent on
          so extremely delivered by. Yet no jokes worse her why. Bed one
          supposing breakfast day fulfilled off depending questions. Whatever
          boy her exertion his extended. Ecstatic followed handsome drawings
          entirely mrs one yet outweigh. Of acceptance insipidity remarkably is
          invitation.
        </p>
        <button className="Button">Get Start Now</button>
      </div>
      <div className="LeftSide">
        <div className="Array1Mapping">
          {Array1.map((data, id) => {
            return (
              <Card
                IMG={data.Svg}
                key={id}
                TITLE={data.Title}
                DESCRIPTION={data.Description}
              />
            );
          })}
        </div>
        <div className="Array2Mapping">
          {Array2.map((data, id) => {
            return (
              <Card
                IMG={data.Svg}
                key={id}
                TITLE={data.Title}
                DESCRIPTION={data.Description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
