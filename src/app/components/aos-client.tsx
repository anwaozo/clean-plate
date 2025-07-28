"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const AosClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Faster animation duration (500ms)
      easing: "ease-in-out", // Easing for smoothness
      once: false,
    });
    AOS.refresh();
  }, []);
  return <div>{children}</div>;
};

export default AosClient;
