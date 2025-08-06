import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface ReusableInputProps {
  placeholder: string;
  icon: string;
  label?: string;
  type: string;
  alt: string;
}

const ReusableInput = ({
  placeholder,
  icon,
  label,
  type,
  alt,
}: ReusableInputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-[#212121]">
          {label}
          <span className="text-red-500 pl-0.5">*</span>
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Image src={icon} alt={alt} width={20} height={20} />
        </div>
        <Input
          type={type}
          placeholder={placeholder}
          className="pl-12 border-[#EEEEEE] shadow-none py-2 h-fit"
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <Image
              src={"/View_alt_fill.svg"}
              alt={"Eye icon"}
              width={20}
              height={20}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableInput;
