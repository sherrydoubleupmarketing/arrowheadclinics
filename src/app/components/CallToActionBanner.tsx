"use client";

import React from "react";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import Callusbannerimage from '../../../public/CallUsbannerIcon.svg'

const CallToActionBanner: React.FC = () => {
  return (
    <div id="cta" className="w-full px-6 my-12 text-white bg-[url('/CallUsBanner.svg')] bg-center md:bg-none relative overflow-hidden flex items-center justify-center">
      <div className="md:w-[80%] w-full relative z-10 md:bg-[url('/CallUsBanner.svg')] bg-cover rounded-3xl md:bg-center p-12 text-center">
        <h2 className="text-4xl poppins-bold mb-4">Ready to Start Your Recovery?</h2>
        <p className="text-lg poppins-regular mb-6">
          Don&lsquo;t wait to get the care you deserve. Call now for a free
          consultation and take the first step toward a pain-free life!
        </p>
        <a 
          href="tel:800-961-3130"
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-white text-red-600 rounded-lg shadow-md hover:bg-gray-100"
        >
          <Image
            src={Callusbannerimage}
            alt="Frequently Asked Questions"
            width={30}
            height={30}
            className="rounded-lg shadow-md"
          />
          <p>(800)-961-3130</p>
        </a>
      </div>
    </div>
  );
};

export default CallToActionBanner;
