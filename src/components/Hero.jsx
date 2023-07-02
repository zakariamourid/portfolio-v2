import React from "react";
import HeroImg from "./HeroImg";
import { FaFileArrowDown } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero-section  w-10/12 mx-auto  flex items-center justify-center">
      <div className="hero-section-text text-center md:text-left  md:w-1/2  py-32 md:py-8">
        <h1 className="md:text-6xl text-4xl font-bold mb-4">
          Hi👋, I'm Zakaria Mourid.
        </h1>
        <p className="text-lg   mb-2 md:w-2/3">
          A passionate full-stack developer based in Casablanca,Morocco🇲🇦{" "}
        </p>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1R761tUMn0_OZXDV5SNJzXkZWuch4Zg3A"
          className="py-2 px-4 text-center text-white bg-orange-400 rounded-lg  cursor-pointer hover:scale-105 inline-block transition-all "
        >
          <FaFileArrowDown className="inline mr-2" />
          Resume
        </a>
      </div>
      <div className="hero-section-img w-1/2 hidden md:block">
        <HeroImg />
      </div>
    </div>
  );
}
export default Hero;
