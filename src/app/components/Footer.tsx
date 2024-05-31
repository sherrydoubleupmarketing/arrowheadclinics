import React from "react";
import { FOOTER_ADDRESSES, FOOTER_LINKS } from "../constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 bg-black flex justify-center flex-col">
      <div>
        <h1 className="md:text-6xl sm:text-4xl text-2xl flex dk-dirrrty text-primary-red items-center justify-center py-8 tracking-wider font-bold">
          ATLANTA HAPPENS
        </h1>
      </div>
      <div className="relative">
        <div className="left-[5%] sm:left-[10%] md:left-[25%] top-10 md:top-[30%] text-white absolute flex flex-col gap-7">
          {FOOTER_ADDRESSES.map(({ id, name }) => {
            return (
              <div key={id}>
                <h3 className="text-md md:text-xl font-bold work-san-medium">
                  {name}
                </h3>
              </div>
            );
          })}
        </div>
        <iframe
          className="opacity-25"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.52300824488!2d-80.22945845000001!3d25.7824075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1714567688703!5m2!1sen!2s"
          width="100%"
          height="600px"
          loading="lazy"
        ></iframe>
        <div className="absolute left-[34%] md:left-[45%] -mt-14">
          <Image width={120} height={120} src="/Maskgroup.svg" alt="Logo" />
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <div className="w-full border border-primary-red"></div>
      </div>
      <div className="mt-6 mb-6 flex flex-col md:flex-row flex-wrap items-center justify-center m-auto gap-5">
        <h4 className="text-xl font-bold text-primary-red work-sans-medium">
          Quick links
        </h4>
        {FOOTER_LINKS.map(({ id, name, path }) => {
          return (
            <div key={id} className="flex gap-5">
              <Link href={path}>
                <p className="text-[#8d8d8d] work-sans-regular cursor-pointer text-md font-light hover:text-white duration-300 ease-in-out transition">
                  {name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
