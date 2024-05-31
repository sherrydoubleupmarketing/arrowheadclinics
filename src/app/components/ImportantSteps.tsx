import React from "react";
import TickIcon from "../../../public/svg/TickIcon";
import Image from "next/image";
import { IMPORTANT_STEPS } from "../constant";

const ImportantSteps = () => {
  return (
    <div className="mt-16 w-[100%] md:w-[85%] h-fit flex flex-col md:flex-row items-center justify-center m-auto mb-20">
      <div className="w-full md:w-[60%] bg-primary-red flex flex-col gap-6 py-1 rounded-l-md">
        <h1 className="font-bold work-sans-bold text-2xl sm:text-3xl md:text-4xl text-white w-[85%] mt-3 m-auto text-center leading-relaxed">
          Important Steps to Take When in a{" "}
          <span className="text-black dk-dirrrty block">
            Motor Vehicles Accident
          </span>
        </h1>
        <div className="flex flex-col gap-4 px-3 md:px-10 text-white items-center justify-center">
          {IMPORTANT_STEPS.map(({ id, text, Icon }) => {
            return (
              <div key={id} className="flex gap-4">
                <span>
                  <Icon />
                </span>
                <p className="text-sm font-light work-sans-medium">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-[40%] h-full">
        <Image src={"/Bannerimge.png"} width={470} height={470} alt="" />
      </div>
    </div>
  );
};

export default ImportantSteps;
