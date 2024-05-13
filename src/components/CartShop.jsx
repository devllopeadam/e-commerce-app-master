/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useOrders } from "../context/OrdersContext";
import { EmptyCart } from "../assets";
import { useOrderQuantities } from "../context/OrderQuantitiesContext";
import { useTotalPrice } from "../context/TotalPriceContext";
import { Button, OrderItem } from "../components";
import { useEffect, useRef } from "react";

const CartShop = ({ showCart, setShowCart }) => {
  const { orders, setOrders } = useOrders();
  const { orderQuantities, setOrderQuantities } = useOrderQuantities();
  const { totalPrice } = useTotalPrice();
  const ref = useRef(null);
  const removeOrders = () => {
    setOrders([]);
    setOrderQuantities(0);
  };

  useEffect(() => {
    const handleKeyUp = (e) => e.key === "Escape" && setShowCart(false);

    const handleClick = (e) =>
      showCart && e.target === document.body && setShowCart(false);

    document.body.addEventListener("keyup", handleKeyUp);
    document.body.addEventListener("click", handleClick);

    // Cleanup function to remove event listeners
    return () => {
      document.body.removeEventListener("keyup", handleKeyUp);
      document.body.removeEventListener("click", handleClick);
    };
  }, [showCart]); // Only re-run the effect if showCart changes

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: 50 }}
      className="absolute z-[105] bg-white w-[90%] md:w-[380px] rounded-radius flex flex-col gap-5 right-[20px] lg:right-[30px] xl:right-0 top-[80px]">
      {orderQuantities === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-5 items-center justify-center font-semibold p-5">
          <img
            src={EmptyCart}
            className="w-[100px]"
          />
          <h1 className="text-accent-grey">No Orders Yet</h1>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-5">
          <div className="flex justify-between px-5 pt-5">
            <h1 className="font-semibold text-[18px]">{`Cart (${orderQuantities})`}</h1>
            <h4
              onClick={removeOrders}
              className="font-medium hover:underline transition-all duration-300 text-accent-grey cursor-pointer">
              Remove All
            </h4>
          </div>
          <div className="orders flex flex-col gap-6 max-h-[300px] overflow-y-auto px-5">
            {orders.map((order) => {
              return (
                <OrderItem
                  key={order.textLike + "_order_item"}
                  {...order}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5 px-5 pb-5">
            <div className="flex justify-between">
              <h1 className="text-accent-grey text-[18px] font-medium">
                Total
              </h1>
              <h1 className="font-semibold text-[17px]">{`$ ${totalPrice.toLocaleString()}`}</h1>
            </div>
            <Button
              onClick={() => setShowCart(false)}
              href={"/checkout"}
              text={"Checkout"}
              bgColor={"bg-accent-orange"}
              bgHoverColor={"bg-accent-orange-hover"}
              borderColor={"border-accent-orange"}
              textColor={"text-white"}
              className={
                "hover:bg-accent-orange-hover hover:border-accent-orange-hover w-full text-center"
              }
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CartShop;
