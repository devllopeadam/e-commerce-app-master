/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useOrders } from "./OrdersContext";

const OrderQuantitiesContext = createContext(null);

const useOrderQuantities = () => useContext(OrderQuantitiesContext);

const OrderQuantitiesProvider = ({ children }) => {
  const [orderQuantities, setOrderQuantities] = useState(0);
  const { orders } = useOrders();
  const extractQuantities = () =>
    orders.map((order) => setOrderQuantities((prev) => prev + order.quantity));

  useEffect(() => {
    extractQuantities();
  }, [orders]);

  const values = { orderQuantities, setOrderQuantities };

  return (
    <OrderQuantitiesContext.Provider value={values}>
      {children}
    </OrderQuantitiesContext.Provider>
  );
};

export { useOrderQuantities, OrderQuantitiesProvider };
