
import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import JrdBirth from "./JrdBirth";
import Lore from '../Lore';

const index = () => {
  return (
    <div className="app-wrapper text-white">
      <Lore />
      <Hero />
      <JrdBirth />
      <CTA />
      <footer className="text-center py-4 bg-dark bg-opacity-75">
        <small>© 2025 JRD Memecoin. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default index;
