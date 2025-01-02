"use client";
import React from "react";
import foxpng from '../../../public/FOXNEWS.svg';
import cbspng from '../../../public/CBS.svg';
import usatodaypng from '../../../public/USAToday.svg';
import nbcpng from '../../../public/NBS.svg';
import Slider from "react-slick";
import Image from "next/image";

const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    autoplay: true,
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
          slidesToShow: 1.8,
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full md:w-[91%] h-52">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <Slider {...settings} className="w-full py-12">
          <div className="px-2">
            <Image src={nbcpng} width={200} height={200} alt="NBC" className="mx-auto" />
          </div>
          <div className="px-2">
            <Image src={foxpng} width={200} height={200} alt="FOX News" className="mx-auto" />
          </div>
          <div className="px-2">
            <Image src={cbspng} width={200} height={200} alt="CBS" className="mx-auto" />
          </div>
          <div className="px-2">
            <Image src={usatodaypng} width={200} height={200} alt="USA Today" className="mx-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
