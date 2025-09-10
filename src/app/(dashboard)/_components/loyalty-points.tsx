import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LoyaltyPointsPage = () => {
  const historyData = [
    {
      date: "14/04/2025",
      description: "Loyalty points earned - Order 102",
      points: "+20",
    },
    {
      date: "14/04/2025",
      description: "Loyalty points earned - Order 102",
      points: "+20",
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto  space-y-8 border-2 border-dashed border-[#EEEEEE] rounded-[10px]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-[10px] p-4 md:p-6">
        <div className="bg-[#F89E32] rounded-2xl p-6 text-white min-w-[280px] lg:w-[320px] flex flex-col justify-center">
          <h2 className="text-base mb-4 tracking-wider">AVAILABLE POINTS</h2>
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-[10px] flex items-center justify-center">
              <Image
                src="/icons/crown.png"
                alt="Crown"
                width={24}
                height={24}
                className=""
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl lg:text-5xl font-semibold font-bricolageG">
                90
              </span>
              <span className="text-sm">= $9</span>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="h-[200px] bg-[#E1E1E1] mx-1 hidden lg:block"
        />
        <div className="flex-1">
          <div className="flex flex-col items-start gap-4">
            <div className="">
              <Image
                src="/icons/gift_alt_fill.png"
                alt="Gift icon"
                width={24}
                height={24}
                className=""
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                Refer your friends and earn 800 points
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Every time one of your friends users your code when purchasing
                he gets 1000 points and you get 1000 points.
              </p>

              <div className="flex  items-center gap-2 bg-[#FAFAFA] rounded-[10px] px-5 py-2.5 border border-dashed border-[#CACACA] w-fit">
                <span className="text-lg text-[#4B4B4B] tracking-wider">
                  F F M P L 6
                </span>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  <Image
                    src="/icons/Copy_light.png"
                    alt="Copy icon"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 bg-white p-4 md:p-6 text-[#4B4B4B]">
        <h2 className="text-lg font-semibold">History</h2>

        <div className="space-y-4">
          {historyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4"
            >
              <div className="space-y-1">
                <p className="text-base">{item.date}</p>
                <p className="text-base">{item.description}</p>
              </div>
              <div className="text-[#00CE6E] font-semibold text-lg sm:text-right">
                {item.points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyPointsPage;
