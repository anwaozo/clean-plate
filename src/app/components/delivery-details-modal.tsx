"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";

const inputsData = [
  {
    label: "Delivery day",
    placeholder: "Select a delivery day",
    options: [
      "Every Monday",
      "Every Tuesday",
      "Every Wednesday",
      "Every Thursday",
      "Every Friday",
      "Every Saturday",
      "Every Sunday",
    ],
  },
  {
    label: "Delivery time",
    icon: "/Alarmclock_light.svg",
    placeholder: "Select time",
    options: [
      "7AM - 10AM",
      "10AM - 1PM",
      "1PM - 4PM",
      "4PM - 7PM",
      "5PM - 8PM",
    ],
  },
];

const DeliveryDetailsModal = () => {
  const [open, setOpen] = useState(true);
  const [deliveryDay, setDeliveryDay] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[700px] h-fit [&>button]:!hidden font-sans px-4 lg:px-6">
        <DialogHeader className="items-center justify-center">
          <DialogTitle className="font-semibold text-base">
            Choose Your Delivery Details
          </DialogTitle>
          <DialogDescription className="text-sm">
            Tell us when you'd like to receive your meals.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {inputsData.map((input, index) => (
            <div key={index}>
              <label className="block text-base font-semibold text-[#212121] mb-2">
                {input.label} <span className="text-[#AB3C3C]">*</span>
              </label>
              <Select
                value={index === 0 ? deliveryDay : deliveryTime}
                onValueChange={index === 0 ? setDeliveryDay : setDeliveryTime}
              >
                <SelectTrigger className="w-full h-12 border-[#EEEEEE] focus:ring-[#EEEEEE]/60 shadow-none">
                  <div className="flex items-center">
                    {input.icon && (
                      <Image
                        src={input.icon}
                        alt={input.label}
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                    )}
                    <SelectValue placeholder={input.placeholder} />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {input.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <DialogFooter className="min-w-full gap-4">
          <Button
            className="w-full bg-transparent text-[#212121] border border-[#CACACA] shadow-none px-4 py-3 h-fit"
            type="submit"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="w-full shadow-none hover:bg-mealprep-orange/90 px-4 py-3 h-fit"
            type="submit"
            onClick={() => setOpen(false)}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryDetailsModal;
