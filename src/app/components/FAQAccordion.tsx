"use client";

import React, { useState } from "react";
import Image from "next/image";
import faq from '../../../public/FAQFeaturedImage.svg'
import { faqs } from '../constant'

const FAQAccordionWithImage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-row">
      <div className="flex flex-col w-full md:w-2/3 p-0 md:p-8">
        <div className="mb-8">
          <h2 className="red-text-color work-sans-medium text-xl uppercase">
            Frequently Asked Questions
          </h2>
          <h3 className="text-4xl work-sans-bold mb-8">Your Questions, Answered</h3>
          <p className="text-gray-700">
            Everything you need to know about Arrowhead Clinic. Can’t find the
            answer you’re looking for?{" "}
            <a href="tel:800-961-3130" className="text-red-600 font-medium underline">
              Contact Us Now!
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="font-medium text-lg text-gray-900">
                    {faq.question}
                  </h4>
                  <span className="text-red-600 text-xl font-bold">
                    {activeIndex === index ? "✕" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:w-1/3 md:flex md:items-center">
          <Image
            src={faq}
            alt="Frequently Asked Questions"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
      </div>
    </div>
  );
};

export default FAQAccordionWithImage;
