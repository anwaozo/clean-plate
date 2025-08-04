import { MEALS } from "@/lib/data";
import MealSearchFilterBar from "./_components/meal-filter";
import MealGrid from "./_components/meal-grid";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function BrowseMenuPage() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mt-10">
        <div className="text-center text-[#212121] mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bricolageG  font-bold text-[#212121] mb-0">
            Browse our menu
          </h1>
          <p className="text-sm ">and then build an healthy meal journey</p>
        </div>

        {/* Search bar for mobile and desktop */}
        <div className="relative mb-8 md:hidden">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search meals by name, ingredient"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-mealprep-orange focus:border-mealprep-orange"
          />
        </div>

        <MealSearchFilterBar />
      </div>
      <div className="flex flex-col min-h-screen bg-[#F8F7F2]">
        <main className="flex-1 max-w-[1400px] mx-auto   py-8 md:py-12 bg-[#F8F7F2]">
          <div className="px-4">
            <MealGrid meals={MEALS} />
          </div>
        </main>
      </div>
    </>
  );
}
