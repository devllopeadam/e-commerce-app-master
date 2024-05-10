/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { xx99ICart, xx99IICart } from "../assets";

const OrdersContext = createContext(null);

const useOrders = () => useContext(OrdersContext);

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    { name: "XX99 II", image: xx99IICart, price: "$ 2,999", quantity: 1 },
    { name: "XX99 I", image: xx99ICart, price: "$ 1,750", quantity: 1 },
  ]);
  const values = { orders, setOrders };

  return (
    <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>
  );
};

export { useOrders, OrdersProvider };
