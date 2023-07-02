import React from "react";
import HeroImg from "./HeroImg";
import { FaFileArrowDown } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero-section  w-10/12 mx-auto  flex items-center">
      <div className="hero-section-text  w-1/2 ">
        <h1 className="text-5xl font-bold mb-4">Hi👋, I'm Zakaria Mourid</h1>
        <p className="text-xl mb-2">I'm a full-stack web developer </p>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1R761tUMn0_OZXDV5SNJzXkZWuch4Zg3A"
          className="py-2 px-4 text-center text-white bg-orange-400 rounded-lg  cursor-pointer hover:scale-105 inline-block transition-all "
        >
          <FaFileArrowDown className="inline mr-2" />
          Resume
        </a>
      </div>
      <div className="hero-section-img w-1/2">
        <HeroImg />
      </div>
    </div>
  );
}
export default Hero;
