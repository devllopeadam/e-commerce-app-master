/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useOrders } from "./OrdersContext";

const TotalPriceContext = createContext(null);

const useTotalPrice = () => useContext(TotalPriceContext);

const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { orders } = useOrders();

  const extractTotalPrice = () => {
    let totalPrices = 0;
    orders.forEach((order) => {
      totalPrices += order.priceNumber * order.quantity;
    });
    setTotalPrice(totalPrices);
  };

  const values = { totalPrice, setTotalPrice };

  useEffect(() => {
    extractTotalPrice();
  }, [orders]);

  return (
    <TotalPriceContext.Provider value={values}>
      {children}
    </TotalPriceContext.Provider>
  );
};

export { useTotalPrice, TotalPriceProvider };
