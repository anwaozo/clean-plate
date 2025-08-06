import React from "react";
import SectionWrapper from "./section-wrapper";
import Title from "./title";
import { Input } from "@/components/ui/input";
import ReusableButton from "./reusable-button";
import Link from "next/link";

const Verify = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => {
  return (
    <SectionWrapper>
      <div className="h-full flex flex-col items-center justify-center px-4 lg:px-6 py-6 font-sans">
        <div className="bg-white rounded-lg px-6 py-8 shadow-2xl max-w-md w-full space-y-6">
          <Title
            title={title}
            text="We've sent a 6-digit verification code to your email address. Enter it below to confirm your account. Code expires in 5 minutes."
            href=""
            hrefText=""
          />

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#212121] mb-3">
                Enter Verification Code <span className="text-red-500">*</span>
              </label>

              <div className="flex gap-3 justify-center">
                {[...Array(6)].map((_, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="p-4 h-fit text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>
            </div>

            <ReusableButton text={buttonText} />

            <p className="text-center text-sm text-[#212121]">
              Didn't get the code?
              <Link href={"/#"} className="underline text-[#4B4B4B]">
                Resend code
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Verify;
