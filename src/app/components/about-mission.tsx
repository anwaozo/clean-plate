import Image from "next/image";
import React from "react";
import { AboutMission as data } from "../../../cms-services/about"; // Adjust the import path as necessary

const AboutMission = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-6 py-20">
      <div className="flex justify-center items-center relative">
        {/* Left Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="hidden md:flex relative z-10 -mr-16 w-[280px] md:w-[392px] mt-24"
        >
          <Image
            src={data.leftImage.src}
            alt={data.leftImage.alt}
            width={300}
            height={400}
            className="rounded-md object-cover w-full h-[453px] shadow-lg"
          />
        </div>

        {/* Middle Image */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="relative z-0 w-[380px] md:w-[560px]"
        >
          <Image
            src={data.middleImage.src}
            alt={data.middleImage.alt}
            width={520}
            height={620}
            className="rounded-md object-cover w-full h-[700px]"
          />
        </div>

        {/* Right Card */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="hidden lg:flex flex-col relative z-10 -ml-16 max-w-[300px] md:max-w-[426px] md:max-h-[548px] h-full bg-white p-6 shadow-lg rounded-md text-center space-y-8 mb-12"
        >
          <h2
          className="text-[#F25A27] font-tiempos text-xl md:text-2xl font-bold leading-tight "
          >
            {data.rightCard.heading}
          </h2>
          {data.rightCard.paragraphs.map((p: string, idx: number) => (
            <p className="text-base" key={idx}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
