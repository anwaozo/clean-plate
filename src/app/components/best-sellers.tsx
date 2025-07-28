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

export default function BestsellersSection() {
  const meals = [
    {
      id: 1,
      image: "/Frame 126.png",
      alt: "Grilled Chicken & Quinoa Bowl",
      badges: [
        { text: "Family Friendly", color: "bg-[#4B4B4B] text-white" },
        { text: "Contains Allergen", color: "bg-[#E7D8D4] text-[#C73007]" },
      ],
      title: "Grilled Chicken & Quinoa Bowl",
      description:
        "A hearty, protein-packed favorite with a zesty lemon dressing.",
      time: "15mins",
      nutrition: "High Protein",
    },
    {
      id: 2,
      image: "/image1.png",
      alt: "Spicy Tofu Stir-Fry",
      badges: [{ text: "Spicy", color: "bg-[#FE7438] text-white" }],
      title: "Spicy Tofu Stir-Fry",
      description: "Bold, colorful, plant-based goodness with a kick of spice.",
      time: "15mins",
      nutrition: "Veggie",
    },
    {
      id: 3,
      image: "/Frame 14.png",
      alt: "BBQ Ranch Chicken Flatbreads",
      badges: [{ text: "Bestseller", color: "bg-[#FE7438] text-white" }],
      title: "BBQ Ranch Chicken Flatbreads",
      description:
        "With double cheese, it's topped with tangy-sweet BBQ chicken, mozzarella, white cheddar, and a drizzle of ranch dressing.",
      time: "15mins",
      nutrition: "Carb-conscious",
    },
    {
      id: 4,
      image: "/Frame 14 (2).png",
      alt: "Creamy Pesto Pasta",
      badges: [],
      title: "Creamy Pesto Pasta",
      description: "Creamy pesto pasta with cherry tomatoes and fresh basil.",
      time: "15mins",
      nutrition: "Quick Prep",
    },
  ];

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
          {meals.map((meal) => (
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
