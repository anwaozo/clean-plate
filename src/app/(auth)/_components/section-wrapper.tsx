import React from "react";
import Footer from "./footer";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
