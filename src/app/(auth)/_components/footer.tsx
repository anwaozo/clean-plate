import { BrandLogoWhite } from "@/app/components/layouts/logo";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#5C3F2F]">
      <div className="max-w-[1140px] mx-auto flex flex-row items-center gap-4 md:items-center justify-between py-6 px-4 lg:px-0">
        <BrandLogoWhite size="sm"/>
        <p className="text-white text-xs lg:text-sm">
          Copyright &copy;{new Date().getFullYear()} Mealprep.co
        </p>
      </div>
    </div>
  );
};

export default Footer;
