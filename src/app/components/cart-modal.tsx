import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

const CartModal = ({ isOpen, onClose }: any) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:min-w-[700px] [&>button]:!hidden fixed right-1/2 top-32 translate-x-0 translate-y-0 data-[state=open]:slide-in-from-right-2 w-full">
        <DialogHeader className="border-b border-[#EEEEEE] pb-4">
          <DialogTitle className="font-bricolageG font-semibold text-[32px]">My Cart</DialogTitle>
        </DialogHeader>
        <div className="w-full min-h-[60vh] h-full py-4 font-sans text-[#4B4B4B] flex flex-col justify-between ">
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
            <p className="border-b border-[#4B4B4B] text--">
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

            <Button
              className="w-full shadow-none hover:bg-mealprep-orange/90 px-4 py-3 h-fit"
              type="submit"
              //   onClick={() => setOpen(false)}
            >
              Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
