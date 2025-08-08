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

const page = () => {
  return (
    <SectionWrapper>
      <div className=" h-[100%] lg:h-[100vh] flex flex-col lg:items-center lg:justify-center  px-4 lg:px-2 py-6 ">
        <div className="bg-white rounded-lg px-6 py-8 shadow-2xl max-w-lg w-full space-y-10 ">
          <Title
            title="Create new account"
            text="Already have an account?"
            href="/sign-in"
           
            hrefText="Sign in"
          />
          <div>
            <div className="w-full space-y-6 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ReusableInput
                  placeholder="Enter your name"
                  icon="/User_cicrle_light.svg"
                  label="Full Name"
                  type="text"
                  alt="Name Icon"
                />
                <ReusableInput
                  placeholder="Enter your email"
                  icon="/Message_open_light.svg"
                  label="Email"
                  type="email"
                  alt="Email Icon"
                />
              </div>
              <ReusableInput
                placeholder="Enter your number"
                icon="/Phone_light.svg"
                label="Phone Number"
                type="tel"
                alt="Phone Icon"
              />
              <ReusableInput
                placeholder="Enter your password"
                icon="/Lock_light.svg"
                label="Password"
                type="password"
                alt="Password Icon"
              />
            </div>

            <div className="w-full flex items-center mt-4">
              <Input className="h-5 w-5" type="checkbox" id="terms" />
              <label htmlFor="terms" className="ml-2 text-sm text-[#212121]">
                I agree with Terms and Conditions
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <ReusableButton text="Create my account" />
            <Button className="bg-transparent text-[#212121] w-full border border-[#EEEEEE] p-2 h-fit shadow-none">
              <Image
                src={"/Google logo.svg"}
                alt="google icon"
                width={24}
                height={24}
              />
              Continue with Google <ChevronRight />
            </Button>
            <p className="text-center text-sm text-[#212121]">
              Get trouble signing up?{" "}
              <Link href={"/#"} className="underline text-[#4B4B4B]">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
