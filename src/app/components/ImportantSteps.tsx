import React from "react";
import { IMPORTANT_STEPS } from "../constant";
import { useTranslations } from "next-intl";

const ImportantSteps = () => {
  const t = useTranslations("ImportantSteps");

  return (
    <div className="w-[90%] m-auto flex flex-col lg:flex-row mb-20">
      <div className="bg-primary-red w-full lg:w-[60%]">
        <div className="p-4">
          <h2 className="font-bold work-sans-bold text-2xl sm:text-3xl md:text-4xl text-white w-[85%] mt-3 m-auto text-center leading-relaxed">
            {t("imp")}{" "}
            <span className="text-black dk-dirrrty block">{t("Car")}</span>
          </h2>
          <div className="flex flex-col gap-4 px-3 md:px-10 text-white">
            {IMPORTANT_STEPS.map(({ id, text, Icon }) => {
              return (
                <div key={id} className="flex gap-4">
                  <span className="mt-1">
                    <Icon />
                  </span>
                  <p className="text-md font-light work-sans-medium">
                    {t(text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[40%] bg-banner"></div>
    </div>
  );
};

export default ImportantSteps;
