"use client";

import React, { useState } from "react";
import {chiropractors} from '../constant'
import Image from "next/image";

const ChiropractorTeam: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("Atlanta-Midtown");

  const selectedChiropractor = chiropractors.find(
    (chiro) => chiro.location === selectedLocation
  );

  return (
    <div className="px-8 py-12 bg-white flex flex-col justify-evenly items-center wrap w-full">
      <div className="text-center mb-8 gap-6 flex flex-col">
        <h2 className="red-text-color work-sans-medium text-2xl uppercase">
          Meet Our Expert Chiropractic Team In Georgia
        </h2>
        <h3 className="text-4xl work-sans-bold font-bold">
          The Skilled Professionals Behind Your Care
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-12 md:w-[80%]">
        {chiropractors.map((chiro) => (
          <button
            key={chiro.location}
            onClick={() => setSelectedLocation(chiro.location)}
            className={`py-2 px-4 text-sm font-medium border rounded-lg ${
              selectedLocation === chiro.location
                ? "bg-red-100 text-red-600 border-red-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-red-600 hover:text-red-600"
            }`}
          >
            {chiro.location}
          </button>
        ))}
      </div>

      {selectedChiropractor && (
        <div className="flex flex-col md:flex-row md:w-[60%] items-center gap-8 md:flex-row md:justify-around md:items-center">
          <div className="w-full md:w-1/2 contents items-center">
            <Image src={selectedChiropractor.image} width={300} height={500} alt={selectedChiropractor.name} className="rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 border p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h4 className="red-text-color work-sans-medium text-2xl text-center mb-4">
              Meet Our {selectedChiropractor.location} Chiropractor
            </h4>
            <p className="text-gray-700 text-center mb-6">{selectedChiropractor.description}</p>
            <a href="tel:800-961-3130" className="py-2 px-4 red-background-color text-white rounded-lg text-center hover:red-background-color">
              Book Your Free Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiropractorTeam;
