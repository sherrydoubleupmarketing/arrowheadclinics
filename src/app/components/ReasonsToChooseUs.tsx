"use client";

import React from "react";
import featuredImage from '../../../public/Workers-Comp-Chiropractor.svg'
import Image from "next/image";
import { reasons } from "../constant";

const ReasonsToChooseUs: React.FC = () => {
  

  return (
    <div className="flex flex-col md:flex-row gap-6 px-8 md:py-8 md:pr-8 md:pl-0 bg-white md:wrap md:justify-center md:items-center w-full">
      <div className="hidden md:block md:w-2/5 2xl:w-1/5">
        <Image src={featuredImage} height={1020} alt="Chiropractor working on a patient" className="shadow-md" />
      </div>
      <div className="md:w-3/5 2xl:w-4/5">
        <h2 className="red-text-color font-semibold text-xl poppins-semi-bold uppercase mb-2">
          Why Choose Us
        </h2>
        <h3 className="text-4xl poppins-semi-bold mb-4">Reasons For Choosing Us</h3>
        <p className="text-gray-700 poppins-regular mb-6">
          At Arrowhead Clinic, we provide expert care tailored to your needs.
          With decades of experience, advanced tools, and a dedicated team, we
          ensure effective treatment, pain relief, and full support throughout
          your recovery.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex gap-4 items-start flex-col sm:flex-row justify-start">
              <div className="red-background-color text-white poppins-medium text-3xl rounded-xl min-w-16 h-16 flex items-center justify-center">
                {reason.id}
              </div>
              <div>
                <h4 className="poppins-semi-bold text-2xl">{reason.title}</h4>
                <p className="text-gray-600 poppins-medium">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsToChooseUs;
