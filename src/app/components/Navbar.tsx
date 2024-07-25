import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
// import "./global.css";
import logoimaage from "../../../public/Logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="w-full px-12 mt-4 mb-5 sm:mb-3">
      <div className="w-[80%] flex flex-wrap justify-center md:justify-between m-auto items-center">
        <div className="mb-3">
          <Image src={logoimaage} width={170} height={170} alt="Hero Image" />
        </div>
        <div className="flex items-center gap-5">
          <h3 className="font-bold work-sans-bold text-2xl text-black flex-col md:flex hidden">
            <span>{t("Review")}</span> <span>{t("Case")}</span>
          </h3>
          <button className="flex rounded-[0px] w-[100vw] md:w-fit mb-[-20px] md:!mb-0 flex-col bg-primary-red h-fit md:rounded-xl text-white work-sans-bold font-bold text-xl py-4 px-8 items-center justify-center">
            <a href="tel:+4705756130">
              <p>{t("Call")}</p>
              <p>(470)-575-6130</p>
            </a>
          </button>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
