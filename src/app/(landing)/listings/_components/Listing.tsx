"use client";
import React from "react";
import ListingsHero from "../../components/listings-hero";
import { Button } from "@/components/ui/button";

const Listing = () => {
  const [showBrokerListings, setShowBrokerListings] = React.useState(false);
  return (
    <div className="font-archivo">
      <ListingsHero data-aos="fade-up" />

      <div
        className="max-w-[1400px] mx-auto px-4 lg:px-2 pt-8 pb-4 flex gap-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <Button
          variant="outline"
          size={"lg"}
          onClick={() => setShowBrokerListings(false)}
          className={`w-[200px]  ${!showBrokerListings ? "bg-[#ECEBE9]" : ""}`}
        >
          My Listings
        </Button>
        <Button
          variant="outline"
          size={"lg"}
          onClick={() => setShowBrokerListings(true)}
          className={`w-[200px] ${showBrokerListings ? "bg-[#ECEBE9]" : ""}`}
        >
          Broker Listings
        </Button>
      </div>

      {showBrokerListings ? (
        <div
          className="max-w-[1400px] mx-auto px-4 pb-16 lg:px-2"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <iframe
            src="https://matrix.abor.com/Matrix/public/IDX.aspx?idx=6f653e62"
            width="100%"
            height="700px"
          ></iframe>
        </div>
      ) : (
        <>
          <div
            className="max-w-[1400px] mx-auto px-4 pb-16 lg:px-2"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <iframe
              src="https://matrix.abor.com/Matrix/public/IDX.aspx?idx=94773e7a"
              width="100%"
              height="700px"
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default Listing;
