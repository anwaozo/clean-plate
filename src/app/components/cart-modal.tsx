import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />

      <div className="fixed top-18 right-12 z-50 w-[630px] bg-white rounded-lg border shadow-lg animate-in slide-in-from-right-2 duration-300">
        <div className="border-b border-[#EEEEEE] pb-4 p-6">
          <h2 className="font-bricolageG font-semibold text-[32px]">My Cart</h2>
        </div>
        <div className="w-full min-h-[60vh] h-full py-4 text-[#4B4B4B] flex flex-col justify-between px-6">
          <div className="w-full border border-[#EEEEEE] rounded-lg p-4 flex items-center justify-between gap-4">
            <div className="border border-[#F1BC9F] rounded-lg p-2.5 w-fit">
              <Image
                src={"/take-away_1820160 1.png"}
                alt="Take Away"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-lg font-semibold">SUBSCRIPTION 1</p>
              <p className="text-base">$87.00</p>
            </div>
            <p className="bg-[#DBF4DE] px-2.5 py-1 h-fit rounded-xl text-[11px] text-[#2A8449]">
              Subscription
            </p>
            <p className="border-b border-[#4B4B4B] text-sm">
              View Subscription
            </p>
            <div className="border-l border-[#EEEEEE] px-4 flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={"/Close_square_light.png"}
                  alt="Cancel icon"
                  width={24}
                  height={24}
                />
                <p className="text-sm tracking-wider text-[#878787]">Cancel</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={"/Edit_duotone_line.png"}
                  alt="pen icon"
                  width={24}
                  height={24}
                />
                <p className="text-sm tracking-wider text-[#878787]">Edit</p>
              </div>
            </div>
          </div>

          <div className="w-full border border-[#EEEEEE] rounded-lg p-4 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Estimated Total: </p>
              <p>$87.00</p>
            </div>
            <p className="italic">
              Taxes, discounts and shipping calculated at checkout
            </p>
            <Link onClick={() => onClose(false)} href={"/checkout"}>
              <Button
                className="w-full shadow-none hover:bg-mealprep-orange/90 px-4 py-3 h-fit"
                type="submit"
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
