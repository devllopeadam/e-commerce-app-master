/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const PaymentMethodContext = createContext(null);

const usePaymentMethod = () => useContext(PaymentMethodContext);

const PaymentMethodProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState("eMoney");
  const values = { paymentMethod, setPaymentMethod };

  return (
    <PaymentMethodContext.Provider value={values}>
      {children}
    </PaymentMethodContext.Provider>
  );
};

export { usePaymentMethod, PaymentMethodProvider };
