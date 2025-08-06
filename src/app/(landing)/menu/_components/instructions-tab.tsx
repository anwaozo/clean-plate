import React from "react";

interface InstructionsTabProps {
  instructions?: {
    heating: {
      microwave: string[];
      oven: string[];
    };
    storage: string[];
  };
}

const InstructionsTab = ({ instructions }: InstructionsTabProps) => {
  if (!instructions) {
    return <div className="text-[#4B4B4B]">No instructions available</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="w-fit">
          <h3 className="text-lg font-semibold text-[#212121] inline-block">
            Heating Instructions
          </h3>
          <hr className="border-[#212121] border-t-4 rounded-full mb-2 w-[90%]" />
        </div>

        <div className="mt-4 text-[#4B4B4B] text-base">
          <h4 className="font-semibold mb-2">Microwave (Recommended):</h4>
          <ol className="list-decimal list-inside space-y-1 text-[#4B4B4B] pl-2">
            {instructions.heating.microwave.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="text-[#4B4B4B] text-base">
          <h4 className="font-semibold">Oven (Optional):</h4>
          <ol className="list-decimal list-inside space-y-1 text-[#4B4B4B] pl-2">
            {instructions.heating.oven.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#212121] inline-block">
          Storage Instructions
          <hr className="border-[#212121] border-t-4 rounded-full mb-2 w-[90%]" />
        </h3>
        <ul className="list-disc list-inside space-y-1 text-[#4B4B4B]">
          {instructions.storage.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstructionsTab;
