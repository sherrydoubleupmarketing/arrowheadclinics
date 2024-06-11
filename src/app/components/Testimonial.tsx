import React, { useRef } from "react";
import StarIcon from "../../../public/svg/StarIcon";
import Image from "next/image";
import RightArrow from "../../../public/svg/RightArrow";
import LeftArrow from "../../../public/svg/LeftArrow";
import Slider from "react-slick";

const Testimonial = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div
      id="testimonials"
      className="w-[90%] flex flex-col md:flex-row m-auto mt-20"
    >
      <div className="w-[100%] md:w-[50%] flex flex-col gap-6 py-5">
        <div className="w-80 h-12 px-4 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[50%] border-t-0.5 border-white"></span>
          <p className="text-white work-sans-regular">TESTIMONIALS</p>
        </div>
        <h1 className="sm:text-4xl text-3xl md:text-5xl font-bold text-primary-red w-[90%] md:w-[60%] work-sans-bold">
          Hear what our past clients say
        </h1>
        <p className="font-light text-md w-[92%] md:w-[80%] work-sans-regular leading-relaxed">
          We strive to provide all of our clients with the best possible results
          and value how each feels about us and the services we have provided.
          We are honored by the reviews we have received from both past and
          present clients
        </p>
        <button className="px-5 py-3 work-sans-regular bg-primary-red rounded-sm w-56 mt-6 text-white hover:bg-black transition duration-300 ease-out">
          Request a consultation
        </button>
      </div>
      <div className="w-[100%] md:w-[45%] py-6 boxshadow h-fit">
        <div className="w-[90%] flex flex-col m-auto">
          <Slider ref={sliderRef} {...settings}>
            {[0, 1, 2.3].map((index) => {
              return (
                <div key={index} className="mt-6 w-[90%]">
                  <p className="font-light text-md m-auto work-sans-regular leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Feugiat purus sed fames cursus. Est scelerisque nibh vivamus
                    sed viverra. Nisi, amet arcu nascetur ac. Suspendisse id at
                    sit molestie id malesuada dignissim nisl. Non cursus justo,
                    scelerisque egestas. Gravida lacus sit in. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Feugiat purus sed
                    fames cursus. Est scelerisque nibh vivamus sed viverra.
                  </p>
                  <h3 className="font-bold text-md work-sans-medium mt-6">
                    Violet obsedoeo
                  </h3>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((index) => {
                      return <StarIcon key={index} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center gap-4 px-5">
            <Image
              src="/Google.png"
              width={140}
              height={140}
              alt="Google image"
              className="pointer-events-none select-none"
            />
            <div className="flex gap-3">
              <div
                onClick={previous}
                className="w-12 h-12 rounded-full border border-primary-red hover:bg-black flex items-center justify-center cursor-pointer duration-300 ease-in-out"
              >
                <LeftArrow />
              </div>
              <div
                onClick={next}
                className="w-12 h-12 rounded-full border border-primary-red hover:bg-black flex items-center justify-center cursor-pointer duration-300 ease-in-out"
              >
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
