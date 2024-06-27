// components/Timeline.js
"use client";
import React, { useRef, useEffect } from "react";
import "../styles/Home/Timeline.css";

const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollY = event.deltaY;
      if (containerRef.current) {
        containerRef.current.scrollBy(0, scrollY);
      }
    };

    if (lineRef.current) {
      lineRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (lineRef.current) {
        lineRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="main-container">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Work Timeline</h1>
      <section className="scroll-line" ref={lineRef}></section>
      <section className="left-container">
        <h5>Project Planning</h5>
        <p>
          Bringing unlocked me an striking ye perceive. Mr by wound hours oh
          happy. Me in resolution pianoforte continuing we. Most my no spot felt
          by no. He he in forfeited furniture sweetness he arranging me tedious
          behaved.
        </p>
      </section>
      <section className="right-container">
        <h5>Product Branding</h5>
        <p>
          Bringing unlocked me an striking ye perceive. Mr by wound hours oh
          happy. Me in resolution pianoforte continuing we. Most my no spot felt
          by no. He he in forfeited furniture sweetness he arranging me tedious
          behaved.
        </p>
      </section>
      <section className="clearfix"></section>
      <section className="left-container">
        <h5>UI/UX Design</h5>
        <p>
          Bringing unlocked me an striking ye perceive. Mr by wound hours oh
          happy. Me in resolution pianoforte continuing we. Most my no spot felt
          by no. He he in forfeited furniture sweetness he arranging me tedious
          behaved.
        </p>
      </section>
      <section className="right-container">
        <h5>Marketing & Management</h5>
        <p>
          Bringing unlocked me an striking ye perceive. Mr by wound hours oh
          happy. Me in resolution pianoforte continuing we. Most my no spot felt
          by no. He he in forfeited furniture sweetness he arranging me tedious
          behaved.
        </p>
      </section>
    </section>
  );
};

export default Timeline;
