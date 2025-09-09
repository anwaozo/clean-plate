import React from "react";
import OrderSummary from "../../_components/order-summary";
import CheckoutForm from "../../_components/checkout-form";

const page = () => {
  return (
    <div className=" bg-[#F8F7F2] pb-10 pt-5 px-2 md:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-7xl mx-auto">
        <OrderSummary title="Edit Subscription" />
        <CheckoutForm />
      </div>
    </div>
  );
};

export default page;
