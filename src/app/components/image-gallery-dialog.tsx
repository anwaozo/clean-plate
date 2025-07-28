"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share } from "lucide-react";

interface ImageGalleryDialogProps {
  images: string[];
  children: React.ReactNode;
  propertyAddress?: string;
}

export function ImageGalleryDialog({
  images,
  children,
  propertyAddress,
}: ImageGalleryDialogProps) {
  const [open, setOpen] = useState(false);

  const renderImageGrid = () => {
    const imageElements = [];
    let imageIndex = 0;

    while (imageIndex < images.length) {
      if (imageIndex < images.length) {
        imageElements.push(
          <div
            key={`large-${imageIndex}`}
            className="w-full h-80 relative rounded-lg overflow-hidden"
          >
            <Image
              src={images[imageIndex] || "/placeholder.svg"}
              alt={`Property image ${imageIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>
        );
        imageIndex++;
      }

      if (imageIndex < images.length) {
        const hasSecondImage = imageIndex + 1 < images.length;
        imageElements.push(
          <div key={`pair-${imageIndex}`} className="grid grid-cols-2 gap-4">
            <div className="h-48 relative rounded-lg overflow-hidden">
              <Image
                src={images[imageIndex] || "/placeholder.svg"}
                alt={`Property image ${imageIndex + 1}`}
                fill
                className="object-cover"
              />
            </div>
            {hasSecondImage && (
              <div className="h-48 relative rounded-lg overflow-hidden">
                <Image
                  src={images[imageIndex + 1] || "/placeholder.svg"}
                  alt={`Property image ${imageIndex + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        );
        imageIndex += hasSecondImage ? 2 : 1;
      }
    }

    return imageElements;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[95vh] p-0 overflow-hidden [&>button]:hidden sm:rounded-none">
        <div className="h-full overflow-y-auto bg-white">
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 px-6 pt-4 pb-2">
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
                  Back to listing
                </span>
              </Button>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="px-6  flex flex-col-reverse lg:flex-row lg:justify-between items-start">
            <div className="space-y-4 max-w-3xl mx-auto w-full">
              {renderImageGrid()}
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
