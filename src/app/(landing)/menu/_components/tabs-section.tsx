import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import NutritionFacts from "./nutrition-facts";
import InstructionsTab from "./instructions-tab";
import ReviewsTab from "./reviews-tab";
import { TabContentProps } from "@/lib/type";

const tabsData = [
  "Ingredients",
  "Nutrition Facts",
  "Instructions",
  "Allergents",
  "Reviews",
];

const TabsSection = ({
  calories,
  protein,
  carbs,
  fat,
  ingredients,
  nutritionFacts,
  instructions,
  allergents,
  reviews,
  averageRating,
  totalReviews,
}: TabContentProps) => {
  return (
    <Tabs defaultValue="ingredients">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <TabsList className="bg-transparent inline-flex w-max min-w-full justify-start">
          {tabsData.map((tab, index) => (
            <TabsTrigger
              className="data-[state=active]:shadow-none data-[state=active]:bg-[#DBF4DE] data-[state=active]:text-[#4B4B4B] rounded-[20px] px-3 py-2.5 text-sm font-normal text-[#4B4B4B] whitespace-nowrap flex-shrink-0 min-w-fit"
              key={index}
              value={tab.toLowerCase().replace(/\s+/g, "")}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent className="py-[14px]" value="ingredients">
        <p className="text-[#4B4B4B]">{ingredients}</p>
      </TabsContent>

      <TabsContent className="py-[14px]" value="nutritionfacts">
        {nutritionFacts ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-[#212121]">Macros</h3>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="bg-[#F8F7F2] text-[#4B4B4B] rounded-[10px] px-[10px] py-[8px] inline-flex w-max min-w-full justify-start">
                  <span className="border-r border-[#E1E1E1] pr-[47px] whitespace-nowrap flex-shrink-0 min-w-fit">
                    {calories}
                  </span>
                  <span className="border-r border-[#E1E1E1] px-[47px] whitespace-nowrap flex-shrink-0 min-w-fit">
                    {protein}
                  </span>
                  <span className="border-r border-[#E1E1E1] px-[47px] whitespace-nowrap flex-shrink-0 min-w-fit">
                    {carbs}
                  </span>
                  <span className="pl-[47px] whitespace-nowrap flex-shrink-0 min-w-fit">
                    {fat}
                  </span>
                </div>
              </div>
            </div>
            <NutritionFacts nutrition={nutritionFacts} />
          </div>
        ) : (
          <p>Nutrition facts unavailable</p>
        )}
      </TabsContent>

      <TabsContent className="py-[14px]" value="instructions">
        <InstructionsTab instructions={instructions} />
      </TabsContent>

      <TabsContent value="allergents">
        {allergents ? (
          <ul>
            {allergents?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-[#4B4B4B]">Contains: None</p>
        )}
      </TabsContent>

      <TabsContent value="reviews">
        <ReviewsTab
          reviews={reviews}
          averageRating={averageRating}
          totalReviews={totalReviews}
        />
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;
