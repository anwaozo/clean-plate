import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
  title: string;
  description: string;
  children?: React.ReactNode;
  cancelText?: string;
  saveText?: string;
}

const ReusableModal = ({
  isOpen,
  onClose,
  onSave,
  title,
  description,
  children,
  cancelText = "Cancel",
  saveText = "Save",
}: ReusableModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[700px] w-full [&>button]:!hidden p-6">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-xl font-semibold text-[#212121] text-center">
            {title}
          </DialogTitle>
          <p className="text-sm text-[#4B4B4B] mt-2 text-center">
            {description}
          </p>
        </DialogHeader>

        <div className="space-y-4">{children}</div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            {cancelText}
          </Button>
          <Button
            onClick={onSave || onClose}
            className="flex-1 h-12 bg-[#FE7438] hover:bg-orange-600 text-white"
          >
            {saveText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
