import BrandLogo from "@/app/components/layouts/logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReusableInput from "../_components/reusable-input";
import SectionWrapper from "../_components/section-wrapper";
import { Input } from "@/components/ui/input";
import ReusableButton from "../_components/reusable-button";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
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
    placeholder: "Enter your password",
    icon: "/Lock_light.svg",
    label: "Password",
    type: "password",
    alt: "Password Icon",
  },
];

const page = () => {
  return (
    <SectionWrapper>
      <div className="h-full flex flex-col items-center justify-center px-4 lg:px-6 py-12 font-sans">
        <div className="bg-white rounded-lg px-6 py-8 shadow-lg max-w-lg w-full space-y-8 h-fit ">
          <Title
            title="Sign in"
            text="Don't have an account yet?"
            href="/sign-up"
            hrefText="Register here"
          />
          <div>
            <div className="w-full space-y-4 font-sans">
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

            <div className="w-full flex items-center justify-between mt-4">
              <div className="flex items-center">
                <Input className="h-5 w-5" type="checkbox" id="remember-me" />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-[#212121]"
                >
                  Remember me
                </label>
              </div>
              <Link
                href={"/forgot-password"}
                className="pl-2 text-[#4B4B4B] underline text-sm"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <ReusableButton text="Login" />
            <Button className="bg-transparent text-[#212121] w-full border border-[#EEEEEE] p-3 h-fit shadow-none">
              <Image
                src={"/Google logo.svg"}
                alt="google icon"
                width={24}
                height={24}
              />
              Continue with Google <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
