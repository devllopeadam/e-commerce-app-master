import { useState } from "react";
import { QuantityFixed } from "../components";
import { useOrders } from "../context/OrdersContext";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const OrderItem = ({ imageOrder, textLike, priceNumber, quantity }) => {
  const { orders, setOrders } = useOrders();
  const [quantityO, setQuantityO] = useState(null);
  const hanldeAddQuantity = (name) => {
    const newOrders = orders.map((order) => {
      if (order.textLike === name) {
        return {
          ...order,
          quantity: order.quantity + 1,
        };
      }
      return order;
    });
    setOrders(newOrders);
  };

  const handleMinusQuantity = (name) => {
    const newOrders = orders.map((order) => {
      if (order.textLike === name) {
        return {
          ...order,
          quantity: order.quantity - 1,
        };
      }
      return order;
    });
    setOrders(newOrders);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, height: 0 }}
      className="flex justify-between gap-3">
      <img
        src={imageOrder}
        className="w-16 h-16 rounded-[5px]"
      />
      <div className="flex items-center justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-[15px]">{textLike}</h4>
          <h4 className="text-[15px] font-semibold text-accent-grey">{`$ ${priceNumber.toLocaleString()}`}</h4>
        </div>
        <QuantityFixed
          className={"!w-[95px]"}
          padding={"!p-[7px]"}
          quantity={quantityO === null ? setQuantityO(quantity) : quantity}
          onAdd={() => hanldeAddQuantity(textLike)}
          onMinus={() => handleMinusQuantity(textLike)}
          setQuantity={setQuantityO}
        />
      </div>
    </motion.div>
  );
};

export default OrderItem;
