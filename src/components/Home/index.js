
import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import JrdBirth from "./JrdBirth";
import Lore from '../Lore';
import Roadmap from './Roadmap';

const index = () => {
  return (
    <div className="app-wrapper text-white">
      <Lore />
      {/*<Hero />*/}
      <JrdBirth />
      <CTA />
    </div>
  );
};

export default index;
