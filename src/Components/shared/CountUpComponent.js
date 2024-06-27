// components/CountUpComponent.js
"use client";
import React from "react";
import CountUp from "react-countup";

const CountUpComponent = ({ start, end, duration, suffix }) => {
  return (
    <CountUp suffix={suffix} start={start} end={end} duration={duration}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};

export default CountUpComponent;
