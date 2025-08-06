import React from "react";
import { subscriptionPlans } from "@/lib/data";
import SubscriptionPlanCard from "./subscription-plan-card";
import Image from "next/image";

const metrics = [
  {
    text: "Flexible meal swaps",
    icon: "/Status.png",
  },
  {
    text: "Pause, cancel, or change anytime",
    icon: "/Stop_light.png",
  },
  {
    text: "Access to loyalty rewards",
    icon: "/lightning_alt_light.png",
  },
];

const Subscriptions = () => {
  return (
    <div className="font-sans">
      <div className="max-w-[670px] mx-auto px-4 pt-16 pb-6 text-center text-[#212121] space-y-2">
        <h2 className="font-semibold text-2xl lg:text-[40px] leading-10 font-bricolageG">
          Pick a Meal Plan That Works for You
        </h2>
        <p className="text-lg">
          Choose how many freshly prepared meals you’d like each week. Earn
          loyalty points with every order, and enjoy healthy meals delivered
          when you need them.
        </p>
      </div>
      <div className="bg-[#F8F7F2] py-8 px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 w-full ">
          {subscriptionPlans.map((plan) => (
            <div className="lg:max-w-[450px] w-full" key={plan.name}>
              <SubscriptionPlanCard plan={plan} />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-10 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={metric.icon}
                alt={metric.text}
                width={20}
                height={20}
              />
              <span>{metric.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
