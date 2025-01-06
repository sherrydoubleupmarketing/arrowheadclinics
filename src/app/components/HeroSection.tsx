import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import callimage from "../../../public/svg/call.svg";

const conditions = [
  "Whiplash",
  "Back Pain",
  "Neck Injuries",
  "Herniated Discs",
  "Soft Tissue Damage",
];

const HeroSection = () => {
  const t = useTranslations("Herosection");

  const [currentConditionIndex, setCurrentConditionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConditionIndex((prevIndex) =>
        prevIndex === conditions.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentCondition = conditions[currentConditionIndex];

  return (
    <div className="flex flex-col w-full">
      <div className="h-16 w-full red-background-color flex items-center justify-center">
        <p className="font-normal text-md w-[70%] sm:w-full md:text-3xl text-center text-white work-sans-medium">
          {t("Heading")}
        </p>
      </div>
      <div className="py-36 w-[100%] px-8 sm:px-52 flex flex-col justify-evenly gap-5 bg-[url('/HerobgMobile.svg')] sm:bg-[url('/HerobgDesktop.svg')] bg-cover bg-no-repeat text-white">
        <div className="flex items-center sm:items-start flex-col justify-center md:justify-start w-[100%] gap-6">
          <h1 className="sm:text-6xl work-sans-bold text-3xl sm:w-full sm:text-left text-center w-[100%] py-4 bg-cover">
            Georgia’s <span className="red-text-color">Top-Ranked</span> Car Accident Chiropractor
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold sm:w-full w-[100%] sm:text-left text-center work-sans-medium">
            Chiropractic Care for{" "}
            <span className="red-text-color underline">{currentCondition}</span>
          </h2>
          <h2 className="md:text-2xl text-xl sm:text-left text-center work-sans-medium">{t("Covered")}</h2>
          <a
            href="tel:800-961-3130"
            className="w-[80%] gap-8 min-w-fit cursor-pointer md:w-[30%] p-3 bg-white red-text-color border border-1 border-solid hover:text-white hover:!bg-[#C3110F] rounded-xl border-[#C3110F] flex items-center justify-center text-2xl work-sans-medium"
          >
            <Image src={callimage} width={50} height={50} alt="Call us" />
            <p>(800)-961-3130</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
