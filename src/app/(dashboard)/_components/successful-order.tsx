import ReusableButton from "@/app/(auth)/_components/reusable-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Meal {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface SuccessfulOrderProps {
  meals: Meal[];
}

const SuccessfulOrder = ({ meals }: SuccessfulOrderProps) => {
  return (
    <div className="max-w-[1000px] mx-auto text-center bg-white border-2 border-dashed border-[#EEEEEE] rounded-lg py-8 px-4 md:px-8 ">
      <div className="flex justify-center mb-2">
        <Image
          src="/Checked - Micro Interaction 012 1.png"
          alt="Success Icon"
          width={168}
          height={166}
        />
      </div>

      <h1 className="text-[32px] font-semibold text-[#212121] font-bricolageG mb-6">
        Order Confirmed!
      </h1>

      <p className="text-[#212121] text-base leading-relaxed mb-8">
        Your meal plan is locked in and your fresh, chef-prepared meals will be
        processed on selected days, please ensure someone is available to
        receive your delivery or leave special instructions in your account
        settings.
      </p>

      <div className="mb-10 inline-flex flex-col md:flex-row items-center md:items-center gap-0">
        <div className="inline-flex items-center">
          <Image
            src={"/medal_icon.png"}
            alt="Medal Icon"
            width={19}
            height={27}
          />
          <p className="text-[#4B4B4B]">
            You've earned ⭐ 20 points with this order.
          </p>
        </div>
        <Link href={"#"} className="pl-2 underline">
          See my points
        </Link>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          className="w-full px-4 py-2 h-fit font-semibold text-base shadow-none border-[#CACACA]"
        >
          Explore Meals
        </Button>
        <Button
          className="w-full shadow-none hover:bg-mealprep-orange/90 px-4 py-2 h-fit font-semibold text-base"
          type="submit"
        >
          View My Meals
        </Button>
      </div>

      <Separator className="my-6" />

      <div className="py-4 space-y-4">
        <h2 className="text-2xl font-semibold text-[#212121] font-bricolageG text-center">
          You might also like
        </h2>

        <div className="space-y-6">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="flex items-start gap-4 bg-white rounded-lg"
            >
              <div className=" rounded-lg flex-shrink-0">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  width={92}
                  height={70}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-1 text-[#4B4B4B]">
                <h3 className="text-left text-sm md:text-base lg:text-lg font-semibold">
                  {meal.name}
                </h3>
                <p className="hidden md:block text-left text-sm leading-relaxed">
                  {meal.description}
                </p>
                <p className="block md:hidden text-left text-sm leading-relaxed">
                  {meal.description.split(" ").slice(0, 10).join(" ")}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrder;
