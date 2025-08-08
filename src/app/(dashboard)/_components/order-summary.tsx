import React from "react";
import Image from "next/image";
import { Calendar, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  const meals = [
    {
      id: 1,
      name: "BBQ Ranch Chicken Flatbreads",
      delivery: "Every Tuesday - 12:15pm",
      image: "/Frame 126 (1).png",
    },
    {
      id: 2,
      name: "Spicy Tofu Stir-Fry",
      delivery: "Every Wednesday - 12:15pm",
      image: "/Frame 126 (2).png",
    },
    {
      id: 3,
      name: "Fried pork cutlet curry with rice",
      delivery: "Every Thursday - 12:15pm",
      image: "/Frame 126 (3).png",
    },
  ];

  return (
    <div className="bg-white rounded-lg py-6 px-2 md:px-6 shadow-sm border-2 border-dashed border-[#EEEEEE]">
      <h2 className="text-2xl lg:3xl font-semibold mb-6 font-bricolageG ">
        Order Summary
      </h2>

      <div className="mb-6 font-dmSans">
        <div className="flex flex-wrap items-center gap-4 text-base text-[#4B4B4B] mb-4">
          <span>
            <strong>Plan:</strong> Standard Plan, Recurring
          </span>
          <span>
            <strong>Meals Selected:</strong> 3
          </span>
        </div>

        <hr className="py-2 border-t border-[#EEEEEE]" />

        <div className="flex items-center justify-between p-4 border border-[#EEEEEE] rounded-lg text-[#212121]">
          <span className="text-sm">One-time</span>
          <div className="relative">
            <div className="w-12 h-6 bg-[#FE7438] rounded-full shadow-inner relative flex items-center justify-end pr-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-sm">Recurring</span>
        </div>
      </div>

      <div className="mb-6">
        <Button
          variant="outline"
          className="w-full justify-start text-[#878787] py-2 h-fit shadow-none"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Select a start date
        </Button>
      </div>

      <div className="space-y-4 mb-6">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="flex items-center gap-4 rounded-lg text-[#4B4B4B]"
          >
            <div className="max-w-[92px] max-h-[150px] rounded-lg flex-shrink-0">
              <Image
                src={meal.image}
                alt={meal.name}
                width={92}
                height={70}
                className="rounded-lg object-cover h-[150px] min-[375px]:h-[120px] min-[400px]:h-fit"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm md:text-base mb-1">
                {meal.name}
              </h3>
              <div className="min-[400px]:flex min-[400px]:items-center flex-col min-[400px]:flex-row min-[400px]:justify-between">
                <p className="text-sm text-[#4B4B4B]">Delivery</p>
                <Button
                  variant="ghost"
                  className="text-sm font-dmSans hidden lg:flex underline hover:bg-transparent p-0"
                >
                  <Image
                    src={"/Edit_duotone_line (1).png"}
                    alt="pen icon"
                    width={24}
                    height={24}
                  />
                  Change Meal
                </Button>
              </div>
              <p className="font-bold text-xs text-[#4B4B4B]">
                {meal.delivery}
              </p>
                <Button
                  variant="ghost"
                  className="text-sm font-dmSans flex lg:hidden bunderline hover:bg-transparent p-0"
                >
                  <Image
                    src={"/Edit_duotone_line (1).png"}
                    alt="pen icon"
                    width={24}
                    height={24}
                  />
                  Change Meal
                </Button>

            </div>
          </div>
        ))}
      </div>

      <hr className="py-2 border-t border-[#EEEEEE]" />

      <div className="space-y-2 mb-6 border border-[#EEEEEE] px-4 py-3 rounded-lg text-[#4B4B4B] text-base">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal:</span>
          <span className="">$87.00</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Delivery fee:</span>
          <span>$3.09</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Discount:</span>
          <span>-$3.09 (20%)</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Total:</span>
          <span>$87.00</span>
        </div>
      </div>

      <div className="text-[#4B4B4B] text-sm">
        <h4 className="font-semibold text-base">Cancellation Policy</h4>
        <p>
          You may pause, skip, or cancel your subscription at any time before
          the weekly cut-off for meal selection and delivery scheduling.
        </p>
        <p>
          Cancellations made after the cut-off time will apply from the
          following week.
        </p>
        <p className="mt-4">
          For full details, see our{" "}
          <span className="text-[#FE7438] underline">
            Cancellation & Refund Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
