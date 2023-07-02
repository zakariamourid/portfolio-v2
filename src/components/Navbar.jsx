import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const name = "< zakaria />";
  const [toggle, setToggle] = useState(false);
  return (
    <div className="border-b-2 ">
      <div className="nav flex justify-between items-center py-4 w-5/6 mx-auto">
        <div className="text-xl font-bold">{name}</div>
        {/* desktop menu */}
        <ul className="md:flex gap-4 hidden ">
          <li className="cursor-pointer hover:scale-90 transition-all">Home</li>
          <li className="cursor-pointer hover:scale-90 transition-all">
            About
          </li>
          <li className="cursor-pointer hover:scale-90 transition-all">
            Education
          </li>
          <li className="cursor-pointer hover:scale-90 transition-all">
            Projects
          </li>
          <li className="cursor-pointer hover:scale-90 transition-all">
            Contact
          </li>
        </ul>
        {/* mobile menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } md:hidden flex-col items-center justify-center`}
        >
          <ul className="md:hidden flex flex-col items-center justify-center absolute bg-red-200 h-screen gap-7 inset-0 ">
            <li className="text-3xl">Home</li>
            <li className="text-3xl">About</li>
            <li className="text-3xl">Education</li>
            <li className="text-3xl">Projects</li>
            <li className="text-3xl">Contact</li>
          </ul>
        </div>

        <div>
          <a
            href="https://twitter.com/zakariamourid10"
            className="hidden md:block hover:underline transition-all hover:text-blue-500"
            target="_blank"
          >
            @zakariamourid10
          </a>
        </div>
        <div
          className="md:hidden  cursor-pointer z-10"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RxCross2 className="h-8 w-8 font-bold" />
          ) : (
            <FaBars className="h-6 w-6 font-bold" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
