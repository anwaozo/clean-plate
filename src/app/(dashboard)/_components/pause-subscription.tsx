import React, { useState } from "react";
import SubscriptionModal from "./subscriptions-modal";

const PauseSubscriptionExample = () => {
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [pauseDuration, setPauseDuration] = useState("");

  const pauseOptions = [
    { value: "1-week", label: "1 Week" },
    { value: "2-weeks", label: "2 Weeks" },
    { value: "1-month", label: "1 Month" },
    { value: "2-months", label: "2 Months" },
    { value: "3-months", label: "3 Months" },
    { value: "indefinite", label: "Indefinite (I'll reactivate manually)" },
  ];

  const handlePauseClick = () => {
    setIsPauseModalOpen(true);
  };

  const handlePauseConfirm = () => {
    console.log("Pausing subscription for:", pauseDuration);
    // Add your pause logic here
    setIsPauseModalOpen(false);
    setPauseDuration("");
  };

  const handleKeepActive = () => {
    setIsPauseModalOpen(false);
    setPauseDuration("");
  };

  return (
    <div>
      <button onClick={handlePauseClick}>Pause Subscription</button>

      <SubscriptionModal
        isOpen={isPauseModalOpen}
        onClose={() => setIsPauseModalOpen(false)}
        title="Pause Your Subscription?"
        description={`We get it, sometimes you need a little break.\nWhile your subscription is paused, you won't receive new orders, and no payments will be charged. You can reactivate anytime from your account.`}
        selectLabel="How long would you like to pause for?"
        selectPlaceholder="Select an option"
        selectOptions={pauseOptions}
        selectedValue={pauseDuration}
        onValueChange={setPauseDuration}
        showRequiredAsterisk={true}
        warningMessage={{
          text: "You can resume your subscription anytime without losing your saved plan or loyalty points.",
        }}
        primaryButton={{
          text: "Pause Subscription",
          onClick: handlePauseConfirm,
          disabled: !pauseDuration,
        }}
        secondaryButton={{
          text: "Never mind, keep it active",
          onClick: handleKeepActive,
        }}
        primaryButtonVariant="default"
      />
    </div>
  );
};

export default PauseSubscriptionExample;
