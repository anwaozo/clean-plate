import { Check, ChevronRight, Dot } from "lucide-react";
import React from "react";

const CheckoutBreadcrumb = () => {
  return (
    <>
      <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-[#4B4B4B] py-6 font-sans">
        <span>Meal Prep</span>
        <ChevronRight className="w-4 h-4" />
        <span>Standard Plan</span>
        <ChevronRight className="w-4 h-4" />
        <span className="">Checkout</span>
      </div>
      <hr className="py-2 border-t border-[#E1E1E1]" />
      <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#FE7438] text-white rounded-full flex items-center justify-center text-sm">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className="ml-2 text-sm text-[#4B4B4B]">
            Personal Information
          </span>
        </div>
        <div className="w-24 h-px bg-[#FE7438]"></div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#F1BC9F]/40 rounded-full flex items-center justify-center text-sm">
            <Dot className=" text-[#F1BC9F]" />
          </div>
          <span className="ml-2 text-sm text-[#4B4B4B]">Checkout</span>
        </div>
        <div className="w-24 h-px bg-[#FE7438]"></div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-[#CACACA]/40 rounded-full flex items-center justify-center text-sm">
            <Dot className=" text-[#CACACA]" />
          </div>
          <span className="ml-2 text-sm text-[#4B4B4B]">Make Payment</span>
        </div>
      </div>
    </>
  );
};

export default CheckoutBreadcrumb;
