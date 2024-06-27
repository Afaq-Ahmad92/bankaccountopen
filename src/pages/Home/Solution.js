import React from "react";
import "../../Components/styles/Home/Solution.css";
import CountUpComponent from "../../Components/shared/CountUpComponent";
const Solution = () => (
  <>
    <section className="Solution bg-blend-darken">
      <h5>Get a solutions to your businesses</h5>
      <p>
        Demesne far hearted suppose venture excited see had has. Dependent on so
        extremely delivered by. Yet no jokes worse her why. Bed one supposing
        breakfast day fulfilled off depending questions. Whatever boy her
        exertion his extended. Ecstatic followed handsome drawings entirely mrs
        one yet outweigh.
      </p>
      <br />
      <p>
        Demesne far hearted suppose venture excited see had has. Dependent on so
        extremely delivered by. Yet no jokes worse her why. Bed one supposing
        breakfast day fulfilled off depending questions. Whatever boy her
        exertion his extended. Ecstatic followed handsome drawings entirely mrs
        one yet outweigh.
      </p>
    </section>
    <section className="Counters bg-white flex flex-row items-center justify-center">
      <div className="text-center Counter">
        <div className="text-5xl font-bold">
          <CountUpComponent suffix="+" start={0} end={160} duration={5} />
        </div>
        <p className="text-xl mt-2">Satisfied Clients</p>
      </div>
      <div className="text-cente Counter">
        <div className="text-5xl font-bold">
          <CountUpComponent suffix="%" start={0} end={100} duration={5} />
        </div>
        <p className="text-xl mt-2">Work Quality</p>
      </div>
      <div className="text-center Counter">
        <div className="text-5xl font-bold">
          <CountUpComponent suffix="K" start={0} end={2} duration={5} />
        </div>
        <p className="text-xl mt-2">Complete Project</p>
      </div>
      <div className="text-center Counter">
        <div className="text-5xl font-bold">
          <CountUpComponent suffix="" start={0} end={45} duration={5} />
        </div>
        <p className="text-xl mt-2">Award Wining</p>
      </div>
    </section>
  </>
);

export default Solution;
