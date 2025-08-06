import Image from "next/image";
import React from "react";
import Footer from "./footer";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/Mask group.svg"}
          alt="Background"
          height={1000}
          width={1000}
          className="object-cover min-h-full min-w-full"
        />
      </div>
      <div className="absolute inset-0 z-10">
        <Image
          src={"/Noise & Texture.svg"}
          alt="Texture"
          height={1000}
          width={1000}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default SectionWrapper;
