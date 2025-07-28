import Image from "next/image";
import React from "react";
import { introSection } from "../../../cms-services/listing";
const ListingsHero = () => {
  return (
    <section className="relative  h-[600px]  overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/image (18).png"
          alt="Modern kitchen interior"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-full flex items-end justify-center text-center text-white pb-12">
        <div className="max-w-[778px] px-6 space-y-8">
          <h1 className="text-4xl lg:text-[56px] font-bold mb-4">
            {introSection.heading}
          </h1>
          <p className="text-base opacity-90">{introSection.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ListingsHero;
