import React from "react";
import ReusableInput from "../_components/reusable-input";
import SectionWrapper from "../_components/section-wrapper";
import ReusableButton from "../_components/reusable-button";
import Title from "../_components/title";

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
              <ReusableInput
                placeholder="Enter your email"
                icon="/Message_open_light.svg"
                label="Email"
                type="email"
                alt="Email Icon"
              />
              <ReusableInput
                placeholder="Create your password"
                icon="/Lock_light.svg"
                label="New Password"
                type="password"
                alt="Password Icon"
              />
              <ReusableInput
                placeholder="Re-enter your password"
                icon="/Lock_light.svg"
                label="Confirm Password"
                type="password"
                alt="Password Icon"
              />
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
