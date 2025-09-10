import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

interface SelectOption {
  value: string;
  label: string;
}

interface WarningMessage {
  text: string;
  linkText?: string;
  onLinkClick?: () => void;
}

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  selectLabel: string;
  selectPlaceholder: string;
  selectOptions: SelectOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  warningMessage?: WarningMessage;
  primaryButton: {
    text: string;
    onClick: () => void;
    disabled?: boolean;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
  primaryButtonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  showRequiredAsterisk?: boolean;
}

const SubscriptionModal = ({
  isOpen,
  onClose,
  title,
  description,
  selectLabel,
  selectPlaceholder,
  selectOptions,
  selectedValue,
  onValueChange,
  warningMessage,
  primaryButton,
  secondaryButton,
  primaryButtonVariant = "default",
  showRequiredAsterisk = false,
}: SubscriptionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] w-full px-4 md:px-6 py-6">
        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-base font-semibold text-[#212121] text-center">
            {title}
          </DialogTitle>
          <p className="text-[#4B4B4B] text-sm leading-relaxed whitespace-pre-line text-center">
            {description}
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <div className="space-y-2">
            <label className="text-[#212121] font-semibold text-base">
              {selectLabel}
              {showRequiredAsterisk && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </label>
            <Select value={selectedValue} onValueChange={onValueChange}>
              <SelectTrigger className="w-full rounded-[8px] p-4 h-fit shadow-none border-[#EEEEEE] text-[#4B4B4B]">
                <SelectValue placeholder={selectPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {selectOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-[#4B4B4B]"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {warningMessage && (
            <div className="flex flex-col md:flex-row md:items-center gap-3 bg-[#F8F7F2] rounded-lg p-2.5">
              <Image
                src={"/icons/Text.png"}
                alt="Warning icon"
                width={16}
                height={24}
              />
              <div className="text-sm">
                <span className="text-[#4B4B4B]">
                  {warningMessage.text}
                  {warningMessage.linkText && warningMessage.onLinkClick && (
                    <>
                      <button
                        onClick={warningMessage.onLinkClick}
                        className="text-[#F89E32] underline hover:no-underline ml-1.5"
                      >
                        {warningMessage.linkText}
                      </button>
                    </>
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-8">
          <Button
            variant="outline"
            onClick={secondaryButton.onClick}
            className="flex-1 py-2 px-4 h-fit  border-[#EEEEEE] text-[#4B4B4B] hover:bg-gray-50 shadow-none"
          >
            {secondaryButton.text}
          </Button>
          <Button
            variant={primaryButtonVariant}
            onClick={primaryButton.onClick}
            disabled={primaryButton.disabled}
            className={`flex-1 py-2 px-4 h-fit  disabled:opacity-50 disabled:cursor-not-allowed shadow-none ${
              primaryButtonVariant === "default"
                ? "bg-[#F89E32] hover:bg-[#F89E32]/90 text-white"
                : ""
            }`}
          >
            {primaryButton.text}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;
