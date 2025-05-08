import React from "react";
import logo from "../src/images/jrd_wb.png"; // ruta relativa al archivo

const Hero = () => (
  <section className="text-center section bg-dark bg-opacity-75">
    <h1 className="display-4 fw-bold">JRD – Turns Prompts Into Profit</h1>
    <img
      src={logo}
      alt="JRD Logo"
      className="mb-2 levitate"
      style={{ width: "150px", height: "auto" }}
    />
    <p className="lead mt-1">
      Create binge-worthy videos using AI. Feed it your ideas, get episodes. Simple.
    </p>
  </section>
);

export default Hero;
