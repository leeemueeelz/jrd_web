
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./src/App.css";
import "./animations.css";


import Hero from "./components/Hero";
import Lore from "./components/Lore";
import HowItWorks from "./components/HowItWorks";
import Roadmap from "./components/Roadmap";
import CTA from "./components/CTA";

const App = () => {
  return (
    <div className="app-wrapper text-white">
      <Hero />
      <Lore />
      {/* <Roadmap />  */}
      <HowItWorks />
      <CTA />
      <footer className="text-center py-4 bg-dark bg-opacity-75">
        <small>© 2025 JRD Memecoin. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default App;
