import React from "react";
import Title from "../../_components/title";
import Profile from "../../_components/profile";

const page = () => {
  return (
    <div>
      <Title text="My Profile" />
      <div className="bg-[#F8F7F2]  flex items-center justify-center py-10 px-4">
        <Profile />
      </div>
    </div>
  );
};

export default page;
