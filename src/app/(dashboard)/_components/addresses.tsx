
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

interface Address {
  id: string;
  name: string;
  address: string;
  phone: string;
  isDefault: boolean;
}

interface AddressesProps {
  addresses: Address[];
}

const Addresses = ({ addresses }: AddressesProps) => {
  return (
    <div className="space-y-6">
      {addresses.map((address) => (
        <div
          key={address.id}
          className="space-y-3 bg-[#F8F7F2] p-4 rounded-lg "
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-[#212121]">{address.name}</h3>

              <div className="flex items-start gap-2 text-[#4B4B4B] text-base">
                <Image
                  src={"/icons/Icon-right.png"}
                  alt="Location Icon"
                  width={20}
                  height={20}
                />
                <span>{address.address}</span>
              </div>

              <div className="flex items-center gap-2 text-[#4B4B4B] text-base">
                <Image
                  src={"/icons/Icon-right (1).png"}
                  alt="Location Icon"
                  width={20}
                  height={20}
                />
                <span>{address.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative inline-flex h-5 w-10 items-center rounded-full">
                  <div
                    className={`h-5 w-10 rounded-full   ${
                      address.isDefault
                        ? "bg-[#FE7438] flex items-center justify-end pr-0.5"
                        : "bg-[#DFDEDC] flex items-center justify-start pl-0.5"
                    } transition-transform duration-100 ease-in-out`}
                  >
                    <div className={`h-4 w-4 rounded-full bg-white `} />
                  </div>
                </div>
                <span className="text-sm text-gray-600">Default</span>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Button
                  variant="outline"
                  className="h-fit py-2.5 px-5 rounded-[10px] text-[#4B4B4B] border-[#CACACA] hover:bg-gray-50"
                >
                  <Image
                    src={"/Edit_duotone_line (1).png"}
                    alt="Location Icon"
                    width={24}
                    height={24}
                  />
                  Edit
                </Button>
              </div>

              <Separator orientation="vertical" className="h-12 mx-6" />

              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <button className="">
                    <Image
                      src={"/icons/Trash_light.png"}
                      alt="Trash Icon"
                      width={20}
                      height={20}
                    />
                  </button>
                  <span className="text-sm text-[#878787]">Delete</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <button className="">
                    <Image
                      src={"/icons/Copy_light.png"}
                      alt="Copy Icon"
                      width={20}
                      height={20}
                    />
                  </button>
                  <span className="text-sm text-[#878787]">Copy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Addresses;
