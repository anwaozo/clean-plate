import React from "react";
import CheckoutBreadcrumb from "../_components/checkout-breadcrumb";
import OrderSummary from "../_components/order-summary";
import CheckoutForm from "../_components/checkout-form";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        <CheckoutBreadcrumb />
        <div className=" bg-[#F8F7F2] py-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-7xl mx-auto">
            <OrderSummary />
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
