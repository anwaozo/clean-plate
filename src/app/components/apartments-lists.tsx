import Image from "next/image";
import React from "react";
import { PropertyDetailModal } from "./property-detail-modal";

interface Apartment {
  id: string;
  image: string;
  address: string;
  status: string;
  city: string;
  price: string;
}

interface ApartmentListsProps {
  apartmentsData: Apartment[];
}

const ApartmentLists = ({ apartmentsData }: ApartmentListsProps) => {
  return (
    <>
      {apartmentsData.map((apartment, index) => (
        <PropertyDetailModal key={apartment.id} propertyId={apartment.id}>
          <div
            className="shadow-md rounded-b-[8px]  overflow-hidden hover:shadow-2xl transition-shadow delay-300"
            key={index}
          >
            <div className="relative">
              {" "}
              <Image
                src={apartment.image}
                alt={`Apartment ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mt-2">
                {apartment.address}
              </h3>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-600">
                  {apartment.status}/ {apartment.city}
                </p>
                <p>{apartment.price}</p>
              </div>
            </div>
          </div>
        </PropertyDetailModal>
      ))}
    </>
  );
};

export default ApartmentLists;
