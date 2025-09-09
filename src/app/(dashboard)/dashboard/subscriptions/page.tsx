"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Title from "../../_components/title";
import ReusableTabs from "../../_components/reusable-tabs";
import SubscriptionCard from "../../_components/subscription-card";
import {
  processingSubscriptions,
  activeSubscriptions,
  pausedSubscriptions,
  canceledSubscriptions,
} from "@/lib/data";

const page = () => {
  const router = useRouter();

  const handleEditSubscription = () => {
    router.push(`/edit-subscription`);
  };

  const tabsData = [
    {
      label: "Processing",
      content: (
        <div className="space-y-4">
          {processingSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              {...subscription}
              onEditClick={handleEditSubscription}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Active",
      content: (
        <div className="space-y-4">
          {activeSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              {...subscription}
              onEditClick={handleEditSubscription}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Paused",
      content: (
        <div className="space-y-4">
          {pausedSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              {...subscription}
              onEditClick={handleEditSubscription}
            />
          ))}
        </div>
      ),
    },
    {
      label: "Canceled",
      content: (
        <div className="space-y-4">
          {canceledSubscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              {...subscription}
              onEditClick={handleEditSubscription}
            />
          ))}
        </div>
      ),
    },
  ];

  const tabs = ["Processing", "Active", "Paused", "Canceled"];

  return (
    <div>
      <Title text="My Subscription" />
      <div className="bg-[#F8F7F2]">
        <ReusableTabs tabs={tabs} tabsData={tabsData} />
      </div>
    </div>
  );
};

export default page;
