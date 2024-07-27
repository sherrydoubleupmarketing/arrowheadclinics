import React from "react";
import { FOOTER_ADDRESSES, FOOTER_LINKS } from "../constant";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="mt-20 bg-black flex justify-center flex-col">
      <div>
        <h2 className="md:text-[5rem] text-4xl sm:mb-10 sm:mt-10 flex dk-dirrrty text-primary-red items-center justify-center py-8 tracking-wider font-bold">
          ATLANTA HAPPENS
        </h2>
      </div>
      <div className="w-[90%] m-auto">
        <div className=" text-white text-center mb-10 flex flex-col gap-7">
          {FOOTER_ADDRESSES.map(({ id, name, link }) => {
            return (
              <div key={id} className="w-fit m-auto">
                <a href={link}>
                  <h2 className="text-md m-auto md:text-xl font-bold work-san-medium w-fit hover:text-primary-red hover:underline ">
                    {name}
                  </h2>
                </a>
              </div>
            );
          })}
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d106148.78206611586!2d-84.392151!3d33.756804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50380c24d30e5%3A0xb12b74cdc2eba46b!2s101%20Marietta%20St%20NW%20%23300%2C%20Atlanta%2C%20GA%2030303!5e0!3m2!1sen!2sus!4v1718389395417!5m2!1sen!2sus"
          title="My map Frame"
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
          {t("Quicklinks")}
        </h2>
        {FOOTER_LINKS.map(({ id, name, path }) => {
          return (
            <div key={id} className="flex gap-5">
              <Link href={path}>
                <p className="text-[#8d8d8d] work-sans-regular cursor-pointer text-md font-light hover:text-white duration-300 ease-in-out transition">
                  {t(name)}
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
