import Image from "next/image";
import React, { useState } from "react";
import YoutubeIcon from "../../../public/svg/YoutubeIcon";

const AtlantaYoutube = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div id="youtubeSection" className="mt-0 md:mt-20">
      <div className="flex flex-col w-[90%] m-auto gap-4">
        <div className="w-80 h-12 mt-20 px-4 bg-primary-red flex gap-4 items-center justify-center">
          <span className="w-[30%] border-t-0.5 border-white"></span>
          <p className="text-white text-xs whitespace-nowrap work-sans-regular">
            ATLANTA HAPPENS ON YOUTUBE
          </p>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-primary-red w-[100%] md:w-[50%] leading-normal work-sans-bold">
          Need help? Contact our team of experienced car accident lawyers today
          (470) 300-1797
        </h2>
      </div>
      <div className="mt-10 flex justify-center items-center m-auto w-[90%]">
        {showVideo ? (
          <div className="">
            <iframe
              src="https://www.youtube.com/embed/C56CBSm9Xmc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-[12rem] sm:h-[20rem] md:h-[34rem] w-[22rem] sm:w-[30rem] md:w-[62rem]"
            ></iframe>
          </div>
        ) : (
          <div>
            <Image
              alt="Youtube image"
              width={1000}
              height={1000}
              src="/Youtubecover.png"
            />
          </div>
        )}

        {!showVideo && (
          <div className="flex items-center justify-center absolute text-white">
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Fallback for non-supporting browsers
                backdropFilter: "blur(8px)",
              }}
              className="absolute sm:w-24 w-20 h-20 sm:h-24 rounded-full bg-white text-black flex items-center justify-center"
            >
              <div
                onClick={() => setShowVideo(true)}
                className="w-12 sm:w-16 h-12 sm:h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110 duration-300 ease-in-out"
              >
                <span className="ml-1">
                  <YoutubeIcon />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtlantaYoutube;
