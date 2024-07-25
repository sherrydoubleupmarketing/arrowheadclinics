import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const t = useTranslations("CallToAction");

  return (
    <div className="bg-[url('/Bannerthree.webp')] bg-cover w-[90%] md:w-[80%] items-center justify-center m-auto py-5 mt-20 rounded-xl">
      <h1 className="dk-dirrrty md:text-6xl sm:text-4xl text-4xl lg:text-[6rem] p-2 text-white">
        {t("ALTANTAHAPPENS")}
      </h1>
      <div className="flex items-end justify-end flex-col">
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-bold work-sans-medium text-white">
            {t("GetFree")}
          </h1>
          <p className="w-[90%] md:w-[60%] work-sans-regular text-white text-md text-center">
            {t("BigInsurance")}
          </p>
          <Link href="#contact-us">
            <button className="bg-black p-2 text-xl px-8 work-sans-regular rounded-xl text-white hover:bg-white hover:text-black transition ease-in-out duration-300">
              {t("Contact")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
