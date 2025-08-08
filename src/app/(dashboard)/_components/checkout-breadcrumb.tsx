import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CheckoutBreadcrumb = () => {
  return (
    <>
      <div className="flex items-center justify-center space-x-2 text-xs md:text-sm   py-6">
        <span className="text-bold">Meal Prep</span>
        <ChevronRight className="w-4 h-4" />
        <span>Standard Plan</span>
        <ChevronRight className="w-4 h-4" />
        <span>Checkout</span>
      </div>
      <hr className=" border-t border-[#E1E1E1]" />

      <div className="flex items-center  border-b border-[#E1E1E1] justify-start md:justify-center gap-4 overflow-x-auto scrollbar-hide py-4 px-4">
        <div className="flex items-center flex-shrink-0">
          <div className="w-6 h-6">
            <Image
              src={"/icons/Check_fill.png"}
              alt="check icon"
              width={24}
              height={24}
            />
          </div>
          <span className="ml-2 text-xs md:text-sm text-[#4B4B4B] whitespace-nowrap">
            Personal Information
          </span>
        </div>

        <div className="w-5  lg:w-24 h-px bg-[#FE7438] flex-shrink-0"></div>

        <div className="flex items-center flex-shrink-0">
          <div className="w-6 h-6">
            <Image
              src={"/icons/cd_01.png"}
              alt="dot icon"
              width={24}
              height={24}
            />
          </div>
          <span className="ml-2 text-xs md:text-sm text-[#4B4B4B] whitespace-nowrap">
            Checkout
          </span>
        </div>

        <div className="w-5  lg:w-24 h-px bg-[#FE7438] flex-shrink-0"></div>

        <div className="flex items-center flex-shrink-0">
          <div className="w-6 h-6">
            <Image
              src={"/icons/cd.png"}
              alt="dot icon"
              width={24}
              height={24}
            />
          </div>
          <span className="ml-2 text-xs md:text-sm text-[#CACACA] whitespace-nowrap">
            Make Payment
          </span>
        </div>
      </div>
    </>
  );
};

export default CheckoutBreadcrumb;
