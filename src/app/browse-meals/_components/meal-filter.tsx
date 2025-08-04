"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileFilterSidebar from "./meal-filter-mobile-sidebar";

export default function MealSearchFilterBar() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filterCategories = [
    { id: "meal-type", title: "Meal Type" },
    { id: "meal-size", title: "Meal Size" },
    { id: "allergens", title: "Allergens" },
    { id: "calories", title: "Calories" },
    { id: "protein-source", title: "Protein Source" },
    { id: "prep-time", title: "Prep Time" },
    { id: "other-options", title: "Other Options" },
  ];

  const sortOptions = [
    "Recent",
    "Popular",
    "Price: Low to High",
    "Price: High to Low",
    "Rating",
  ];

  return (
    <>
      {/* Desktop Search and Filter Bar */}
      <div className="hidden md:flex items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search meals by name, ingredient"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-mealprep-orange focus:border-mealprep-orange"
          />
        </div>
        <Button
          variant="outline"
          className="border-gray-300 text-mealprep-text-dark px-4 py-3 rounded-lg bg-transparent"
        >
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          Filters
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-gray-300 text-mealprep-text-dark px-4 py-3 rounded-lg bg-transparent"
            >
              Sort by: Recent
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {sortOptions.map((option) => (
              <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Horizontal Filters */}
      <div className="hidden md:flex flex-wrap items-center gap-3 mb-8">
        {filterCategories.map((category) => (
          <DropdownMenu key={category.id}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-300 text-mealprep-text-dark px-4 py-2 rounded-full bg-transparent"
              >
                {category.title}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {/* Placeholder for filter options */}
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
        <Button
          variant="ghost"
          className="text-mealprep-orange hover:bg-mealprep-orange/10"
        >
          Clear all
        </Button>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end mb-8">
        <Button
          variant="outline"
          className="border-gray-300 text-mealprep-text-dark px-4 py-3 rounded-lg bg-transparent"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          Filters
        </Button>
      </div>

      <MobileFilterSidebar
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
      />
    </>
  );
}
