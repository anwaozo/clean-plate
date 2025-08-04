"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, Leaf, UtensilsCrossed, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./product-card";
import { MEALS } from "@/lib/data";

export default function BestsellersSection() {
  return (
    <section className="py-16 bg-[#F8F7F2]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl  px-10 md:px-0 font-bricolageG font-bold text-mealprep-dark-brown mb-12">
          This Week's Bestsellers
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          className="w-full pb-12"
        >
          {MEALS.map((meal) => (
            <SwiperSlide key={meal.id}>
              <ProductCard meal={meal} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button className="mt-12 bg-primary text-white px-8 py-6 text-md rounded-lg hover:bg-mealprep-orange/90 transition-colors">
          Discover our menu
        </Button>
      </div>
    </section>
  );
}
