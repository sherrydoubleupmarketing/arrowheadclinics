import React from "react";
import { PRACTICE_CARD } from "../constant";
import { useTranslations } from "next-intl";

const PracticeAreas = () => {
  const t = useTranslations("PracticeArea");

  return (
    <div
      id="practice-area"
      className="w-full relative bg-[url('/Practice.svg')]"
    >
      <div className="w-[40%] h-4 bg-primary-red"></div>
      <div className="w-[90%] flex m-auto flex-col gap-6">
        <div className="w-64 text-nowrap md:w-80 h-12 mt-20 px-4 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white work-sans-regular">{t("PracticeArea")}</p>
        </div>
        <h2 className="sm:text-4xl text-3xl md:text-5xl font-bold text-primary-red w-[70%] md:w-[30%] leading-normal work-sans-bold">
          {t("PracticeAreas")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-1 md:mt-20 mb-12">
          {PRACTICE_CARD.map(({ id, name, desc, Icon }) => {
            return (
              <div
                className="flex flex-col gap-4 items-center justify-center sm:justify-start sm:items-start"
                key={id}
              >
                <Icon />
                <p className="font-bold text-3xl work-sans-medium">{t(name)}</p>
                <p className="text-md font-light w-[80%] leading-relaxed work-sans-regular text-center sm:text-start">
                  {t(desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[40%] absolute right-0 h-4 bg-primary-red"></div>
    </div>
  );
};

export default PracticeAreas;
