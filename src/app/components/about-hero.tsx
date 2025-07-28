import React from "react";
import Image from "next/image";
import { AboutHero as hero } from "../../../cms-services/about"; // Adjust the import path as necessary
const AboutHero = () => {
  return (
    <section className="bg-[#ECEBE9]">
      <div className="relative max-w-[1400px] mx-auto py-16 overflow-hidden md:pb-56">
        {/* First image (bottom layer) */}
        <div className="relative z-0 max-w-[800px] mx-auto" data-aos="fade-up">
          <Image
            src={hero.Imagetext.src}
            alt={hero.Imagetext.alt}
            width={800}
            height={572}
            className="object-cover w-full"
          />
        </div>
        {/* Second image (top layer) */}
        <div
          className="absolute
        top-1/3 right-4
        md:top-1/4 md:right-16
        lg:top-1/4 lg:right-48
        xl:top-1/4 xl:right-68
        z-10
        w-[100%] md:w-[800px]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src={hero.featuredImage.src}
            alt={hero.featuredImage.alt}
            width={695}
            height={695}
            className="object-cover w-full"
          />
        </div>
        <div
          className="absolute
        top-1/4 right-0
        md:top-1/3 md:right-4
        lg:top-1/3 lg:right-16
        xl:top-1/3 xl:right-48
        
        w-[30%] md:w-[100px]"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <Image
            src={hero.brandImage.src}
            alt={hero.brandImage.alt}
            width={129}
            height={129}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
