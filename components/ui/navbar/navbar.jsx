"use client";
import React, { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <nav className="">
      <div className="w-full h-11 z-50 bg-darkGray flex justify-between items-center p-4">
        <h1 className="text-xl text-white">AMIT MALI</h1>

        <button
          area-aria-label="show menu"
          className=" text-2xl text-red"
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          {menuVisibility ? <BiUpArrow /> : <BiDownArrow />}
        </button>
      </div>
      {menuVisibility && (
        <div
          className={`w-full
        ${menuVisibility ? " h-11" : "h-0"} 
          bg-red flex justify-end items-center p-4 transition-all delay-150 duration-300 `}
        >
          <ul className="flex list-none gap-4 capitalize">
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
