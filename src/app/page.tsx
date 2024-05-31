// pages/Home.js
"use client";
import React, { useRef, useState } from "react";
import About from "./components/About";
import AtlantaYoutube from "./components/AtlantaYoutube";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImportantSteps from "./components/ImportantSteps";
import Navbar from "./components/Navbar";
import PracticeAreas from "./components/PracticeAreas";
import SliderBanner from "./components/SliderBanner";
import Testimonial from "./components/Testimonial";
import "./globals.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <ImportantSteps />
      <PracticeAreas />
      <CallToAction />
      <Testimonial />
      <div className="bg-black flex flex-col mt-20 items-center justify-center w-full py-6 relative">
        <div className="absolute left-0 bottom-0">
          <Image
            alt="Circle image"
            width={200}
            height={200}
            src="/Circle.png"
          />
        </div>

        <SliderBanner
          activeSlide={activeSlide}
          goToSlide={goToSlide}
          sliderRef={sliderRef}
        />
        <div className="flex gap-2 mt-6">
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === activeSlide ? "bg-primary-red" : "bg-white"
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            );
          })}
        </div>
        <div className="absolute right-0 top-0">
          <Image
            alt="Circle image"
            width={200}
            height={200}
            src="/Circletwo.png"
          />
        </div>
      </div>
      <Contact />
      <AtlantaYoutube />
      <Footer />
    </main>
  );
}
