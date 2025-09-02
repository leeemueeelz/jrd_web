
import React from "react";
import CTA from "./CTA";
import JrdBirth from "./JrdBirth";
import Lore from './Lore';
import Roadmap from './Roadmap';

const index = () => {
  return (
    <div className="text-white">
      <Lore />
      <JrdBirth />
      <Roadmap/>
      <CTA />
    </div>
  );
};

export default index;
