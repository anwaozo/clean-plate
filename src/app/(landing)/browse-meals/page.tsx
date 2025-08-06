import { MEALS } from "@/lib/data";
import MealSearchFilterBar from "./_components/meal-filter";
import MealGrid from "./_components/meal-grid";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MealsList from "@/app/components/meals-list";
export default function BrowseMenuPage() {
  return (
    <>
      <MealsList title="Browse our menu" />
    </>
  );
}
