// src/components/Roadmap.js
import React from "react";
import { Card } from "react-bootstrap";
//import "./Roadmap.css"; // Podés personalizar estilos si querés
import roadmap from "../images/roadmap.jpg";

const Roadmap = () => {
  return (
<div className="container my-5 m-5" style={{ maxWidth: "1200px" }}>
  <Card className="bg-dark bg-opacity-75 text-white border-warning shadow-lg">
    <Card.Header className="text-center bg-transparent border-0">
      <h2 className="fw-bold text-warning">📈 Bot Unlock Roadmap</h2>
    </Card.Header>
    <Card.Body className="text-center">
      <img
        src={roadmap}
        alt="Roadmap JRD"
        className="rounded"
        style={{ width: "1000px", maxWidth: "100%", height: "auto" }}
      />
    </Card.Body>
  </Card>
</div>

  );
};

export default Roadmap;
