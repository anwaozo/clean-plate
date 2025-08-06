import DeliveryDetailsModal from "@/app/components/delivery-details-modal";
import MealsList from "@/app/components/meals-list";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  //   console.log("slug:", slug.replace(/-/g, " "));
  return (
    <div>
      <MealsList title="Pick meal for your plan" />
      <DeliveryDetailsModal />
    </div>
  );
};

export default page;
