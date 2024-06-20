import Image from "next/image";
import React from "react";
// import "./global.css";
import logoimaage from "../../../public/Logo.png";
const Navbar = () => {
  return (
    <div className="w-full px-12 mt-4 mb-5 sm:mb-3">
      <div className="w-[90%] flex flex-wrap justify-center md:justify-between m-auto items-center">
        <div className="mb-3">
          <Image src={logoimaage} width={170} height={170} alt="Hero Image" />
        </div>
        <div className="flex items-center gap-5">
          <h3 className="font-bold work-sans-bold text-2xl text-black flex-col md:flex hidden">
            <span>Review Your</span> <span>Case Today</span>
          </h3>
          <button className="flex rounded-[0px] w-[100vw] md:w-fit mb-[-20px] md:!mb-0 flex-col bg-primary-red h-fit md:rounded-xl text-white work-sans-bold font-bold text-xl py-4 px-8 items-center justify-center">
            <a href="tel:+(867)-746 2323">
              <p>Call Now </p>
              <p>(867)-746 2323</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
