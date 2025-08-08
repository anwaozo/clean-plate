export const MEALS = [
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
    fullDescription:
      "Tender grilled chicken breast served over fluffy quinoa, paired with roasted seasonal vegetables and a light lemon-herb dressing. Packed with protein and rich in essential nutrients — the perfect balanced, energizing meal for your day.",
    ingredients:
      "Grilled chicken breast, quinoa, roasted zucchini, cherry tomatoes, carrots, olive oil, lemon-herb dressing, sea salt, pepper, mixed herbs, Bell Peppers, RedOnion, Red Chili Peppers, Garlic, Cilantro, Green Onion, Soybean Oil, Vinegar, Creole Blend, Roasted Garlic, Chili Powder, Chipotle, Cumin, Onion Powder, Pink Himalayan Sea Salt, Black Pepper.",
    time: "15mins",
    nutrition: "High Protein",
    calories: "900 Cals (est.)",
    protein: "21g Protein",
    carbs: "27g Carbs",
    fat: "25g Fat",
    nutritionFacts: {
      servingSize: "14oz",
      servingWeight: "390 g",
      calories: 430,
      fat: {
        total: 32,
        saturated: 20,
        trans: 0.3,
      },
      carbohydrates: {
        total: 35,
        fiber: 13,
        sugars: 17,
      },
      protein: 5,
      cholesterol: 0,
      sodium: 380,
      potassium: 800,
      calcium: 75,
      iron: 2.25,
    },
    instructions: {
      heating: {
        microwave: [
          "Remove the meal sleeve and peel back a corner of the film.",
          "Heat on high for 2–3 minutes or until heated through.",
          "Carefully remove from the microwave, peel off the film, and enjoy.",
        ],
        oven: [
          "Preheat oven to 180°C (350°F).",
          "Transfer meal to an oven-safe dish.",
          "Heat for 10–12 minutes or until warmed through.",
          "Handle with care and serve.",
        ],
      },
      storage: [
        "Keep refrigerated at 0–4°C (32–39°F).",
        "Consume by the use-by date on the packaging.",
        "Meals can be frozen for up to 4 weeks — defrost in fridge overnight before heating.",
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Brian M.",
        rating: 4.0,
        date: "July 4, 2025",
        comment:
          "Absolutely loved this! The chicken was tender and well-seasoned, and the quinoa was fluffy with just the right amount of veggies. Super filling without feeling heavy. Will definitely order again!",
      },
      {
        id: 2,
        name: "Sarah O.",
        rating: 4.5,
        date: "July 4, 2025",
        comment:
          "Very tasty and healthy option. The lemon-herb dressing added a nice fresh kick. I wish the portion of veggies was a bit larger, but overall it's a great balanced meal.",
      },
    ],
    averageRating: 4.0,
    totalReviews: 2,
    // allergens: "",
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
    calories: "750 Cals (est.)",
    protein: "18g Protein",
    carbs: "35g Carbs",
    fat: "20g Fat",
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
    calories: "750 Cals (est.)",
    protein: "18g Protein",
    carbs: "35g Carbs",
    fat: "20g Fat",
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
    calories: "750 Cals (est.)",
    protein: "18g Protein",
    carbs: "35g Carbs",
    fat: "20g Fat",
  },
];

export const subscriptionPlans = [
  {
    name: "Essential Plan",
    frequency: 3,
    description: "Ideal for light, flexible meal planning.",
  },
  {
    name: "Standard Plan",
    frequency: 5,
    description: "Stay consistent with balanced, healthy eating.",
  },
  {
    name: "Premium Plan",
    frequency: 7,
    description: "For those who want it all — and save while doing it.",
    discount: "10%",
  },
];

export const cancelReasons = [
  { value: "too-expensive", label: "Too expensive" },
  { value: "dont-need", label: "Don't need it anymore" },
  { value: "poor-quality", label: "Poor food quality" },
  { value: "delivery-issues", label: "Delivery issues" },
  { value: "found-alternative", label: "Found better alternative" },
  { value: "financial-issues", label: "Temporary financial issues" },
  { value: "other", label: "Other" },
];

export const pauseOptions = [
  { value: "1-week", label: "1 Week" },
  { value: "2-weeks", label: "2 Weeks" },
  { value: "1-month", label: "1 Month" },
  { value: "2-months", label: "2 Months" },
  { value: "3-months", label: "3 Months" },
  { value: "indefinite", label: "Indefinite (I'll reactivate manually)" },
];

export const processingSubscriptions = [
  {
    subscriptionNumber: "SUBSCRIPTION 1",
    price: "$87.00",
    status: "Subscription",
    statusColor: "green" as const,
    startedDate: "8/8/2025",
    lastUpdated: "3 mins ago",
    showProgress: true,
    orderStatuses: [
      { label: "Confirmed", isActive: false, isCompleted: true },
      { label: "Preparing", isActive: true, isCompleted: false },
      { label: "Picked up", isActive: false, isCompleted: false },
      { label: "On the way", isActive: false, isCompleted: false },
      { label: "Delivered", isActive: false, isCompleted: false },
    ],
    meals: [
      {
        name: "BBQ Ranch Chicken Flatbreads",
        image: "/Frame 126 (1).png",
        delivery: "Delivery",
        schedule: "Every Tuesday - 12:15pm",
      },
    ],
  },
];

