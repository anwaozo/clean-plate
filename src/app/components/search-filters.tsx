import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const filters = [
  {
    label: "Price",
    options: ["Any", "Under $500K", "$500K - $1M", "$1M - $2M", "Over $2M"],
  },
  {
    label: "Bed",
    options: ["Any", "1+", "2+", "3+", "4+", "5+"],
  },
  { label: "Room", options: ["Any", "1+", "2+", "3+", "4+"] },
  {
    label: "Property Type",
    options: ["Any", "House", "Condo", "Townhouse", "Land"],
  },
];

const SearchFilters = () => {
  return (
    <section className=" max-w-[1400px] mx-auto md:px-6 py-8">
      <div className="p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="md:col-span-2">
            <div className="relative bg-[#ECEBE9] px-[22px] py-[2.5px] rounded-[10px] w-fit h-fit">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Enter address or city"
                className="pl-10 shadow-none focus:border-none focus-visible:ring-0 border-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
            {filters.map((filter) => (
              <Select key={filter.label}>
                <SelectTrigger className="bg-[#ECEBE9] rounded-[10px] px-[22px] py-[8px] w-fit h-fit md:w-auto">
                  <SelectValue placeholder={filter.label} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>

          <div>
            <Button className=" bg-[#0A4B45] hover:bg-[#0A4B45] text-white px-[22px] rounded-[10px] w-fit h-fit md:w-[174px] md:h-[38px]">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
