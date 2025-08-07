import React from "react";
import Image from "next/image";

interface OrderStatus {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface OrderCardProps {
  orderNumber: string;
  itemCount: number;
  status: string;
  statusColor: "orange" | "green" | "red" | "gray";
  orderedDate: string;
  lastUpdated: string;
  orderStatuses: OrderStatus[];
}

const OrderCard = ({
  orderNumber,
  itemCount,
  status,
  statusColor,
  orderedDate,
  lastUpdated,
  orderStatuses,
}: OrderCardProps) => {
  const getStatusBgColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-[#FFF8DE] text-[#EAC123]";
      case "green":
        return "bg-[#DBF4DE] text-[#2A8449]";
      case "red":
        return "bg-[#E7D8D4] text-[#C73007]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="border border-[#EEEEEE] rounded-[10px] p-4 bg-white text-[#4B4B4B]">
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 border border-[#F1BC9F] rounded-[10px]">
            <Image
              src="/take-away_1820160 1.png"
              alt="Order icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{orderNumber}</h3>
            <p className="text-sm ">• {itemCount} items</p>
          </div>
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] ${getStatusBgColor(
            statusColor
          )}`}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center gap-6 mb-4 overflow-x-auto scrollbar-hide pb-2">
        {orderStatuses.map((orderStatus, index) => (
          <div key={index} className="flex flex-shrink-0">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center`}
              >
                {orderStatus.isCompleted ? (
                  <Image
                    src={"/icons/Check_fill.png"}
                    alt="check icon"
                    width={24}
                    height={24}
                  />
                ) : orderStatus.isActive ? (
                  <Image
                    src={"/icons/cd_01.png"}
                    alt="dot icon"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src={"/icons/cd.png"}
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
                    orderStatus.isCompleted ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span className="font-bold">
          Ordered on: <span className="font-normal">{orderedDate}</span>
        </span>
        <span>• {itemCount} items</span>
        <span className="font-bold">
          Last updated: <span className="font-normal">{lastUpdated}</span>
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
