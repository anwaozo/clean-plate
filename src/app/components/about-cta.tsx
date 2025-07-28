import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ReadyToConnectSection } from "../../../cms-services/about";
const AboutCTA = () => {
  return (
    <section className="h-fit py-40 relative">
      <div
        className="absolute left-0 top-[120px] -translate-y-1/2"
        data-aos="fade-right"
      >
        <Image
          src={"/Cp.png"}
          alt="icon"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>

      <div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col justify-center items-center mt-20 space-y-6 relative z-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl lg:text-[32px] font-bold">
          {ReadyToConnectSection.heading}
        </h2>
        <p className="text-[26px]">{ReadyToConnectSection.subheading}</p>
        <Button className="bg-[#0A4B45] hover:bg-[#0A4B45] text-white px-6 py-3 rounded-[12px] text-sm h-fit">
          <Link
            className="flex items-center gap-2"
            href={ReadyToConnectSection.button.href}
            passHref
          >
            <span>{ReadyToConnectSection.button.label}</span>
          </Link>
        </Button>
      </div>

      <div
        className="hidden md:flex absolute right-0 top-[100px] -translate-y-1/2"
        data-aos="fade-left"
      >
        <Image
          src={"/Cp (1).png"}
          alt="icon"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutCTA;
