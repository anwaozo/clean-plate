"use client";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Copy, Gift } from "lucide-react";
import Link from "next/link";

export default function RewardsSection() {
  return (
    <section
      className="py-20 bg-white  bg-cover bg-no-repeat "
      style={{ backgroundImage: "url('/Loyalty point section.png')" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative bg-mealprep-orange rounded-2xl p-8 text-white overflow-hidden  min-h-[600px] flex flex-col justify-between">
          <Image
            src="/iPhone 12 PRO Mockup 1.png"
            alt="Rewards background"
            layout="fill"
            objectFit="cover"
            className=" "
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className=" rounded-3xl p-8 shadow-lg relative overflow-hidden">
            <Image
              src="/Column.png"
              alt="Abstract pattern"
              fill
              className="absolute "
            />

            <div className="relative z-10">
              <div className="bg-[#FFE63D] mb-2 inline-block p-1">
                <p className="text-xs text-[#5C3F2F]">EARN WHILE YOU EAT</p>
              </div>
              <h3 className="text-xl md:text-2xl font-bricolageG font-bold text-[#064E43] mb-4">
                Get rewarded every time you order. Earn loyalty points with
                every meal plan, redeem them for discounts, free meals, and
                exclusive perks.
              </h3>
              <form className="flex flex-col gap-4 mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#4B4B4B]/20 border-transparent rounded-lg px-4 py-3 text-mealprep-text-dark placeholder:text-[#4B4B4B] focus:ring-mealprep-orange focus:border-[#4B4B4B]"
                />
                <Button className="bg-[#064E43]  text-left text-white px-6 py-3 rounded-lg hover:bg-mealprep-orange/90 transition-colors flex items-left gap-2">
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-mealprep-text-light">
                By submitting, you agree to receive emails from Clean Plate.
                View our{" "}
                <Link href="#" className="underline text-mealprep-orange">
                  Privacy Policy
                </Link>{" "}
                and you can unsubscribe anytime.
              </p>
            </div>
          </div>
          <div className=" rounded-lg p-10 shadow-lg relative overflow-hidden">
            <Image
              src="/Frame 2087327324.png"
              alt="Abstract pattern"
              fill
              className="absolute "
            />

            <div className="relative  z-10">
              <h3 className="text-2xl md:text-4xl text-center font-bricolageG font-bold text-white ">
               Eat Better Without the Effort
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
