"use client";

import React from "react";
import featuredImage from '../../../public/Workers-Comp-Chiropractor.svg'
import Image from "next/image";
import { reasons } from "../constant";

const ReasonsToChooseUs: React.FC = () => {
  

  return (
    <div className="flex flex-col md:flex-row gap-6 px-8 md:py-8 md:pr-8 md:pl-0 bg-white md:wrap md:justify-center md:items-center w-full">
      <div className="hidden md:block md:w-1/5">
        <Image src={featuredImage} height={720} alt="Chiropractor working on a patient" className="shadow-md" />
      </div>
      <div className="md:w-4/5">
        <h2 className="red-text-color font-semibold text-xl uppercase mb-2">
          Why Choose Us
        </h2>
        <h3 className="text-4xl font-bold mb-4">Reasons For Choosing Us</h3>
        <p className="text-gray-700 mb-6">
          At Arrowhead Clinic, we provide expert care tailored to your needs.
          With decades of experience, advanced tools, and a dedicated team, we
          ensure effective treatment, pain relief, and full support throughout
          your recovery.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex gap-4 items-start flex-col sm:flex-row justify-start">
              <div className="red-background-color text-white font-bold rounded-xl min-w-10 h-10 flex items-center justify-center">
                {reason.id}
              </div>
              <div>
                <h4 className="font-bold text-2xl work-sans-bold">{reason.title}</h4>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsToChooseUs;
