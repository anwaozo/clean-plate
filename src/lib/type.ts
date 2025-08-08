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

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

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

export interface MealProps {
  image: string;
  alt: string;
  badges: { color: string; text: string }[];
  title: string;
  time: string;
  nutrition: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  fullDescription?: string;
  ingredients?: string;
  nutritionFacts?: NutritionData;
  instructions?: {
    heating: {
      microwave: string[];
      oven: string[];
    };
    storage: string[];
  };
  allergents?: string[];
  reviews?: any[];
}

export interface TabContentProps {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  ingredients?: string;
  nutritionFacts?: NutritionData;
  instructions?: {
    heating: {
      microwave: string[];
      oven: string[];
    };
    storage: string[];
  };
  allergents?: string[];
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
}

export interface SubscriptionPlanCardProps {
  name: string;
  description: string;
  frequency: number;
  discount?: string;
}

export interface DeliveryFormData {
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipcode: string;
  contactNumber: string;
}

export interface DeliveryInformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: DeliveryFormData) => void;
  initialData?: DeliveryFormData;
}

interface MealItem {
  name: string;
  image: string;
  delivery: string;
  schedule: string;
}

export interface SubscriptionCardProps {
  subscriptionNumber: string;
  price: string;
  status: string;
  statusColor: "orange" | "green" | "red" | "gray";
  startedDate: string;
  orderCount?: number;
  lastUpdated: string;
  meals?: MealItem[];
  showProgress?: boolean;
  orderStatuses?: { label: string; isActive: boolean; isCompleted: boolean }[];
  actions?: {
    primary?: { label: string; onClick: () => void };
    secondary?: { label: string; onClick: () => void };
    additional?: { label: string; onClick: () => void };
  };
  onEditClick?: () => void;
}
