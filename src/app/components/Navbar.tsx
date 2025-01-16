import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import logoimaage from "../../../public/Logo.png";
import callimage from "../../../public/CallIcon.png";
// import LanguageSwitcher from "./LanguageSwitcher";
const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="w-full p-8 flex flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-4 justify-center sm:justify-between m-auto items-center sm:w-[80%]">
        <div>
          <Image src={logoimaage} width={200} height={200} alt="Hero Image" />
        </div>
        <button className="rounded-xl red-background-color text-white h-fit md:rounded-xl p-4">
          <a href="tel:800-961-3130" className="flex items-center justify-center md:w-fit md:!mb-0 text-white poppins-bold font-bold text-xl gap-2">
            <Image src={callimage} width={40} height={40} alt="Call us" />
            <p>(800)-961-3130</p>
          </a>
        </button>
      </div>
      {/* <LanguageSwitcher /> */}
    </div>
  );
};

export default Navbar;
