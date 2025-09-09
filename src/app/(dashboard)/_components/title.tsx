import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="py-6 text-center">
      <h3 className="font-bricolageG text-[#212121] font-semibold text-2xl md:text-[40px]">
        {text}
      </h3>
    </div>
  );
};

export default Title;
