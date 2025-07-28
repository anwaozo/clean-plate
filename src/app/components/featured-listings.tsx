import { Button } from "@/components/ui/button";
import React from "react";
import ApartmentLists from "./apartments-lists";

const apartmentsData = [
  {
    id: "1",
    image: "/image (15).png",
    address: "220 Sweetwater Dr, Kyle, TX",
    status: "For Sale",
    city: "Texas",
    price: "$450,000",
  },
  {
    id: "2",
    image: "/image (16).png",
    address: "13209 Brahmin Dr, Austin, TX",
    status: "For Sale",
    city: "Texas",
    price: "$450,000",
  },
  {
    id: "3",
    image: "/image (16).png",
    address: "220 Sweetwater Dr, Kyle, TX",
    status: "For Sale",
    city: "Texas",
    price: "$450,000",
  },
];

const FeaturedListings = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
      <div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:items-center md:justify-between">
        <div className="space-y-3 max-w-[1000px]" data-aos="fade-right">
        <p className="font-semibold text-base">(1) Featured Listings</p>
        <h3 className="text-[32px] font-bold leading-tight">
          Discover exclusive property listings handpicked for discerning
          buyers in Austin's elite communities.
        </h3>
        </div>
        <div className="space-y-3" data-aos="fade-left">
        <p>2 out of 40+ units</p>
        <Button
          variant={"ghost"}
          className="border border-black py-3 px-6 text-base bg-[#ECEBE9] hover:bg-[#ECEBE9] font-normal h-fit"
        >
          Discover More
        </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" data-aos="fade-up">
        <ApartmentLists apartmentsData={apartmentsData} />
      </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
