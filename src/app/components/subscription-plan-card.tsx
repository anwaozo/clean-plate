"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { SubscriptionPlanCardProps } from "@/lib/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SubscriptionPlanCard = ({
  plan,
}: {
  plan: SubscriptionPlanCardProps;
}) => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white border-2 border-dashed border-[#EEEEEE] text-[#4B4B4B] px-4 lg:px-6 py-6  rounded-lg shadow-md`">
      <p className="font-semibold text-lg leading-8">{plan.name}</p>
      <p className="font-bold text-base italic leading-8">
        {plan.frequency} meals per week
      </p>
      <p className="">{plan.description}</p>

      <Button
        onClick={() =>
          router.push(
            `/subscriptions/${plan.name.replace(/\s+/g, "-").toLowerCase()}`
          )
        }
        className="mt-12 leading-0 bg-primary text-white px-6 py-6 text-md hover:bg-mealprep-orange/90 transition-colors flex flex-col items-center justify-center gap-0"
      >
        Select Plan & Choose Meals
        {plan.discount && (
          <p className="text-xs leading-0">Save {plan.discount}</p>
        )}
      </Button>

      <div className="flex items-center gap-2 mt-8 text-sm text-[#4B4B4B]">
        <Image
          src={"/medal_icon.png"}
          alt="Medal Icon"
          width={19}
          height={27}
        />
        <span>20 loyalty point on orders over $50</span>
      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
2;
