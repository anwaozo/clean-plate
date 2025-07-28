import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="font-archivo">
      {" "}
      <div className="max-w-[900] mx-auto py-12">
      <div 
        className="flex items-center justify-center mb-8"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-between">
        <Link
          href="/listings"
          className="p-0 text-[#0A4B45] hover:bg-transparent flex items-center hover:text-[#0A4B45] focus-visible:ring-0"
        >
          <Image
          src={"/si_chevron-left-line.png"}
          alt="arrow left"
          width={24}
          height={24}
          />
          <span className="border-b border-[#0A4B45] text-base">
          Back to listing
          </span>
        </Link>
        </div>
      </div>

      {/* Main Heading */}
      <h1 
        className="text-4xl lg:text-[56px] font-bold text-center mb-12 leading-tight"
        data-aos="fade-up"
      >
        Ready to take a closer look?
      </h1>

      {/* Form Container */}
      <div 
        className="bg-[#ECEBE9] overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Green Header Section */}
        <div className="bg-[#0A4B45] rounded-b-2xl px-2 md:px-8 py-8 text-center">
        <p className="text-white text-[26px] font-bold leading-relaxed">
          Complete the form below to schedule a private tour of this
          property. Catherine will reach out to confirm your preferred date
          and time.
        </p>
        </div>

        {/* Form Section */}
        <div className="px-2 md:px-8 py-8 space-y-6">
        <form className="space-y-6">
          {/* Name Field */}
          <div data-aos="fade-right" data-aos-delay="300">
          <Label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
            id="name"
            type="text"
            placeholder="Your full name"
            defaultValue="Charles Garba |"
            className="pl-12 h-12 border-none bg-white shadow-none focus-visible:ring-0"
            />
          </div>
          </div>

          {/* Email Field */}
          <div data-aos="fade-right" data-aos-delay="400">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
            id="email"
            type="email"
            placeholder="Your email"
            className="pl-12 h-12 border-none bg-white shadow-none focus-visible:ring-0"
            />
          </div>
          </div>

          {/* Phone Number Field */}
          <div data-aos="fade-right" data-aos-delay="500">
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
            id="phone"
            type="tel"
            placeholder="Your phone number"
            className="pl-12 h-12 border-none bg-white shadow-none focus-visible:ring-0"
            />
          </div>
          </div>

          {/* Preferred Tour Date */}
          <div data-aos="fade-right" data-aos-delay="600">
          <Label
            htmlFor="tour-date"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Preferred Tour Date
          </Label>
          <div className="relative">
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
            id="tour-date"
            type="text"
            defaultValue="17/03/2025"
            className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
            />
          </div>
          </div>

          {/* Preferred Time */}
          <div data-aos="fade-right" data-aos-delay="700">
          <Label
            htmlFor="tour-time"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Preferred Time
          </Label>
          <div className="relative">
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
            id="tour-time"
            type="text"
            defaultValue="10.30 AM"
            className="h-12 border-none bg-white shadow-none focus-visible:ring-0"
            />
          </div>
          </div>

          {/* Real Estate Agent Question */}
          <div data-aos="fade-right" data-aos-delay="800">
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Are you currently working with a real estate agent?
          </Label>
          <div className="flex space-x-4">
            <Button
            type="button"
            variant="outline"
            className="bg-white border-black"
            >
            ✓ Yes
            </Button>
            <Button
            type="button"
            variant="outline"
            className="border-none bg-white shadow-none focus-visible:ring-0 text-gray-700 hover:bg-gray-50"
            >
            No
            </Button>
          </div>
          </div>

          {/* Additional Comments */}
          <div data-aos="fade-right" data-aos-delay="900">
          <Label
            htmlFor="comments"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Additional Comments or Questions
          </Label>
          <Textarea
            id="comments"
            placeholder="Anything else you'd like us to know before your visit?"
            rows={4}
            className="border-none bg-white shadow-none focus-visible:ring-0"
          />
          </div>

          {/* Submit Button */}
          <Button 
          className="w-full bg-[#0A4B45] hover:bg-[#0A4B45] text-white h-12 text-sm font-normal"
          data-aos="fade-up"
          data-aos-delay="1000"
          >
          Send message
          </Button>
        </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
