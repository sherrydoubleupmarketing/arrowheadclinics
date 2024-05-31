import Image from "next/image";
import React from "react";
// import "./global.css";

const Navbar = () => {
  return (
    <div className="w-full px-12 mt-4">
      <div className="w-[90%] flex flex-wrap justify-center md:justify-between m-auto items-center">
        <div className="mb-1">
          <Image src="/logo.png" width={170} height={170} alt="Hero Image" />
        </div>
        <div className="flex items-center gap-5">
          <h3 className="font-bold work-sans-bold text-2xl text-black flex-col md:flex hidden">
            <span>Review Your</span> <span>case today</span>
          </h3>
          <button className="flex md:mt-0 mt-3 flex-col bg-primary-red h-12 rounded-xl text-white work-sans-bold font-bold text-xl py-10 px-7 items-center justify-center">
            <p>Call now! </p>
            <p>(867)-746 2323</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
