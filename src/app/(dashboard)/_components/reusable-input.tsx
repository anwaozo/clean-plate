import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ReusableInputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "select";
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const ReusableInput = ({
  label,
  placeholder,
  required = false,
  type = "text",
  options = [],
  value,
  onChange,
  className = "",
}: ReusableInputProps) => {
  if (type === "select") {
    return (
      <div className={`space-y-2 ${className}`}>
        <label className="block text-sm font-semibold text-[#212121]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full h-12 border-[#EEEEEE] focus:ring-[#EEEEEE]/60 shadow-none">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-semibold text-[#212121]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-12 border-[#EEEEEE] focus:ring-[#EEEEEE]/60 placeholder:text-gray-400 shadow-none"
      />
    </div>
  );
};

export default ReusableInput;
