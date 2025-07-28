"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ImageGalleryDialog } from "./image-gallery-dialog";
interface PropertyDetailModalProps {
  propertyId: string;
  children: React.ReactNode;
}

export function PropertyDetailModal({
  propertyId,
  children,
}: PropertyDetailModalProps) {
  const [open, setOpen] = useState(false);

  const property = {
    id: propertyId,
    address: "13209 Brahmin Dr, Austin, TX",
    price: 175000,
    downPayment: 12000,
    beds: 3,
    baths: 2,
    sqft: 1412,
    images: [
      "/image (21).png",
      "/image (21).png",
      "/image (21).png",
      "/image (21).png",
      "/image (21).png",
      "/image (21).png",
      "/image (21).png",
    ],
    description: `The undercroft comprises 4 self-contained units of varying size. The units have separate secured access, from a central private access road at lower ground level, access road routes through to a central pedestrianized area, within which the IMAX Multiplex Cinema is situated. The accommodation is heated throughout by gas fired central heating with radiators in each room. The property benefits from...`,
    features: {
      propertyType: "Single family residence",
      builtFrom: "2025",
      heating: "Electric, Heat Pump",
      builder: "Starlight",
    },
    appliances: ["Dishwasher", "Disposal", "Microwave", "Range"],
    parking: {
      features: "Attached",
      totalSpaces: "2 attached",
    },
    location: {
      region: "Maxwell",
      subdivision: "Sunset Oaks",
    },
    garden: {
      available: "10 sqft",
    },
    hoa: "No HOA fees",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="font-archivo max-w-[1300px]  w-[95vw] h-[95vh] p-0 overflow-hidden [&>button]:hidden sm:rounded-none">
        <div className="h-full overflow-y-auto mx-4 bg-white">
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 px-2 pt-8">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                className="p-0 text-[#0A4B45] hover:bg-transparent hover:text-[#0A4B45] focus-visible:ring-0"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={"/si_chevron-left-line.png"}
                  alt="arrow left"
                  width={24}
                  height={24}
                />
                <span className="border-b border-[#0A4B45] text-base">
                  Back to search
                </span>
              </Button>
            </div>
          </div>

          <div className="px-2">
            {/* Property Header */}
            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col lg:flex-row gap-6">
                <h1 className="text-[32px] font-bold text-gray-900 mb-2">
                  {property.address}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-2  bg-[#ECEBE9] rounded-[10px] px-[10px] py-1 h-fit">
                    <Image
                      src={"/cbi_roomsbedroom.png"}
                      alt="bed icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-base">{property.beds} bd</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#ECEBE9] rounded-[10px] px-[10px] py-1 h-fit">
                    <Image
                      src={"/fa-solid_bath.png"}
                      alt="bathub icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-base">{property.baths} ba</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#ECEBE9] rounded-[10px] px-[10px] py-1 h-fit">
                    <Image
                      src={"/material-symbols-light_home.png"}
                      alt="home icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-base">
                      {property.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-none shadow-none text-base font-normal"
              >
                Share
                <Image
                  src={"/circum_share-1.png"}
                  alt="home icon"
                  width={24}
                  height={24}
                />
              </Button>
            </div>

            {/* Tabs Navigation */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="w-fit gap-3 max-w-[384px] bg-transparent lg:grid-cols-3 border-b border-[#FFEFE8] inline-flex items-start justify-start px-0">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:border-b data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-0"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="location"
                  className="data-[state=active]:border-b data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-0"
                >
                  Location Information
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:border-b data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-0"
                >
                  {property.sqft.toLocaleString()} sqft
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                  {/* Image Gallery */}
                  <div className="w-full col-span-full">
                    <div className="grid lg:grid-cols-4 gap-4 h-96">
                      <div className="col-span-2 relative">
                        <Image
                          src={property.images[0] || "/image (21).png"}
                          alt="Property main image"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="col-span-1 relative">
                        <Image
                          src={property.images[0] || "/image (21).png"}
                          alt="Property main image"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="relative h-[calc(50%-8px)]">
                          <Image
                            src={property.images[1] || "/image (21).png"}
                            alt="Property image 2"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <ImageGalleryDialog
                          images={property.images}
                          propertyAddress={property.address}
                        >
                          <div className="relative h-[calc(50%-8px)]">
                            <Image
                              src={property.images[2] || "/image (21).png"}
                              alt="Property image 3"
                              fill
                              className="object-cover rounded-lg"
                            />
                            {/* <ImageGalleryDialog images={property.images}> */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-opacity-60 transition-all">
                              <span className="text-white text-2xl font-bold">
                                +5
                              </span>
                            </div>
                            {/* </ImageGalleryDialog> */}
                          </div>
                        </ImageGalleryDialog>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Description */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mt-12">
                  <div className="max-w-[600px] xl:max-w-[800px]">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Description
                    </h2>
                    <p className="leading-relaxed mb-6">
                      {property.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="font-semibold text-base p-0"
                    >
                      Show More
                      <Image
                        src={"/flowbite_chevron-down-outline.png"}
                        alt="home icon"
                        width={24}
                        height={24}
                      />
                    </Button>
                    {/* Property Features */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6 border rounded-[10px] px-4 py-3">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#ECEBE9] px-[10px] py-[4px] rounded-[10px] flex justify- items-center w-[48px] h-[43px]">
                          <Image
                            src={"/teenyicons_search-property-solid.png"}
                            alt="home icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h3 className="font-normal text-[#797979] text-sm mb-1">
                            Property type
                          </h3>
                          <p className="text-xs">
                            {property.features.propertyType}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#ECEBE9] px-[10px] py-[4px] rounded-[10px] flex justify-center items-center w-[48px] h-[43px]">
                          <Image
                            src={"/game-icons_calendar-half-year.png"}
                            alt="home icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h3 className="font-normal text-[#797979] text-sm mb-1">
                            Built from
                          </h3>
                          <p className="text-xs">
                            {property.features.builtFrom}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#ECEBE9] px-[10px] py-[4px] rounded-[10px] flex justify-center items-center w-[48px] h-[43px]">
                          <Image
                            src={"/iconoir_heating-square-solid.png"}
                            alt="home icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h3 className="font-normal text-[#797979] text-sm mb-1">
                            Heating
                          </h3>
                          <p className="text-xs">{property.features.heating}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#ECEBE9] px-[10px] py-[4px] rounded-[10px] flex justify-center items-center w-[48px] h-[43px]">
                          <Image
                            src={"/ri_building-fill.png"}
                            alt="home icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h3 className="font-normal text-[#797979] text-sm mb-1">
                            Builder
                          </h3>
                          <p className="text-xs">{property.features.builder}</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="flex gap-24">
                      <div className="flex flex-col gap-4">
                        <div className="max-w-[204px]">
                          <h3 className="text-sm text-[#797979] mb-2">
                            Appliances
                          </h3>
                          <p className="text-xs">
                            {property.appliances.join(", ")}
                          </p>
                        </div>

                        <div className="">
                          <h3 className="text-sm text-[#797979] mb-2">
                            Location
                          </h3>
                          <p className="text-xs">
                            Region: {property.location.region}
                            <br />
                            Subdivision: {property.location.subdivision}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm text-[#797979] mb-2">HOA</h3>
                          <p className="text-xs">{property.hoa}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-sm text-[#797979] mb-2">
                            Parking
                          </h3>
                          <p className="text-xs">
                            Parking features: {property.parking.features}
                            <br />
                            Total spaces: {property.parking.totalSpaces}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm text-[#797979] mb-2">
                            Garden
                          </h3>
                          <p className="text-xs">
                            Available- {property.garden.available}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Location Information
                      </h2>

                      <Tabs defaultValue="map" className="w-full">
                        <TabsList className="w-fit gap-6 max-w-[384px] bg-transparent lg:grid-cols-3 border-b border-[#FFEFE8] inline-flex items-start justify-start px-0">
                          <TabsTrigger
                            value="map"
                            className="data-[state=active]:border-b data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-0"
                          >
                            Map
                          </TabsTrigger>
                          <TabsTrigger
                            value="school"
                            className="data-[state=active]:border-b data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-0"
                          >
                            School
                          </TabsTrigger>
                          <TabsTrigger
                            value="shops"
                            className="data-[state=active]:border-b data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-0"
                          >
                            Shop & Restaurant
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="map" className="mt-6">
                          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Image
                              src="/Rectangle.png"
                              alt="Property location map"
                              width={769}
                              height={770}
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="school" className="mt-6">
                          <div className="text-gray-600">
                            School information will be displayed here.
                          </div>
                        </TabsContent>

                        <TabsContent value="shops" className="mt-6">
                          <div className="text-gray-600">
                            Shop and restaurant information will be displayed
                            here.
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>

                  {/* Property Info Sidebar */}
                  <div className="space-y-6 w-full lg:max-w-[340px] xl:max-w-[420px]">
                    <Card>
                      <CardContent className="py-6 px-0">
                        <div className="px-6 text-2xl font-bold text-gray-900 mb-2">
                          ${property.price.toLocaleString()}
                        </div>
                        <div className="px-6 text-base mb-6">
                          Down Payment: ${property.downPayment.toLocaleString()}
                        </div>

                        <Separator className="my-6" />

                        {/* <TourRequestDialog> */}
                        <p className="px-6 mb-4 font-semibold">
                          Request a Tour
                        </p>
                        {/* </TourRequestDialog> */}

                        <div className="px-6 grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <Input
                              className="bg-[#ECEBE9] h-fit py-[8px] px-[10px]"
                              type="date"
                              placeholder="Select Date"
                            />
                          </div>
                          <div>
                            <Input
                              className="bg-[#ECEBE9] h-fit py-[8px] px-[10px]"
                              type="time"
                              placeholder="Select Time"
                            />
                          </div>
                        </div>

                        <div className="px-6 mb-4">
                          <Button className="text-sm w-full bg-[#0A4B45] hover:bg-[#0A4B45] text-white mb-4 py-3 px-6 h-fit">
                            Schedule a Tour
                          </Button>
                          <Button
                            variant="outline"
                            className="text-sm w-full border-[#0A4B45] bg-[#ECEBE9] py-3 px-6 h-fit"
                          >
                            Request More Info
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="location" className="mt-8"></TabsContent>

              <TabsContent value="details" className="mt-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Property Details
                  </h2>
                  <div className="text-gray-600">
                    Detailed property specifications will be displayed here.
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
