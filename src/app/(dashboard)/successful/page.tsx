import React from "react";
import SuccessfulOrder from "../_components/successful-order";
const meals = [
  {
    id: 1,
    name: "BBQ Ranch Chicken Flatbreads",
    description:
      "With double cheese, it's topped with tangy-sweet BBQ chicken, mozzarella, white cheddar, and a drizzle of ranch dressing.",
    image: "/Frame 126 (1).png",
  },
  {
    id: 2,
    name: "Spicy Tofu Stir-Fry",
    description:
      "With double cheese, it's topped with tangy-sweet BBQ chicken, mozzarella, white cheddar, and a drizzle of ranch dressing.",
    image: "/Frame 126 (2).png",
  },
  {
    id: 3,
    name: "Fried pork cutlet curry with rice",
    description:
      "With double cheese, it's topped with tangy-sweet BBQ chicken, mozzarella, white cheddar, and a drizzle of ranch dressing.",
    image: "/Frame 126 (3).png",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <SuccessfulOrder meals={meals} />
    </div>
  );
};

export default page;
