"use client";

import React from "react";
import featuredImage from '../../../public/Workers-Comp-Chiropractor.svg'
import Image from "next/image";
import { reasons } from "../constant";

const ReasonsToChooseUs: React.FC = () => {
  

  return (
    <div className="flex flex-col md:flex-row gap-6 p-8 bg-white md:wrap md:justify-center md:items-center">
      <div className="w-full md:w-2/5">
        <Image src={featuredImage} alt="Chiropractor working on a patient" className="rounded-lg shadow-md" />
      </div>
      <div className="md:w-3/5">
        <h2 className="red-text-color font-semibold text-sm uppercase mb-2">
          Why Choose Us
        </h2>
        <h3 className="text-2xl font-bold mb-4">Reasons For Choosing Us</h3>
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
                <h4 className="font-bold text-lg">{reason.title}</h4>
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
