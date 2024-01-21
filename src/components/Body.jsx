import React from "react";

import Intro from "./body_components/Intro";
import Avatar from "./body_components/Avatar";
import Bio from "./body_components/Bio";
import MyProjects from "./body_components/MyProjects";
import EasterEgg from "./body_components/EasterEgg";
import Resources from "./body_components/Resources";

export default function Body() {
  return (
    <div className="body-view">
      <Intro />
      <Avatar />
      <Bio />
      <MyProjects />
      <EasterEgg />
      <Resources />
    </div>
  );
}
