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
      <div className="">
        <div className=" text-white text-center mb-10 flex flex-col gap-7">
          {FOOTER_ADDRESSES.map(({ id, name }) => {
            return (
              <div key={id}>
                <h2 className="text-md md:text-xl font-bold work-san-medium">
                  {name}
                </h2>
              </div>
            );
          })}
        </div>
        <iframe
          title="My map Frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53052.38605797016!2d-84.42251845000001!3d33.7490985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5041f1c723ea9%3A0xf4fb9f4d5df11a8d!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2s!4v1714567688703!5m2!1sen!2s"
          width="100%"
          height="600px"
          loading="lazy"
        ></iframe>
        <a href="https://darriusg3.sg-host.com/">
          <div className="flex items-center justify-center m-4">
            <Image width={120} height={120} src="/Maskgroup.svg" alt="Logo" />
          </div>
        </a>
      </div>
      <div className="flex flex-col mt-5">
        <div className="w-full border border-primary-red"></div>
      </div>
      <div className="mt-6 mb-6 flex flex-col md:flex-row flex-wrap items-center justify-center m-auto gap-5">
        <h2 className="text-xl font-bold text-primary-red work-sans-medium">
          Quick links
        </h2>
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
