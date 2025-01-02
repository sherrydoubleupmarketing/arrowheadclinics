"use client";

import React from "react";
import Image from "next/image";
import logoimaage from "../../../public/Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="text-center mb-4">
        <ul className="flex justify-center space-x-6 text-sm">
          <li>
            <a
              href="tel:800-961-3130"
              className="hover:text-gray-400 transition"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="tel:800-961-3130"
              className="hover:text-gray-400 transition"
            >
              Disclaimer
            </a>
          </li>
          <li>
            <a
              href="tel:800-961-3130"
              className="hover:text-gray-400 transition"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center mb-4">
        <Image src={logoimaage} width={200} height={200} alt="Hero Image" />
      </div>

      <div className="text-center text-sm text-gray-400">
        © 2024. All rights reserved. Arrowhead.
      </div>
    </footer>
  );
};

export default Footer;
