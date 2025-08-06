"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, MapPin, Phone, Edit2, Trash2, Copy } from "lucide-react";

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddressModal = ({ isOpen, onClose }: AddressModalProps) => {
  // Static address data
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 [&>button]:!hidden">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-[#212121]">
              Addresses
            </DialogTitle>
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-600 hover:text-gray-800 underline">
                Add a new address
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-6">
          {addresses.map((address) => (
            <div key={address.id} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <h3 className="font-medium text-[#212121]">{address.name}</h3>

                  <div className="flex items-start gap-2 text-[#FE7438] text-sm">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{address.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#FE7438] text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{address.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative inline-flex h-5 w-9 items-center rounded-full">
                      <div
                        className={`h-5 w-9 rounded-full ${
                          address.isDefault ? "bg-[#FE7438]" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`h-4 w-4 rounded-full bg-white ${
                            address.isDefault
                              ? "translate-x-5"
                              : "translate-x-0.5"
                          } mt-0.5 transition-transform`}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">Default</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-gray-600 border-gray-300 hover:bg-gray-50"
                  >
                    <Edit2 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>

                  <div className="flex flex-col gap-1">
                    <button className="p-1 text-gray-400 hover:text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <span className="text-xs text-gray-400">Delete</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Copy className="h-4 w-4" />
                    </button>
                    <span className="text-xs text-gray-400">Copy</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
