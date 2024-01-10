import React from "react";
import "./LoadingPage.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { SplitText } from "gsap/SplitText.min.js";

gsap.registerPlugin(TextPlugin);

export default function LoadingPage() {
  const myText = new SplitType("#my-text", { type: "char" });
  gsap.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1,
  });

  return (
    <div className="loading-text">
      <div id="my-text">I'm Jerin James I am a creative developer</div>
    </div>
  );
}
