"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ReusableInput from "./reusable-input";
import { DeliveryInformationModalProps } from "@/lib/type";
import { DeliveryFormData } from "@/lib/type";

const DeliveryInformationModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: DeliveryInformationModalProps) => {
  const [formData, setFormData] = useState<DeliveryFormData>(
    initialData || {
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zipcode: "",
      contactNumber: "",
    }
  );

  const handleInputChange = (field: keyof DeliveryFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Other",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto [&>button]:!hidden p-6">
        <DialogHeader className=" mb-6">
          <DialogTitle className="text-center text-xl font-semibold text-[#212121]">
            Delivery Information
          </DialogTitle>
          <p className="text-center text-sm text-[#4B4B4B] mt-2">
            Enter your delivery information
          </p>
        </DialogHeader>

        <div className="space-y-6">
          <ReusableInput
            label="Country/Region"
            placeholder="Select a country/region"
            required
            type="select"
            options={countries}
            value={formData.country}
            onChange={(value) => handleInputChange("country", value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <ReusableInput
              label="First name"
              placeholder="Enter first name"
              required
              value={formData.firstName}
              onChange={(value) => handleInputChange("firstName", value)}
            />
            <ReusableInput
              label="Last name"
              placeholder="Enter last name"
              required
              value={formData.lastName}
              onChange={(value) => handleInputChange("lastName", value)}
            />
          </div>

          <ReusableInput
            label="Address"
            placeholder="Enter delivery address"
            required
            value={formData.address}
            onChange={(value) => handleInputChange("address", value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ReusableInput
              label="Apartment/Suite"
              placeholder="Apartment, suite, etc (optional)"
              value={formData.apartment}
              onChange={(value) => handleInputChange("apartment", value)}
            />
            <ReusableInput
              label="City"
              placeholder="Enter city"
              required
              value={formData.city}
              onChange={(value) => handleInputChange("city", value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ReusableInput
              label="State"
              placeholder="Enter state"
              required
              value={formData.state}
              onChange={(value) => handleInputChange("state", value)}
            />
            <ReusableInput
              label="Zipcode"
              placeholder="Enter zipcode"
              required
              value={formData.zipcode}
              onChange={(value) => handleInputChange("zipcode", value)}
            />
          </div>

          <ReusableInput
            label="Contact number"
            placeholder="Enter contact phone number"
            required
            type="tel"
            value={formData.contactNumber}
            onChange={(value) => handleInputChange("contactNumber", value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1  border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1  bg-[#FE7438] hover:bg-orange-600 text-white"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryInformationModal;