export const activeSubscriptions = [
  {
    subscriptionNumber: "SUBSCRIPTION 1",
    price: "$87.00",
    status: "Subscription",
    statusColor: "green" as const,
    startedDate: "8/8/2025",
    lastUpdated: "No order processing",
    meals: [
      {
        name: "BBQ Ranch Chicken Flatbreads",
        image: "/Frame 126 (1).png",
        delivery: "Delivery",
        schedule: "Every Tuesday - 12:15pm",
      },
      {
        name: "Spicy Tofu Stir-Fry",
        image: "/Frame 126 (2).png",
        delivery: "Delivery",
        schedule: "Every Wednesday - 12:15pm",
      },
      {
        name: "Fried pork cutlet curry with rice",
        image: "/Frame 126 (3).png",
        delivery: "Delivery",
        schedule: "Every Thursday - 12:15pm",
      },
    ],
    actions: {
      primary: {
        label: "Cancel",
        onClick: () => console.log("Cancel subscription"),
      },
      secondary: {
        label: "Pause",
        onClick: () => console.log("Pause subscription"),
      },
      additional: {
        label: "Edit",
        onClick: () => console.log("Edit subscription"),
      },
    },
  },
  {
    subscriptionNumber: "SUBSCRIPTION 2",
    price: "$87.00",
    status: "One-off",
    statusColor: "green" as const,
    startedDate: "8/8/2025",
    orderCount: 5,
    lastUpdated: "No order processing",
    meals: [],
    actions: {
      primary: {
        label: "View Subscription",
        onClick: () => console.log("View subscription"),
      },
    },
  },
];

export const pausedSubscriptions = [
  {
    subscriptionNumber: "SUBSCRIPTION 1",
    price: "$87.00",
    status: "Paused",
    statusColor: "red" as const,
    startedDate: "8/8/2025",
    lastUpdated: "No order processing",
    meals: [
      {
        name: "BBQ Ranch Chicken Flatbreads",
        image: "/Frame 126 (1).png",
        delivery: "Delivery",
        schedule: "Every Tuesday - 12:15pm",
      },
      {
        name: "Spicy Tofu Stir-Fry",
        image: "/Frame 126 (2).png",
        delivery: "Delivery",
        schedule: "Every Wednesday - 12:15pm",
      },
      {
        name: "Fried pork cutlet curry with rice",
        image: "/Frame 126 (3).png",
        delivery: "Delivery",
        schedule: "Every Thursday - 12:15pm",
      },
    ],
    actions: {
      primary: {
        label: "Reactivate",
        onClick: () => console.log("Reactivate subscription"),
      },
      secondary: {
        label: "Cancel",
        onClick: () => console.log("Cancel subscription"),
      },
    },
  },
  {
    subscriptionNumber: "SUBSCRIPTION 2",
    price: "$87.00",
    status: "Paused",
    statusColor: "red" as const,
    startedDate: "8/8/2025",
    orderCount: 5,
    lastUpdated: "No order processing",
    meals: [],
    actions: {
      primary: {
        label: "View Subscription",
        onClick: () => console.log("View subscription"),
      },
    },
  },
];

export const canceledSubscriptions = [
  {
    subscriptionNumber: "SUBSCRIPTION 1",
    price: "$87.00",
    status: "Canceled",
    statusColor: "gray" as const,
    startedDate: "8/8/2025",
    lastUpdated: "No order processing",
    meals: [
      {
        name: "BBQ Ranch Chicken Flatbreads",
        image: "/Frame 126 (1).png",
        delivery: "Delivery",
        schedule: "Every Tuesday - 12:15pm",
      },
      {
        name: "Spicy Tofu Stir-Fry",
        image: "/Frame 126 (2).png",
        delivery: "Delivery",
        schedule: "Every Wednesday - 12:15pm",
      },
      {
        name: "Fried pork cutlet curry with rice",
        image: "/Frame 126 (3).png",
        delivery: "Delivery",
        schedule: "Every Thursday - 12:15pm",
      },
    ],
    actions: {
      primary: {
        label: "Reactivate",
        onClick: () => console.log("Reactivate subscription"),
      },
    },
  },
  {
    subscriptionNumber: "SUBSCRIPTION 2",
    price: "$87.00",
    status: "Canceled",
    statusColor: "gray" as const,
    startedDate: "8/8/2025",
    orderCount: 5,
    lastUpdated: "No order processing",
    meals: [],
    actions: {
      primary: {
        label: "View Subscription",
        onClick: () => console.log("View subscription"),
      },
    },
  },
];
