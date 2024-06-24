import React from "react";
import TickIcon from "../../../public/svg/TickIcon";
import Image from "next/image";
import { IMPORTANT_STEPS } from "../constant";

const ImportantSteps = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col lg:flex-row mb-20">
      <div className="bg-primary-red w-full lg:w-[60%]">
        <div className="p-4">
          <h1 className="font-bold work-sans-bold text-2xl sm:text-3xl md:text-4xl text-white w-[85%] mt-3 m-auto text-center leading-relaxed">
            Important Steps to Take When in a{" "}
            <span className="text-black dk-dirrrty block">Car Accident</span>
          </h1>
          <div className="flex flex-col gap-4 px-3 md:px-10 text-white">
            {IMPORTANT_STEPS.map(({ id, text, Icon }) => {
              return (
                <div key={id} className="flex gap-4">
                  <span className="mt-1">
                    <Icon />
                  </span>
                  <p className="text-sm font-light work-sans-medium">{text}</p>
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
