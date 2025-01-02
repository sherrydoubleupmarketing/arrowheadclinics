import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import callimage from "../../../public/CallIcon.png";

const HeroSection = () => {
  const t = useTranslations("Herosection");

  return (
    <div className="flex flex-col w-full">
      <div className="h-16 w-full red-background-color flex items-center justify-center">
        <p className="font-normal text-md w-[70%] sm:w-full md:text-3xl text-center text-white work-sans-medium">
          {t("Heading")}
        </p>
      </div>
      <div className="py-36 w-[100%] px-8 sm:px-52 flex flex-col justify-evenly gap-5 bg-[url('/HerobgMobile.svg')] sm:bg-[url('/HerobgDesktop.svg')] bg-cover bg-no-repeat text-white">
        <div className="flex items-center sm:items-start flex-col justify-center md:justify-start w-[100%] md:w-[69%] gap-6">
          <h1 className="sm:text-6xl work-sans-bold  text-3xl sm:w-full sm:text-left text-center w-[100%] py-4 bg-cover">
            {t("MainHeading")}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold sm:w-full w-[90%] sm:text-left text-center work-sans-medium">
            {t("HeroSubHeading")}
          </h2>
          <h2 className="md:text-2xl text-xl sm:text-left text-center work-sans-medium">{t("Covered")}</h2>
          <a href="tel:800-961-3130" className="w-[80%] min-w-fit cursor-pointer md:w-[36%] p-3 bg-white red-text-color border border-1 border-solid rounded-xl border-[#C3110F] flex items-center justify-center text-xl font-normal work-sans-medium">
            <Image src={callimage} width={40} height={40} alt="Call us" />
            {t("CaseEvaluation")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
