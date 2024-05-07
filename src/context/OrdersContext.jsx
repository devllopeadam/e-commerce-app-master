/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const OrdersContext = createContext(null);

const useOrders = () => useContext(OrdersContext);

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const values = { orders, setOrders };

  return (
    <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>
  );
};

export { useOrders, OrdersProvider };
