import Image from "next/image";
import React from "react";
import { platforms } from "../../../cms-services/about"; // Adjust the import path as necessary

const AboutPlatforms = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 lg:px-0 py-12">
      <div>
        <h2 className="text-center text-[26px] mb-6" data-aos="fade-up">
          AS SEEN ON
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 p-8">
          {platforms.map((platform: { src: string }, index: number) => (
            <Image
              key={index}
              src={platform.src}
              height={55}
              width={400}
              alt={`Platform logo ${index + 1}`}
              className="w-fit h-fit object-contain"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlatforms;
