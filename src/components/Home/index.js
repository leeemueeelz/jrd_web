
import React from "react";
import CTA from "./CTA";
import JrdBirth from "./JrdBirth";
import Lore from './Lore';
import Roadmap from './Roadmap';
import Countdown from './Countdown';

const index = () => {
  return (
    <div className="text-white">
      <Lore />
      <JrdBirth />
      <Roadmap/>
      <CTA />
      <Countdown/>
    </div>
  );
};

export default index;
