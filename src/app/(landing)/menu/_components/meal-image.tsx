import Image from "next/image";
import React from "react";

interface MealImageProps {
  image: string;
  alt: string;
}

const MealImage = ({ image, alt }: MealImageProps) => {
  return (
    <div className="h-full w-full">
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MealImage;