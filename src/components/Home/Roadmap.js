import React, { useState, useEffect } from "react";
import step1 from "../../resources/roadmap/step1.jpg";
import step2 from "../../resources/roadmap/step2.jpg";
import step3 from "../../resources/roadmap/step3.jpg";
import step4 from "../../resources/roadmap/step4.jpg";
import step5 from "../../resources/roadmap/step5.jpg";
import step6 from "../../resources/roadmap/step6.jpg";

const images = [step1, step2, step3, step4, step5, step6];
const descriptions = [
  "Phase 1: Launch of the bot's initial version for holders.",
  "Phase 2: Unlocks multilingual AI voice and export tools.",
  "Phase 3: Full story creation with connected scenes.",
  "Phase 4: Activates series mode for 10-minute episodes.",
  "Phase 5: Analyze & replicate video styles. JRD mobile app.",
  "Phase 6: Blockchain minting, tournaments & studio launch."
];

const Roadmap = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-4 text-center roadmap-section">
      <h2 className="text-warning display-5 fw-bold mb-4 levitate">ROADMAP</h2>
      <p className="text-light mb-4">Explore the raccoon's path to global domination, phase by phase.</p>

      <div className="position-relative d-flex justify-content-center align-items-center glow-yellow ">
        <img
          src={images[current]}
          alt={`step${current + 1}`}
          className="img-fluid rounded shadow roadmap-image animate__animated animate__fadeIn"
          style={{ maxWidth: "100%", height: "auto", transition: "0.5s" }}
        />
      </div>

      <div className="text-white mt-3">
        <em>{descriptions[current]}</em>
      </div>

      <div className="d-flex justify-content-center mt-3 gap-3 levitate">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`btn btn-sm ${i === current ? "btn-warning" : "btn-outline-warning"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
