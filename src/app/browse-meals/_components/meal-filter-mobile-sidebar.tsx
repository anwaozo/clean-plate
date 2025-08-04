"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { X, Utensils, Ruler, Wheat, Flame, Drumstick, Clock, SlidersHorizontal } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface MobileFilterSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileFilterSidebar({ isOpen, onClose }: MobileFilterSidebarProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const filterCategories = [
    {
      id: "meal-type",
      title: "Meal Type",
      icon: Utensils,
      options: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
    },
    {
      id: "meal-size",
      title: "Meal Size",
      icon: Ruler,
      options: ["Small", "Medium", "Large", "Family"],
    },
    {
      id: "allergens",
      title: "Allergens",
      icon: Wheat,
      options: ["Gluten-Free", "Dairy-Free", "Nut-Free", "Soy-Free", "Shellfish-Free"],
    },
    {
      id: "calories",
      title: "Calories",
      icon: Flame,
      options: ["< 500", "500-700", "700-900", "> 900"],
    },
    {
      id: "protein-source",
      title: "Protein Source",
      icon: Drumstick,
      options: ["Chicken", "Beef", "Fish", "Plant-Based", "Pork"],
    },
    {
      id: "prep-time",
      title: "Prep Time",
      icon: Clock,
      options: ["< 10 min", "10-20 min", "20-30 min", "> 30 min"],
    },
    {
      id: "other-options",
      title: "Other Options",
      icon: SlidersHorizontal,
      options: ["Keto", "Paleo", "Vegan", "Vegetarian", "Low Carb"],
    },
  ]

  const handleCheckboxChange = (categoryId: string, option: string, isChecked: boolean) => {
    setSelectedFilters((prev) => {
      const currentOptions = prev[categoryId] || []
      if (isChecked) {
        return { ...prev, [categoryId]: [...currentOptions, option] }
      } else {
        return { ...prev, [categoryId]: currentOptions.filter((item) => item !== option) }
      }
    })
  }

  const handleApplyFilters = () => {
    console.log("Applied Filters:", selectedFilters)
    onClose() // Close sidebar after applying
    // In a real app, you would pass these filters up to the parent component
    // or a global state management system to fetch/filter meals.
  }

  const handleClearAll = () => {
    setSelectedFilters({})
    console.log("Cleared all filters")
    // Optionally close sidebar or keep it open
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-xs flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
          <SheetTitle className="text-xl font-bold text-mealprep-dark-brown">Filters</SheetTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Close filters</span>
          </Button>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          <Accordion type="multiple" className="w-full">
            {filterCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id}>
                <AccordionTrigger className="flex items-center gap-3 py-4 text-mealprep-dark-brown hover:no-underline">
                  <category.icon className="h-5 w-5 text-mealprep-orange" />
                  <span className="font-semibold text-base">{category.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="grid gap-2">
                    {category.options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${category.id}-${option}`}
                          checked={selectedFilters[category.id]?.includes(option)}
                          onCheckedChange={(checked) => handleCheckboxChange(category.id, option, checked === true)}
                          className="border-gray-300 data-[state=checked]:bg-mealprep-orange data-[state=checked]:text-white"
                        />
                        <Label htmlFor={`${category.id}-${option}`} className="text-mealprep-text-light">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex gap-4 p-4 border-t border-gray-200">
          <Button
            onClick={handleApplyFilters}
            className="flex-1 bg-mealprep-orange text-white px-8 py-3 text-lg rounded-lg hover:bg-mealprep-orange/90"
          >
            Apply
          </Button>
          <Button
            onClick={handleClearAll}
            variant="outline"
            className="flex-1 border-mealprep-orange text-mealprep-orange px-8 py-3 text-lg rounded-lg hover:bg-mealprep-orange/10 bg-transparent"
          >
            Clear all
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
