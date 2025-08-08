import React from "react";
import Title from "../_components/title";
import LoyaltyPointsPage from "../_components/loyalty-points";

const page = () => {
  return (
    <div className=" ">
      <Title text="Loyalty Points" />
      <div className="bg-[#F8F7F2] py-10 px-4  flex items-center justify-center">
        <LoyaltyPointsPage />
      </div>
    </div>
  );
};

export default page;
