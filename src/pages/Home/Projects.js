import React from "react";
import "../../Components/styles/Home/Projects.css";
const Projects = () => {
  return (
    <section className="Projects__Main">
      <h5 className="Text">Our projects</h5>
      <h6 className="Text2">What we've been working on</h6>
      <section className="Projects">
        <section className="Project">
          <img src="/assets/COFO.png" alt="SVG" />
          <a href="https://www.cofocsp.com">
            {" "}
            <h1 className="hover-text">COFOCSP</h1>{" "}
          </a>
        </section>
        <section className="Project">
          <img href="" src="/assets/Company.png" alt="SVG" />
          <a href="https://www.companyformationindubai.com/">
            {" "}
            <h1 className="hover-text">Company Formation In Dubai</h1>{" "}
          </a>
        </section>
        <section className="Project">
          <img href="" src="/assets/PRO.png" alt="SVG" />
          <a href="https://proservicesindubai.com/">
            {" "}
            <h1 className="hover-text">PRO Services In Dubai</h1>{" "}
          </a>
        </section>
      </section>
    </section>
  );
};

export default Projects;
