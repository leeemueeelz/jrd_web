
import React from "react";
import roadmap from "../resources/images/roadmap.jpg";

const Roadmap = () => (
  <section className="section text-center bg-dark bg-opacity-75">
    <h2>📈 Bot Unlock Roadmap</h2>
    <img
      src={roadmap}
      alt="Bot Unlock Roadmap"
      className="img-fluid rounded mt-2"
      style={{ maxWidth: "60%", height: "auto" }}
    />
  </section>
);

export default Roadmap;
