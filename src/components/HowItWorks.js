import React from "react";

const steps = [
  "Buy $JRD tokens!",
  "Access the AI bot",
  "Submit a prompt, image, or video",
  "Bot generates 3 episodes/hour",
  "Upload to TikTok, YouTube, etc.",
  "Monetize your audience",
];

const HowItWorks = () => (
  <section id="how" className="section  bg-opacity-75 m-4 text-center">
    <h2 className="mb-5">How It Works</h2>
    <div className="container d-flex flex-wrap justify-content-center gap-3">
      {steps.map((step, index) => (
        <div
          key={index}
          className="step-box p-3 border border-warning text-warning rounded shadow-sm"
          style={{
            minWidth: "180px",
            maxWidth: "220px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            fontWeight: "500",
          }}
        >
          {step}
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
