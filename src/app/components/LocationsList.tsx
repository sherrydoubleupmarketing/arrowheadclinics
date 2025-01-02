"use client";

import React from "react";
import { locations } from "../constant";
import Link from "next/link";

const LocationsList: React.FC = () => {
  return (
    <div className="px-8 py-12 bg-white flex flex-col md:wrap md:justify-center md:items-center">
      <div className="text-center mb-8 gap-6 flex flex-col md:w-4/5">
        <h2 className="red-text-color work-sans-medium text-2xl uppercase">
          Proudly Serving Georgia Communities
        </h2>
        <h3 className="text-4xl work-sans-bold font-bold">
          Locations We Serve In Georgia
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:w-4/5">
        {locations.flat().map((location, index) => (
          <Link
            href="#cta"
            key={index}
            className="text-center red-text-color p-8 border-0 md:border border-[#C3110F] border-solid work-sans-regular text-2xl hover:underline"
          >
            {location}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocationsList;