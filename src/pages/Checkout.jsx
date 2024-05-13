/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useOrders } from "../context/OrdersContext";
import { CheckoutPayment, GoBack, Summary } from "../components";

const Checkout = () => {
  const { orders, setOrders } = useOrders();

  return (
    <div className="py-24 pb-44 pt-40 bg-[#fafafa]">
      <div className="container flex flex-col gap-8 lg:gap-12">
        <GoBack />
        <div className="grid items-start grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <CheckoutPayment />
          <Summary orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
