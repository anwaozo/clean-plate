import React from "react";
import MealImage from "./meal-image";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TabsSection from "./tabs-section";
import { MealProps } from "@/lib/type";

const MealDetail = ({
  image,
  alt,
  badges,
  title,
  time,
  nutrition,
  calories,
  protein,
  carbs,
  fat,
  fullDescription,
  ingredients,
  nutritionFacts,
  instructions,
  allergents,
  reviews,
}: MealProps) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row py-4 gap-6 px-2 md:lg-6 border-2 border-dashed border-[#EEEEEE] bg-white">
        <MealImage image={image} alt={alt} />
        <div className="space-y-2 max-w-[640px]">
          <div className="flex flex-wrap gap-2 mb-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                className={`${badge.color} text-xs font-medium px-5 py-0 m rounded-lg`}
              >
                <div className="flex justify-center items-center gap-1 shadow-sm">
                  {badge.text}{" "}
                  {badge.text === "Contains Allergen" && (
                    <Info className="w-[11px]" />
                  )}
                </div>
              </Badge>
            ))}
          </div>
          <p className="font-semibold text-xl md:text-2xl lg:text-[32px]">
            {title}
          </p>
          <p>{fullDescription}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Image
                src={"/Clock_light.svg"}
                alt="Clock icon"
                height={20}
                width={20}
              />
              <span className="text-sm text-[#4B4B4B]">{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/burger_light.svg"}
                alt="Burger icon"
                height={20}
                width={20}
              />
              <span className="text-sm text-[#4B4B4B]">{nutrition}</span>
            </div>
          </div>
          <div className="flex min-[375px]:items-center flex-col min-[375px]:flex-row gap-4">
            <Button
              variant={"outline"}
              className="flex items-center border-[#2A8449] px-[16px] py-[10px] h-fit rounded-[10px]  hover:bg-transparent"
            >
              <div className="border border-[#878787] w-5 h-5 lg:w-[26px] lg:h-[26px] flex justify-center items-center rounded-[4px] text-[#878787] text-2xl font-normal">
                -
              </div>
              <span className="mx-4 lg:mx-[24px]">1</span>
              <span className="border border-[#878787]  w-[26px] h-[26px] flex justify-center items-center rounded-[4px] text-[#878787] text-2xl font-normal">
                +
              </span>
            </Button>
            <Button className=" bg-[#2A8449] px-[40px] py-[13.5px] h-fit text-white hover:bg-green-button/90 rounded-lg">
              Add to cart
            </Button>
          </div>
          <div className="border-t border-[#EEEEEE] pt-[14px] mt-4">
            <TabsSection
              calories={calories}
              protein={protein}
              carbs={carbs}
              fat={fat}
              ingredients={ingredients}
              nutritionFacts={nutritionFacts}
              instructions={instructions}
              allergents={allergents}
              reviews={reviews}
            />
          </div>
          <div className="flex items-start gap-2 border border-[#E1E1E1] p-[8px] rounded-[4px]">
            <Info className="w-[24px] h-[24px] text-[#878787]" />
            <p className="text-sm text-[#212121] italic">
              We work hard to keep the information on this website up-to-date,
              but please check the label on your product for the most accurate
              nutritional information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
