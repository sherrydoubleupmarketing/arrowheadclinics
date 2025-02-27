"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import RightArrow from "../../../public/svg/RightArrow";
import LeftArrow from "../../../public/svg/LeftArrow";
import { GOOGLE_REVIEWS } from "../constant";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("Testimonials");

  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      id="testimonials"
      className="w-[100%] bg-[#FFE4E4] sm:bg-transparent flex flex-col px-8 py-12 wrap justify-evenly items-center"
    >
      <div className="w-[100%] md:w-[96%] pt-24 sm:py-24 sm:px-48 px-0 rounded-xl sm:bg-[#FFE4E4]">
        <div className="w-[100%] px-4 flex flex-col py-5">
          <div className="text-start">
            <h2 className="red-text-color poppins-semi-bold text-xl uppercase">
              What Our Patients Say
            </h2>
            <h3 className="text-4xl poppins-semi-bold">Real Stories, Real Recoveries</h3>
          </div>
        </div>
        <div className="w-[100%] px-4 flex flex-col md:flex-row items-center justify-between gap-8 py-5">
          <div className="w-full md:w-5/8">
            <div className="poppins-medium text-3xl text-gray-700 mb-4 flex flex-col">
              <span className="text-red-600 text-9xl font-bold max-h-20">“</span>
              {GOOGLE_REVIEWS[5].review}
            </div>
            <div className="flex items-center gap-4">
              <Image
                  src={GOOGLE_REVIEWS[5].image}
                  width={300}
                  height={400}
                  alt="Google image"
                  className="w-12 h-12 rounded-full"
              />
              <p className="poppins-medium text-xl text-gray-800">
                {GOOGLE_REVIEWS[5].name}
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/8">
            <Image
                src={GOOGLE_REVIEWS[5].original_image}
                width={400}
                height={600}
                alt="Google image"
                className="pointer-events-none select-none rounded-md"
            />
          </div>
        </div>
        <div className="w-[100%] px-4 py-8 h-fit" >
          <Slider className="flex flex-col" ref={sliderRef} {...settings}>
            {GOOGLE_REVIEWS.map((item, index) => {
              return (
                <div key={index} className="sm:!w-[96%] w-[100%] gap-8 p-8 bg-white">
                  <div className="flex flex-row items-start gap-8">
                    <Image
                        src={item.image}
                        width={300}
                        height={400}
                        alt="Google image"
                        className="w-12 h-12 rounded-full"
                    />
                    <h2 className="font-bold text-md poppins-medium mt-6">
                      {item.name}
                    </h2>
                  </div>
                  <p className="font-light text-md m-auto poppins-regular leading-relaxed">
                    {item.review}
                  </p>
                  <Image
                    src="/Fivestars.svg"
                    width={140}
                    height={140}
                    alt="Google image"
                    className="pointer-events-none select-none"
                  />
                </div>
              );
            })}
          </Slider>
          
        </div>
        <div className="flex flex-row justify-around items-center gap-4 px-5">
          <div className="flex gap-3">
            <div
              onClick={previous}
              className="w-12 h-12 rounded-full border border-primary-red hover:bg-white flex items-center justify-center cursor-pointer duration-300 ease-in-out"
            >
              <LeftArrow />
            </div>
            <div
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-red hover:bg-white flex items-center justify-center cursor-pointer duration-300 ease-in-out"
            >
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
