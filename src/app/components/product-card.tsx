import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Clock, Info, LucideIcon, LucideProps } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon } from "./layouts/logo";
import { Warning } from "postcss";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductProps {
  image: string;
  alt: string;
  badges: { color: string; text: string }[];
  title: string;
  description: string;
  time: string;
  nutrition: string;
}

const ProductCard = ({ meal }: { meal: ProductProps }) => {
  return (
    <Card className="w-full h-[400px] lg:h-[544px] rounded-xl p-2 shadow-lg border-2 border-gray-200 border-dashed border-dash-wide ">
      <CardHeader className="p-0 relative w-full h-40 lg:h-80">
        <Image
          src={meal.image || "/placeholder.svg"}
          alt={meal.alt}
          fill
          className="rounded-t-xl object-cover "
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {meal.badges.map((badge, index) => (
            <Badge
              key={index}
              className={cn(
                "text-xs font-medium px-5 py-0 m rounded-lg",
                badge?.color
              )}
            >
              <div className="flex justify-center items-center gap-1 shadow-sm">
                {badge.text}{" "}
                {badge.text === "Contains Allergen" && (
                  <Info className="w-[11px]" />
                )}
              </div>
            </Badge>
          ))}
        </div>
        <Link className="hover:underline" href={`/menu/${meal.title.toLowerCase().replace(/\s+/g, "-")}`}>
          <h3 className="text-lg text-left font-semibold text-[#4B4B4B] mb-2">
            {meal.title}
          </h3>
        </Link>
        <p className="text-sm lg:text-md text-left text-[#4B4B4B] mb-4 line-clamp-2">
          {meal.description.split(" ").slice(0, 10).join(" ")}...
        </p>

        <div className="flex lg:hidden items-left flex-wrap  lg:flex-nowrap  justify-left gap-3 ">
          <div className="flex lg:hidden items-center  justify-between text-sm text-mealprep-text-light">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-[#4B4B4B]" />
              <span>{meal.time}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-mealprep-text-light">
            <div className="flex items-center gap-1">
              <Image
                src={"/burger_light.png"}
                alt="icon"
                height={20}
                width={20}
              />
              <span>{meal.nutrition}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-left flex-wrap  lg:flex-nowrap  justify-left gap-3 ">
          <div className="hidden lg:flex items-center  justify-between text-sm text-mealprep-text-light">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-[#4B4B4B]" />
              <span>{meal.time}</span>
            </div>
          </div>
          <div className="hidden lg:flex items-centerjustify-between text-sm text-mealprep-text-light">
            <div className="flex items-center gap-1">
              <Image
                src={"/burger_light.png"}
                alt="icon"
                height={20}
                width={20}
              />
              <span>{meal.nutrition}</span>
            </div>
          </div>

          <Button className=" bg-[#2A8449] text-white hover:bg-green-button/90 rounded-lg">
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
