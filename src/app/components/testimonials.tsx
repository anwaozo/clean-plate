"use client";

import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I'm saving hours each week and finally sticking to healthy eating!",
      author: "JOE ROOT",
    },
    {
      quote:
        "The meals are so good, it's hard to believe they're this healthy.",
      author: "JOE ROOT",
    },
    {
      quote: "Love the rewards system – I'm hooked!",
      author: "JOE ROOT",
    },
    {
      quote: "Perfect portion sizes and amazing flavors. Highly recommend!",
      author: "SARAH JOHNSON",
    },
    {
      quote: "Delivery is always on time and the packaging is eco-friendly.",
      author: "MIKE CHEN",
    },
    {
      quote: "Great variety of meals. Never gets boring!",
      author: "EMMA DAVIS",
    },
    {
      quote: "MealPrep has made healthy eating so convenient and delicious!",
      author: "DAVID LEE",
    },
    {
      quote: "The best decision I've made for my health and time management.",
      author: "OLIVIA WHITE",
    },
  ];

  const colorPalette = [
    "bg-[#F7E8EF] text-[#5C3F2F] font-bold min-h-[280px] mt-2  ",
    "bg-[#DBF4DE] text-[#064E43] font-bold min-h-[300px] mt-5 ",
    "bg-[#E8F6FF] text-[#143B57] font-bold  min-h-[280px]",
  ];

  const qouteSrc = [
    "/icons/Quote.png",
    "/icons/Quote (1).png",
    "/icons/Quote (2).png",
  ];

  return (
    <section className="py-16 bg-[#F8F7F2]">
      <div className="max-w-[1400px] mx-auto px-4 mb-10 lg:mb-20 md:px-6 text-center lg:text-left">
        <div className="bg-[#FFE63D] text-left inline-block p-1">
          <p className=" text-xs lg:text-sm text-[#5C3F2F] uppercase">
            we’re your partner in living better.
          </p>
        </div>
        <h2 className="text-2xl md:text-5xl font-bricolageG font-bold lg:text-left mt-2 mb-4  lg:mb-12">
          Our Customers Say...
        </h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={600}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        className="w-full pb-12 flex "
      >
        {testimonials.map((testimonial, index) => {
          const bgColorClass = colorPalette[index % colorPalette.length];
          const src = qouteSrc[index % colorPalette.length];
          return (
            <SwiperSlide key={index}>
              <div
                className={`${bgColorClass} rounded-2xl p-6 shadow-md flex flex-col items-left text-left h-full justify-left`}
              >
                <Image src={src} alt="" width={28} height={28} />
                <blockquote className="text-black w-20" />

                <p></p>
                <p className="  text-xl lg:text-2xl  font-bricolageG mb-4 flex-grow flex items-center">
                  "{testimonial.quote}"
                </p>
                <p className="text-md  text-left  uppercase">
                  - {testimonial.author}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
