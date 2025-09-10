"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Addresses from "./addresses";

const addresses = [
  {
    id: "1",
    name: "Jessica Martinez",
    address: "20386 Donovans Rd, Georgetown, Delaware(DE)",
    phone: "(646) 555-0148",
    isDefault: true,
  },
  {
    id: "2",
    name: "Jessica Martinez",
    address: "1125 Willow Street, Apt 3C Brooklyn, New York 11221",
    phone: "(646) 555-0148",
    isDefault: false,
  },
];

const Profile = () => {
  const [isAddress, setIsAddress] = useState(false);
  return (
    <div className="max-w-[1000px] w-full bg-white border-2 border-dashed border-[#EEEEEE] mx-auto p-6 space-y-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 bg-[#CACACA] rounded-full flex items-center justify-center text-white text-lg ">
            BM
          </div>
          <div className="flex-1 text-[#4B4B4B]">
            <h1 className="text-lg font-semibold">Jessica Martinez</h1>
            <div className="flex items-center gap-1 text-sm mt-1">
              <Image
                src={"/icons/Calendar_light.png"}
                alt="calendar icon"
                width={20}
                height={20}
              />
              Joined July, 2025
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="text-[#4B4B4B] text-sm border-none bg-[#EEEEEE] px-5 py-2.5 h-fit rounded-[10px]"
        >
          Change photo
        </Button>
      </div>

      <div className=" border border-[#EEEEEE] p-4 rounded-[10px] text-[#4B4B4B] flex  flex-col md:flex-row md:items-center gap-2 md:gap-0 justify-between">
        <div>
          <label className="text-base font-semibold">Email</label>
          <p className="">jessicamartinez@example.com</p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="shadow-none text-[#4B4B4B] border-[#CACACA] rounded-[10px] px-5 py-2.5 h-fit"
        >
          <Image
            src={"/Edit_duotone_line (1).png"}
            alt="pen icon"
            width={24}
            height={24}
          />
          Edit
        </Button>
      </div>

      <div className=" border border-[#EEEEEE] p-4 rounded-[10px] text-[#4B4B4B] flex flex-col md:flex-row md:items-center gap-2 md:gap-0 justify-between">
        <div>
          <label className="text-base font-semibold">Phone Number</label>
          <p className="">(646) 555-0148</p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="shadow-none text-[#4B4B4B] border-[#CACACA] rounded-[10px] px-5 py-2.5 h-fit"
        >
          <Image
            src={"/Edit_duotone_line (1).png"}
            alt="pen icon"
            width={24}
            height={24}
          />
          Edit
        </Button>
      </div>

      <div className=" border border-[#EEEEEE] p-4 rounded-[10px] text-[#4B4B4B] flex flex-col md:flex-row md:items-center gap-2 md:gap-0 justify-between">
        <div>
          <label className="text-base font-semibold">Password</label>
          <p className=""> • • • • • • • • • •</p>
          <p className="text-xs">
            Password quality: Fair. A stronger password will protect your
            account better.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="shadow-none text-[#4B4B4B] border-[#CACACA] rounded-[10px] px-5 py-2.5 h-fit"
        >
          <Image
            src={"/Edit_duotone_line (1).png"}
            alt="pen icon"
            width={24}
            height={24}
          />
          Edit
        </Button>
      </div>

      <div className=" border border-[#EEEEEE] p-4 rounded-[10px] text-[#4B4B4B] flex flex-col md:flex-row  md:items-center gap-2 md:gap-0 justify-between">
        <div>
          <label className="text-base font-semibold">
            Two Factor Authentication
          </label>
          <p className="">On</p>
          <p className="text-xs">
            Protect your account by adding an extra layer of security with your
            email
          </p>
        </div>
        <div className="w-12 h-6 bg-[#F89E32] rounded-full shadow-inner relative flex items-center justify-end pr-1">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="space-y-4 text-[#4B4B4B]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3  mt-6">
          <h2 className="text-lg font-semibold">Addresses</h2>
          <Button
            onClick={() => setIsAddress(true)}
            variant="outline"
            className="w-fit text-[#4B4B4B] underline border-none bg-transparent shadow-none hover:bg-transparent"
          >
            Add a new address
          </Button>
        </div>

        {isAddress ? (
          <Addresses addresses={addresses} />
        ) : (
          <div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-[10px] p-4 flex items-center gap-2 ">
            <Image
              src={"/icons/Info_fill.png"}
              alt="infomation icon"
              width={24}
              height={24}
            />
            <span className="text-base">No addresses added</span>
          </div>
        )}
      </div>

      <Button
        variant="outline"
        className="w-fit text-[#4B4B4B] underline border-none bg-transparent shadow-none hover:bg-transparent p-0"
      >
        Delete your account
      </Button>
    </div>
  );
};

export default Profile;
