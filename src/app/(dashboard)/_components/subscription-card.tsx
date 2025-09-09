"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SubscriptionModal from "./subscriptions-modal";
import { SubscriptionCardProps } from "@/lib/type";
import { getStatusBgColor } from "@/lib/utils";
import { getActionIcon } from "@/lib/utils";
import { cancelReasons } from "@/lib/data";
import { pauseOptions } from "@/lib/data";

const SubscriptionCard = ({
  subscriptionNumber,
  price,
  status,
  statusColor,
  startedDate,
  orderCount,
  lastUpdated,
  meals = [],
  showProgress = false,
  orderStatuses = [],
  actions,
  onEditClick,
}: SubscriptionCardProps) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [pauseDuration, setPauseDuration] = useState("");

  const handleActionClick = (
    actionLabel: string,
    originalOnClick: () => void
  ) => {
    const lowerLabel = actionLabel.toLowerCase();

    if (lowerLabel === "cancel") {
      setIsCancelModalOpen(true);
    } else if (lowerLabel === "pause") {
      setIsPauseModalOpen(true);
    } else if (lowerLabel === "edit" && onEditClick) {
      onEditClick();
    } else {
      originalOnClick();
    }
  };

  const handleCancelConfirm = () => {
    console.log(`Cancelling ${subscriptionNumber} with reason:`, cancelReason);
    setIsCancelModalOpen(false);
    setCancelReason("");
  };

  const handlePauseConfirm = () => {
    console.log(`Pausing ${subscriptionNumber} for:`, pauseDuration);
    setIsPauseModalOpen(false);
    setPauseDuration("");
  };

  const handlePauseInstead = () => {
    setIsCancelModalOpen(false);
    setCancelReason("");
    setIsPauseModalOpen(true);
  };
  return (
    <>
      <div className="border border-[#EEEEEE] rounded-[10px] p-6 bg-white text-[#4B4B4B] h-full">
        <div className="flex items-center justify-between mb-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="p-2.5 border border-[#F1BC9F] rounded-[10px]">
              <Image
                src="/take-away_1820160 1.png"
                alt="Subscription icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{subscriptionNumber}</h3>
              <p className="text-sm">• {price}</p>
            </div>
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] ${getStatusBgColor(
                statusColor
              )}`}
            >
              {status}
            </span>
          </div>
          <div className="flex items-center">
            {actions && actions.primary?.label !== "View Subscription" && (
              <>
                <Button
                  variant="ghost"
                  className="underline p-0 hover:bg-transparent text-[#4B4B4B] text-base ml-3 md:ml-0"
                >
                  Close
                </Button>
                <Separator orientation="vertical" className="ml-4 h-10" />
              </>
            )}
            <div className="flex items-center gap-3">
              {actions && (
                <div className="flex items-center gap-2">
                  {actions.primary && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`text-[#878787] text-sm flex-col gap-0 hover:bg-transparent ${
                        actions.primary?.label === "View Subscription" &&
                        "underline"
                      }`}
                      onClick={() =>
                        handleActionClick(
                          actions.primary?.label || "",
                          actions.primary?.onClick || (() => {})
                        )
                      }
                    >
                      {getActionIcon(actions.primary.label) && (
                        <Image
                          src={getActionIcon(actions.primary.label) as string}
                          alt={`${actions.primary.label.toLowerCase()} icon`}
                          width={24}
                          height={24}
                        />
                      )}
                      {actions.primary.label}
                    </Button>
                  )}
                  {actions.secondary && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#878787] text-sm flex-col gap-0 hover:bg-transparent"
                      onClick={() =>
                        handleActionClick(
                          actions.secondary?.label || "",
                          actions.secondary?.onClick || (() => {})
                        )
                      }
                    >
                      {getActionIcon(actions.secondary.label) && (
                        <Image
                          src={getActionIcon(actions.secondary.label) as string}
                          alt={`${actions.secondary.label.toLowerCase()} icon`}
                          width={24}
                          height={24}
                        />
                      )}
                      {actions.secondary.label}
                    </Button>
                  )}
                  {actions.additional && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#878787] text-sm flex-col gap-0 hover:bg-transparent"
                      onClick={() =>
                        handleActionClick(
                          actions.additional?.label || "",
                          actions.additional?.onClick || (() => {})
                        )
                      }
                    >
                      {getActionIcon(actions.additional.label) && (
                        <Image
                          src={
                            getActionIcon(actions.additional.label) as string
                          }
                          alt={`${actions.additional.label.toLowerCase()} icon`}
                          width={24}
                          height={24}
                        />
                      )}
                      {actions.additional.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {meals.length > 1 && <Separator className="my-6" />}

        {showProgress && orderStatuses.length > 0 && (
          <div className="flex items-center gap-6 mb-4 overflow-x-auto scrollbar-hide pb-2">
            {orderStatuses.map((orderStatus, index) => (
              <div key={index} className="flex flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    {orderStatus.isCompleted ? (
                      <Image
                        src="/icons/Check_fill.png"
                        alt="check icon"
                        width={24}
                        height={24}
                      />
                    ) : orderStatus.isActive ? (
                      <Image
                        src="/icons/cd_01.png"
                        alt="dot icon"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src="/icons/cd.png"
                        alt="dot icon"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  <span
                    className={`text-xs whitespace-nowrap ${
                      orderStatus.isActive || orderStatus.isCompleted
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {orderStatus.label}
                  </span>
                  {index < orderStatuses.length - 1 && (
                    <div
                      className={`w-16 h-0.5 ${
                        orderStatus.isCompleted
                          ? "bg-orange-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {meals.length > 0 ? (
          <div className="space-y-3 mb-4 text-[#4B4B4B] text-sm">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="flex items-start md:items-center gap-3"
              >
                <Image
                  src={meal.image}
                  alt={meal.name}
                  width={92}
                  height={70}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm md:text-base">
                    {meal.name}
                  </h4>
                  <p className="">{meal.delivery}</p>
                  <p className="">{meal.schedule}</p>
                  {showProgress && (
                    <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
                      <span className="font-bold">
                        Started:{" "}
                        <span className="font-normal">{startedDate}</span>
                      </span>
                      {orderCount && <span>• {orderCount} Orders</span>}
                      <span className="font-bold">
                        Last updated:{" "}
                        <span className="font-normal">{lastUpdated}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          showProgress && (
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="font-bold">
                Started: <span className="font-normal">{startedDate}</span>
              </span>
              {orderCount && <span>• {orderCount} Orders</span>}
              <span className="font-bold">
                Last updated: <span className="font-normal">{lastUpdated}</span>
              </span>
            </div>
          )
        )}
      </div>

      <SubscriptionModal
        isOpen={isCancelModalOpen}
        onClose={() => {
          setIsCancelModalOpen(false);
          setCancelReason("");
        }}
        title="Cancel Your Subscription?"
        description={`We're sorry to see you go. Are you sure you want to cancel your subscription?\nYou'll lose access to weekly meal deliveries, loyalty rewards, and exclusive member perks.`}
        selectLabel="Help us improve, why are you cancelling?"
        selectPlaceholder="Select a reason"
        selectOptions={cancelReasons}
        selectedValue={cancelReason}
        onValueChange={setCancelReason}
        showRequiredAsterisk={true}
        warningMessage={{
          text: "You can always pause your subscription from your subscription dashboard.",
          linkText: "Pause instead",
          onLinkClick: handlePauseInstead,
        }}
        primaryButton={{
          text: "Yes, Cancel Subscription",
          onClick: handleCancelConfirm,
          disabled: !cancelReason,
        }}
        secondaryButton={{
          text: "Keep Subscription",
          onClick: () => {
            setIsCancelModalOpen(false);
            setCancelReason("");
          },
        }}
      />

      <SubscriptionModal
        isOpen={isPauseModalOpen}
        onClose={() => {
          setIsPauseModalOpen(false);
          setPauseDuration("");
        }}
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
          onClick: () => {
            setIsPauseModalOpen(false);
            setPauseDuration("");
          },
        }}
      />
    </>
  );
};

export default SubscriptionCard;
