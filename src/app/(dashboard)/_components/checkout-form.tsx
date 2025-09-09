"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import Image from "next/image";
import DeliveryInformationModal from "./delivery-information-modal";
import { DeliveryFormData } from "@/lib/type";
import ReusableModal from "./reusable-modal";
import { Textarea } from "@/components/ui/textarea";
import AddressModal from "./address-modal";
import Link from "next/link";

const CheckoutForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);
  const [deliveryData, setDeliveryData] = useState<
    DeliveryFormData | undefined
  >(undefined);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const isDeliveryFormFilled = (data: DeliveryFormData): boolean => {
    const requiredFields = [
      "country",
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zipcode",
      "contactNumber",
    ];
    return requiredFields.every(
      (field) => data[field as keyof DeliveryFormData].trim() !== ""
    );
  };

  const handleDeliverySave = (data: DeliveryFormData) => {
    setDeliveryData(data);
    // console.log("Delivery Information:", data);
  };

  return (
    <div className="space-y-4 bg-white border-2 border-dashed border-[#EEEEEE] text-[#4B4B4B] font-dmSans py-6">
      <div className="bg-white rounded-lg px-2 md:px-6 text-base">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold">Account</h3>
          <Button variant="ghost" size="sm">
            <Image
              src={"/Sign_out_squre_light.png"}
              alt="Sign out icon"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Jessica Martinez</p>
            <p className="text-gray-600">jessicamartinez@gmail.com</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image
              src={"/icons/Check_fill.png"}
              alt="check icon"
              width={24}
              height={24}
            />
            <span className="text-sm">Email me with news and offers</span>
          </div>
        </div>
      </div>

      <hr className="py-1 border-t border-[#EEEEEE]" />

      <div className="bg-white rounded-lg px-2 md:px-6 ">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-bold">Delivery Information</h3>
            {deliveryData && isDeliveryFormFilled(deliveryData) ? (
              <div className="mt-2 text-sm">
                <p className="text-gray-600">
                  {deliveryData.firstName} {deliveryData.lastName}
                </p>
                <p className="text-gray-600">{deliveryData.address}</p>
                <p className="text-gray-600">
                  {deliveryData.city}, {deliveryData.state}{" "}
                  {deliveryData.zipcode}
                </p>
              </div>
            ) : (
              <Button
                onClick={() => setIsOpen(true)}
                variant="outline"
                className="w-fit justify-start border-none shadow-none hover:bg-transparent p-0 underline text-base"
              >
                Add new
              </Button>
            )}
          </div>
          {deliveryData && isDeliveryFormFilled(deliveryData) ? (
            <div className="flex flex-col items-end gap-6">
              <Button
                onClick={() => setIsAddressModalOpen(true)}
                variant="outline"
                className="w-fit justify-start border-none shadow-none hover:bg-transparent p-0 underline text-base"
              >
                Change Address
              </Button>

              <Image
                src={"/Edit_duotone_line (1).png"}
                alt="pen icon"
                width={24}
                height={24}
                className="object-cover cursor-pointer"
              />
            </div>
          ) : (
            <Image
              src={"/Edit_duotone_line (2).png"}
              alt="pen icon"
              width={24}
              height={24}
              className="object-cover cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      <hr className="py-2 border-t border-[#EEEEEE]" />

      <div className="bg-white rounded-lg px-2 md:px-6 ">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-2">
            <h3 className="font-bold">Notes from store</h3>
            <p>No notes</p>
          </div>
          <Image
            onClick={() => setOpenNotes(true)}
            src={"/Edit_duotone_line (1).png"}
            alt="pen icon"
            width={24}
            height={24}
            className="object-cover cursor-pointer"
          />
        </div>
      </div>

      <hr className="py-2 border-t border-[#EEEEEE]" />

      <div className="bg-white rounded-lg px-2 md:px-6 ">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-2">
            <h3 className="font-bold">Instructions for driver</h3>
            <p>No notes</p>
          </div>
          <Image
            onClick={() => setOpenInstructions(true)}
            src={"/Edit_duotone_line (1).png"}
            alt="pen icon"
            width={24}
            height={24}
            className="object-cover cursor-pointer"
          />
        </div>
      </div>

      <hr className="py-2 border-t border-[#EEEEEE]" />

      <div className="bg-white rounded-lg px-2 md:px-6 ">
        <div className="flex space-x-2">
          <Input
            placeholder="Enter a discount code"
            className="flex-1 border-[#E1E1E1] shadow-none h-fit py-2"
          />
          <Button
            variant="outline"
            className="bg-[#CACACA] text-white h-fit py-2 rounded-lg shadow-none"
          >
            Redeem
          </Button>
        </div>
      </div>

      <hr className="py-0 border-t border-[#EEEEEE]" />

      <div className="bg-white rounded-lg px-2 md:px-6 ">
        <p className="text-sm mb-4">
          By placing this order, you agree to our Terms of Service and Refund
          Policy.
        </p>
        <Link href={"/successful"}>
          <Button className="w-full bg-[#212121] hover:bg-[#212121]/90 text-white py-2 h-fit mb-4 font-bold">
            Confirm order and Pay with{" "}
            <Image
              src={"/logos_stripe.svg"}
              alt="Stripe logo"
              width={60}
              height={24}
            />
          </Button>
        </Link>

        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <Image
            src={"/Chield_check_light.png"}
            alt="shield icon"
            width={24}
            height={24}
          />
          <span className="text-sm ">
            All transactions are secure and encrypted.
          </span>
        </div>
      </div>

      <DeliveryInformationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleDeliverySave}
        initialData={deliveryData}
      />
      <ReusableModal
        isOpen={openNotes}
        onClose={() => setOpenNotes(false)}
        onSave={() => setOpenNotes(false)}
        title="Notes for store"
        description="Enter all information you have for our store"
      >
        <div className="space-y-2 ">
          <label className="block text-sm font-bold text-[#212121]">
            Notes
          </label>
          <Textarea
            placeholder="Enter information here.."
            className="min-h-[120px] border-[#EEEEEE] focus:ring-[#EEEEEE]/60 placeholder:text-gray-400 resize-none"
          />
        </div>
      </ReusableModal>
      <ReusableModal
        isOpen={openInstructions}
        onClose={() => setOpenInstructions(false)}
        onSave={() => setOpenInstructions(false)}
        title="Instructions for driver"
        description="Enter all information you have for delivery personnel"
      >
        <div className="space-y-2 ">
          <label className="block text-sm font-bold text-[#212121]">
            Instruction
          </label>
          <Textarea
            placeholder="Enter information here.."
            className="min-h-[120px] border-[#EEEEEE] focus:ring-[#EEEEEE]/60 placeholder:text-gray-400 resize-none"
          />
        </div>
      </ReusableModal>
      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
      />
    </div>
  );
};

export default CheckoutForm;
