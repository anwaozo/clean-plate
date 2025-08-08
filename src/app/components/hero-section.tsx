"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { heroSection } from "../../../cms-services/home";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  useEffect(() => {
    if (window) {
      console.log("hash", window.location.hash);
      if (window.location.hash.includes("invite_token")) {
        router.push(`/admin${window.location.hash}`);
      } else if (window.location.hash.includes("confirmation_token")) {
        router.push(`/admin${window.location.hash}`);
      }
    }
  });

  return (
    <section
      style={{ backgroundImage: "url('/hero-bg.png')" }}
      className=" h-full  pt-2 lg:pt-20 lg:h-[600px] xl:h-[750px] bg-no-repeat bg-cover bg-bottom overflow-hidden"
    >
      <div className=" max-w-[1400px] mx-auto  ">
        <div className="w-full lg:w-[800px] justify-start items-start px-4  ">
          <div className=" inset-0  backdrop-blur-[1px] z-10 py-20 text-center px-0">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-mealprep-orange" />
              <span className="text-white text-sm text center font-medium uppercase tracking-wider">
                Meal Prep Made Effortless
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bricolageG lg:text-5xl xl:text-6xl font-bold text-white  leading-tight mb-6">
              Fresh, Healthy Meals Delivered to Your Doorstep
            </h1>
            <p className="text-lg md:text-lg text-white max-w-3xl mb-8">
              Choose from a variety of chef-prepared, nutritionist-approved
              meals designed to fit your lifestyle. No stress, no cooking, just
              wholesome food made for you.
            </p>
            <div className="flex flex-col w-full sm:flex-row justify-center items-center gap-4">
              <Link href={"/browse-meals"}>
                <Button className="bg-primary w-full lg:w-[250px]  text-white px-8 py-5 text-md rounded-lg hover:bg-primary transition-colors">
                  Explore Meals
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button
                  variant="secondary"
                  className="bg-white w-full lg:w-[250px]  text-mealprep-orange px-8 py-5 text-md rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
