"use client";
import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import MediaChannels from "../components/MediaChannels";
import ReasonsToChooseUs from "../components/ReasonsToChooseUs";
import LocationsList from "../components/LocationsList";
import ChiropractorTeam from "../components/ChiropractorTeam";
import FAQAccordion from "../components/FAQAccordion";
import CallToActionBanner from "../components/CallToActionBanner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MediaChannels />
      <ReasonsToChooseUs />
      <LocationsList />
      <ChiropractorTeam />
      <Testimonial />
      <FAQAccordion />
      <CallToActionBanner />
      <Footer />
    </main>
  );
}
