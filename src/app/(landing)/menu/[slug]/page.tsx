import React from "react";
import MealDetail from "../_components/meal-detail";
import { MEALS } from "@/lib/data";
import { ChevronRight } from "lucide-react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const formattedSlug = decodeURIComponent(slug).replace(/-/g, " ");
  // console.log("slug: ", formattedSlug);

  const meal = MEALS.find(
    (meal) => meal.title.toLocaleLowerCase() === formattedSlug
  );

  if (!meal) {
    return <div>Meal not found</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center pt-12 pb-6 lg:gap-2 text-xs lg:text-sm text-[#4B4B4B]">
        <p>Meal Prep</p>
        <ChevronRight className="h-4 w-4" />
        <p>Menu</p>
        <ChevronRight className="h-4 w-4" />
        <p className="">{meal.title}</p>
      </div>
      <div className="bg-[#F8F7F2]">
        <MealDetail {...meal} />
      </div>
    </div>
  );
};

export default page;
