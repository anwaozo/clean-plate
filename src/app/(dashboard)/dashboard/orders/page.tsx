"use client";
import React from "react";
import Title from "../../_components/title";
import ReusableTabs from "../../_components/reusable-tabs";
import OrderCard from "../../_components/order-card";

const processingOrders = [
  {
    orderNumber: "ORDER 102",
    itemCount: 2,
    status: "Processing",
    statusColor: "orange" as const,
    orderedDate: "8/8/2025",
    lastUpdated: "3 mins ago",
    orderStatuses: [
      { label: "Confirmed", isActive: false, isCompleted: true },
      { label: "Preparing", isActive: true, isCompleted: false },
      { label: "Picked up", isActive: false, isCompleted: false },
      { label: "On the way", isActive: false, isCompleted: false },
      { label: "Delivered", isActive: false, isCompleted: false },
    ],
  },
  {
    orderNumber: "ORDER 104",
    itemCount: 2,
    status: "Processing",
    statusColor: "orange" as const,
    orderedDate: "8/8/2025",
    lastUpdated: "3 mins ago",
    orderStatuses: [
      { label: "Confirmed", isActive: false, isCompleted: true },
      { label: "Preparing", isActive: true, isCompleted: false },
      { label: "Picked up", isActive: false, isCompleted: false },
      { label: "On the way", isActive: false, isCompleted: false },
      { label: "Delivered", isActive: false, isCompleted: false },
    ],
  },
];

const deliveredOrders = [
  {
    orderNumber: "ORDER 102",
    itemCount: 2,
    status: "Delivered",
    statusColor: "green" as const,
    orderedDate: "8/8/2025",
    lastUpdated: "8/8/2025",
    orderStatuses: [
      { label: "Confirmed", isActive: false, isCompleted: true },
      { label: "Preparing", isActive: false, isCompleted: true },
      { label: "Picked up", isActive: false, isCompleted: true },
      { label: "On the way", isActive: false, isCompleted: true },
      { label: "Delivered", isActive: true, isCompleted: true },
    ],
  },
];

const canceledOrders = [
  {
    orderNumber: "ORDER 102",
    itemCount: 2,
    status: "Canceled",
    statusColor: "red" as const,
    orderedDate: "8/8/2025",
    lastUpdated: "24 days ago",
    orderStatuses: [
      { label: "Confirmed", isActive: false, isCompleted: true },
      { label: "Preparing", isActive: false, isCompleted: false },
      { label: "Canceled", isActive: true, isCompleted: false },
    ],
  },
];

const tabsData = [
  {
    label: "Processing",
    content: (
      <div className="space-y-4">
        {processingOrders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    ),
  },
  {
    label: "Delivered",
    content: (
      <div className="space-y-4">
        {deliveredOrders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    ),
  },
  {
    label: "Canceled",
    content: (
      <div className="space-y-4">
        {canceledOrders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    ),
  },
];

const tabs = ["Processing", "Delivered", "Canceled"];

const page = () => {
  return (
    <div>
      <Title text="My Orders" />
      <div className="flex gap-6 bg-[#F8F7F2]">
        <ReusableTabs tabs={tabs} tabsData={tabsData} />
      </div>
    </div>
  );
};

export default page;
