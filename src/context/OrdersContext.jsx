/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
// import { xx99ICart, xx99IICart } from "../assets";

const OrdersContext = createContext(null);

const useOrders = () => useContext(OrdersContext);

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const values = { orders, setOrders };
  const getOrdersFromLocalStorage = () => {
    const orders = JSON.parse(localStorage.getItem("orders"));
    if (orders) {
      setOrders(orders);
    }
  };

  useEffect(() => {
    getOrdersFromLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>
  );
};

export { useOrders, OrdersProvider };
