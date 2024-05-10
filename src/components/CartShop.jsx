/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useOrders } from "../context/OrdersContext";
import { EmptyCart } from "../assets";
import { useOrderQuantities } from "../context/OrderQuantitiesContext";

const CartShop = () => {
  const { orders, setOrders } = useOrders();
  const { orderQuantities } = useOrderQuantities();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bg-white w-[65%] md:w-[380px] p-4 rounded-radius flex flex-col gap-5 right-[20px] lg:right-[30px] xl:right-0 top-[80px]">
      {orderQuantities > 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-5 items-center justify-center font-semibold">
          <img
            src={EmptyCart}
            className="w-[100px]"
          />
          <h1>No Orders Yet</h1>
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default CartShop;
