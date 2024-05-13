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
  const extractQuantities = () => {
    let totalQuantities = 0;
    orders.forEach((order) => {
      totalQuantities += order.quantity;
    });
    setOrderQuantities(totalQuantities);
  };
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
