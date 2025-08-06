import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReusableInput from "../_components/reusable-input";
import SectionWrapper from "../_components/section-wrapper";
import { Input } from "@/components/ui/input";
import ReusableButton from "../_components/reusable-button";
import { Button } from "@/components/ui/button";
import { ChevronRight, List } from "lucide-react";
import Title from "../_components/title";

const inputData = [
  {
    placeholder: "Enter your email",
    icon: "/Message_open_light.svg",
    label: "Email",
    type: "email",
    alt: "Email Icon",
  },
  {
    placeholder: "Create your password",
    icon: "/Lock_light.svg",
    label: "New Password",
    type: "password",
    alt: "Password Icon",
  },
  {
    placeholder: "Re-enter your password",
    icon: "/Lock_light.svg",
    label: "Confirm Password",
    type: "password",
    alt: "Password Icon",
  },
];

const page = () => {
  return (
    <SectionWrapper>
      <div className="h-[100vh] flex flex-col items-center justify-center px-4 lg:px-6 py-12 ">
        <div className="bg-white rounded-lg px-6 py-8 shadow-lg max-w-lg w-full space-y-10 h-fit ">
          <Title
            title="Forgot password"
            text="Enter your email and set a new password to continue."
            href=""
            hrefText=""
          />
          <div>
            <div className="w-full space-y-6 font-bricolageG">
              {inputData.map((input, index) => (
                <ReusableInput
                  key={index}
                  placeholder={input.placeholder}
                  icon={input.icon}
                  label={input.label}
                  type={input.type}
                  alt={input.alt}
                />
              ))}
            </div>

            <div className="w-full mt-6">
              <ul className="list-disc  pl-5 text-[#212121] text-sm  marker:text-[#CACACA]">
                <li className="marker:text-[#CACACA]">Minimum 8 characters</li>
                <li className="marker:text-[#CACACA]">
                  At least one uppercase letter
                </li>
                <li className="marker:text-[#CACACA]">At least one number</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <ReusableButton text="Continue" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
