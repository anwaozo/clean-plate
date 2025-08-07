"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Addresses from "./addresses";

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const AddressModal = ({ isOpen, onClose }: AddressModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] p-0  pb-6 [&>button]:!hidden">
        <DialogHeader className="p-6 pb-4">
          <button
            onClick={onClose}
            className="text-[#212121] flex items-end justify-end"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-[#212121]">
              Addresses
            </DialogTitle>
            <div className="flex items-center gap-4">
              <Button className="bg-transparent shadow-none font-normal text-sm text-[#4B4B4B] hover:text-gray-800 underline">
                Add a new address
              </Button>
            </div>
          </div>
        </DialogHeader>
        <p className="px-6">
          <Addresses addresses={addresses} />
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
