import Image from "next/image";
import React from "react";
import { AboutQuote as quote } from "../../../cms-services/about"; // Adjust the import path as necessary
const AboutQuote = () => {
  return (
    <section className="relative py-60 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={quote.backgroundImage.src}
          alt={quote.backgroundImage.alt}
          fill
          className="object-cover fixed-background"
          style={{ backgroundAttachment: "fixed" }}
        />
        {/* <div className="absolute inset-0"></div> */}
      </div>
      <div
        className="relative max-w-6xl mx-auto px-6 text-center"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center mb-4">
          <Image
            src={"/quote.png"}
            alt="quote icon"
            width={80}
            height={50}
            className="h-fit w-fit"
            data-aos="zoom-in"
          />
        </div>
        <blockquote
          className="text-2xl lg:text-4xl font-bold text-white leading-10 mb-8"
          style={{ lineHeight: "1.6" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {quote.quote}
        </blockquote>
      </div>
    </section>
  );
};

export default AboutQuote;
