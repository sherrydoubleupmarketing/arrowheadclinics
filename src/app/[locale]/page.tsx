"use client";
import React, { useEffect, useRef, useState } from "react";
import "./globals.css";
import Slider from "react-slick";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import ImportantSteps from "../components/ImportantSteps";
import PracticeAreas from "../components/PracticeAreas";
import CallToAction from "../components/CallToAction";
import Testimonial from "../components/Testimonial";
import SliderBanner from "../components/SliderBanner";
import { CTAS } from "../constant";
import Contact from "../components/Contact";
import AtlantaYoutube from "../components/AtlantaYoutube";
import Footer from "../components/Footer";
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
        <div className="absolute  z-0 left-0 bottom-0">
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
          {CTAS.map((item: any) => {
            return (
              <div
                key={item.id}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  item.id === activeSlide ? "bg-primary-red" : "bg-white"
                }`}
                onClick={() => goToSlide(item.id)}
              ></div>
            );
          })}
        </div>
        <div className="absolute hidden sm:block right-0 top-0">
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
