import ProductCard from "@/app/components/product-card";
import { Button } from "@/components/ui/button";

interface MealGridProps {
  meals: Array<any>; // Using any for simplicity, ideally use the MealCardProps type
}

export default function MealGrid({ meals }: MealGridProps) {
  return (
    <section className="py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <ProductCard key={meal.id} meal={meal} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="bg-primary text-white px-8 py-4 text-sm rounded-lg hover:bg-mealprep-orange/90 transition-colors">
          Load more
        </Button>
      </div>
    </section>
  );
}
