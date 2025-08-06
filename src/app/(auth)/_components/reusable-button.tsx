import { Button } from "@/components/ui/button";
import React from "react";

const ReusableButton = ({ text }: { text: string }) => {
  return (
    <>
      <Button
        className="w-full shadow-none hover:bg-mealprep-orange/90 px-4 py-2 h-fit"
        type="submit"
      >
        {text}
      </Button>
    </>
  );
};

export default ReusableButton;
