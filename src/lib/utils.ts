import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getStatusBgColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-[#FFF8DE] text-[#EAC123]";
      case "green":
        return "bg-[#DBF4DE] text-[#2A8449]";
      case "red":
        return "bg-[#FFE5E5] text-[#C73007]";
      default:
        return "bg-[#EEEEEE] text-[#4B4B4B]";
    }
  };

  export const getActionIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    switch (lowerLabel) {
      case "cancel":
        return "/Close_square_light.png";
      case "pause":
        return "/Stop_light.png";
      case "edit":
        return "/Edit_duotone_line (1).png";
      case "reactivate":
        return "/Play_light.png";
      case "view subscription":
        return null;
      default:
        return "/Default_icon.png";
    }
  };

  
