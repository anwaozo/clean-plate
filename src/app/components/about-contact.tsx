import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactSection } from "../../../cms-services/about"; // Adjust the import path as necessary
const AboutContact = () => {
  return (
    <section className="max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 xl:gap-28 py-12">
        <div className="w-full h-full" data-aos="fade-right">
          <Image
            src={ContactSection.image.src}
            alt={ContactSection.image.alt}
            width={638}
            height={650}
            className=""
          />
        </div>
        <div
          className="w-full lg:max-w-[538px] xl:max-w-[638px] mx-auto p-4 lg:p-10 space-y-8"
          data-aos="fade-left"
        >
          <h2 className="text-[32px] font-bold mb-4">{ContactSection.quote}</h2>
          {/* <p>
          Keep going with determination and passion. With a sharp eye for value and a fearless approach
          to negotiation, Catherine is dedicated to securing the best outcomes
          for every client she represents.
        </p> */}
          <Link
            href={ContactSection.link.href}
            className="flex items-center gap-2 border-b pb-2 w-fit border-black"
          >
            {ContactSection.link.label}
            <Image
              src={"/guidance_right-arrow.png"}
              alt="arrow right"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
