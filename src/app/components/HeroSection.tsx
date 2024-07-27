import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Herosection");

  return (
    <div className="flex flex-col w-full">
      <div className="h-16 w-full bg-black flex items-center justify-center">
        <p className="font-normal text-md w-[70%] sm:w-full md:text-3xl text-center text-white work-sans-medium">
          {t("Heading")}
        </p>
      </div>
      <div className="py-20 w-[100%] flex flex-col justify-center gap-5 -mr-20 bg-[url('/Herobg.webp')] bg-cover text-white">
        <div className="flex items-center flex-col justify-center md:justify-start w-[100%] md:w-[69%] gap-6">
          <h1 className="xl:text-6xl dk-dirrrty md:text-5xl sm:text-4xl text-2xl sm:w-full text-center w-[90%] bg-[url('/Lawyerbg.svg')] py-4 bg-cover">
            {t("AtlantaCar")}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold sm:w-full w-[70%] text-center work-sans-bold">
            {t("DidAtlanta")}
          </h2>
          <h2 className="md:text-2xl text-xl work-sans-bold">{t("Covered")}</h2>
          <Link href="#contact-us">
            <div className="w-[80%] min-w-fit px-6 cursor-pointer md:w-[36%] py-3 bg-primary-red flex items-center justify-center text-xl font-normal work-sans-medium">
              {t("CaseEvaluation")}
            </div>
          </Link>
          <Image
            src="/Google.png"
            width={150}
            height={150}
            alt="google Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
