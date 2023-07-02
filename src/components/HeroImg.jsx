import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../assets/user-interface.json";

function HeroImg() {
  useEffect(() => {
    const container = document.querySelector("#hero-img-container");
    const animation = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    animation.setSpeed(0.5);
  }, []);

  return <div id="hero-img-container"></div>;
}

export default HeroImg;
