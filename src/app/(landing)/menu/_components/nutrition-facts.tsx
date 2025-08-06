import React from "react";

interface NutritionData {
  servingSize: string;
  servingWeight: string;
  calories: number;
  fat: {
    total: number;
    saturated: number;
    trans: number;
  };
  carbohydrates: {
    total: number;
    fiber: number;
    sugars: number;
  };
  protein: number;
  cholesterol: number;
  sodium: number;
  potassium: number;
  calcium: number;
  iron: number;
}

interface NutritionFactsProps {
  nutrition: NutritionData;
}

const NutritionFacts = ({ nutrition }: NutritionFactsProps) => {
  return (
    <div className="border border-[#4B4B4B] rounded-[4px] p-4 w-full bg-white font-helvetica text-black mt-4">
      <h1 className="text-[32px] font-semibold text-[#212121] mb-2">
        Nutrition Facts
      </h1>

      <div className="mb-4 text-base text-[#4B4B4B]">
        <p>1 Serving Per Container</p>
        <p>
          Serving Size: {nutrition.servingSize} ({nutrition.servingWeight})
        </p>
      </div>

      <hr className="border-[#4B4B4B] border-t-1 mb-2" />

      <div className="flex justify-between items-center mb-1 text-[#212121]">
        <span className="text-[24px] font-semibold">
          Calories {nutrition.calories}
          <hr className="border-[#212121] border-t-4 rounded-full mb-2" />
        </span>
        <span className="text-lg font-semibold">% Daily Value*</span>
      </div>

      <div className="space-y-2 mb-2 text-base">
        <div className="flex justify-between">
          <p className="font-bold">
            Fat <span className="font-normal">{nutrition.fat.total} g</span>
          </p>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.fat.total / 78) * 100)}%
          </span>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col text-[#4B4B4B]">
            <span>Saturated {nutrition.fat.saturated} g</span>
            <span>+ Trans {nutrition.fat.trans} g</span>
          </div>

          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.fat.saturated / 20) * 100)}%
          </span>
        </div>
      </div>

      <hr className="border-[#4B4B4B] border-t-1 mb-2" />

      <div className="space-y-2 mb-2 text-base">
        <div className="flex justify-between">
          <span className="font-bold">
            Carbohydrate / Glucides
            <span className="font-normal ml-2">
              {nutrition.carbohydrates.total} g
            </span>
          </span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.carbohydrates.total / 300) * 100)}%
          </span>
        </div>
        <div className="flex justify-between">
          <span>Fibre {nutrition.carbohydrates.fiber} g</span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.carbohydrates.fiber / 25) * 100)}%
          </span>
        </div>
        <div className="flex justify-between">
          <span>Sugars {nutrition.carbohydrates.sugars} g</span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.carbohydrates.sugars / 100) * 100)}%
          </span>
        </div>
      </div>

      <hr className="border-[#4B4B4B] border-t-1 mb-2" />

      <div className="flex justify-between mb-2">
        <p className="font-bold">
          Protein <span className="font-normal">{nutrition.protein} g</span>
        </p>
      </div>

      <hr className="border-[#4B4B4B] border-t-1 mb-2" />

      <div className="space-y-1 mb-2 text-base text-[#212121]">
        <div className="flex justify-between">
          <span className="font-bold">
            Cholesterol {nutrition.cholesterol} mg
          </span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.cholesterol / 300) * 100)}%
          </span>
        </div>
        <hr className="border-[#4B4B4B] border-t-1 mb-2" />
        <div className="flex justify-between">
          <span className="font-bold">Sodium {nutrition.sodium} mg</span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.sodium / 2300) * 100)}%
          </span>
        </div>
        <hr className="border-[#212121] border-t-4 rounded-full mb-2" />
        <div className="flex justify-between">
          <span>Potassium {nutrition.potassium} mg</span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.potassium / 3500) * 100)}%
          </span>
        </div>
        <hr className="border-[#4B4B4B] border-t-1 mb-2" />
        <div className="flex justify-between">
          <span>Calcium {nutrition.calcium} mg</span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.calcium / 1300) * 100)}%
          </span>
        </div>
        <hr className="border-[#4B4B4B] border-t-1 mb-2" />
        <div className="flex justify-between">
          <span>Iron {nutrition.iron} mg</span>
          <span className="text-[#4B4B4B]">
            {Math.round((nutrition.iron / 18) * 100)}%
          </span>
        </div>
      </div>

      <hr className="border-black border-t-4 mb-2" />

      <div className="text-base text-[#4B4B4B]">
        <p>*5% or less is a little, 15% or more is a lot</p>
        <p className="mt-1">** Daily Value not established</p>
      </div>
    </div>
  );
};

export default NutritionFacts;
