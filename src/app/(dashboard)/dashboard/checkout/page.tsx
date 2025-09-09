import React from "react";
import CheckoutBreadcrumb from "../../_components/checkout-breadcrumb";
import OrderSummary from "../../_components/order-summary";
import CheckoutForm from "../../_components/checkout-form";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        <CheckoutBreadcrumb />
        <div className=" bg-[#F8F7F2] pb-10 pt-5 px-2 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-7xl mx-auto">
            <OrderSummary title="Order Summary" />
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
