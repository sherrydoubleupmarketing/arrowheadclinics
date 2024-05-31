// components/SliderBanner.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner = ({ activeSlide, goToSlide, sliderRef }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => goToSlide(current),
  };

  return (
    <div className="slider-container w-full md:w-[60%]">
      <Slider ref={sliderRef} {...settings}>
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="w-full bg-[#000000] flex items-center justify-center"
          >
            <div className="flex-col gap-4 flex items-center justify-center mt-4 py-5 relative z-10">
              <h1 className="font-normal text-3xl text-white relative z-10 work-sans-medium">
                Truck Accident
              </h1>
              <h2 className="font-bold text-5xl text-primary-red work-sans-bold">
                $400K
              </h2>
              <p className="sm:text-base text-md font-light text-white w-[90%] sm:w-[60%] text-center work-sans-regular leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
