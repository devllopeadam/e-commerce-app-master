/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { QuantityFixed } from "../components";
import { useOrders } from "../context/OrdersContext";

const ProductAdd = ({
  name,
  image,
  description,
  isNew,
  price,
  inTheBox,
  features,
  images,
  imageOrder,
  textLike,
  priceNumber,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { orders, setOrders } = useOrders();
  const variants = {
    animate: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const hanldeAddOrder = () => {
    setQuantity(1);
    if (orders.find((order) => order.textLike === textLike)) {
      const newOrders = orders.map((order) => {
        if (order.textLike === textLike) {
          return {
            ...order,
            quantity: order.quantity + quantity,
          };
        }
        return order;
      });
      setOrders(newOrders);
    } else {
      setOrders([
        ...orders,
        {
          textLike,
          imageOrder: imageOrder,
          priceNumber,
          quantity,
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-24">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        key={name + "_single_product"}
        className="flex gap-9 items-center justify-between max-md:flex-col">
        <img
          src={image}
          className="rounded-radius w-[540px]"
        />
        <div
          className={`flex flex-col max-md:items-center gap-7 md:max-w-[450px] max-md:text-center`}>
          {isNew && (
            <p className="text-[14px] font-normal text-accent-orange tracking-widest uppercase">
              NEW PRODUCT
            </p>
          )}
          <h4 className="font-bold text-[28px] md:max-w-[230px] text-accent-black">
            {name}
          </h4>
          <p className="text-[15px] text-accent-grey">{description}</p>
          <h4 className="font-bold text-[18px]">{price}</h4>
          <div className="flex items-center gap-4">
            <QuantityFixed
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <button
              onClick={hanldeAddOrder}
              className={`py-[13.5px] hover:bg-accent-orange-hover hover:border-accent-orange-hover text-[13px] font-bold w-fit transition-all duration-300 text-white bg-accent-orange border border-accent-orange uppercase px-[30px]`}>
              add to cart
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex gap-32 items-start max-lg:flex-col max-lg:gap-12">
        <div className="flex flex-col gap-5 max-w-[610px]">
          <h1 className="font-bold text-[32px] uppercase">Features</h1>
          <p className="text-accent-grey text-[15px]">{features[0]}</p>
          <p className="text-accent-grey text-[15px]">{features[1]}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[32px] uppercase">IN THE BOX</h1>
          <div className="flex flex-col gap-3">
            {inTheBox.map((box) => {
              return (
                <div
                  key={box.property + name}
                  className="flex gap-3 text-[15px]">
                  <p className="text-accent-orange font-bold text-[16px]">
                    {box.mount}
                  </p>
                  <p className="text-accent-grey">{box.property}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 grid-rows-[285_285] md:grid-cols-[2fr_3fr] gap-5">
        <img
          src={images[0]}
          className="w-full h-full rounded-radius"
        />
        <img
          src={images[2]}
          className="md:row-span-2 w-full h-full rounded-radius"
        />
        <img
          src={images[1]}
          className="w-full h-full rounded-radius"
        />
      </motion.div>
    </div>
  );
};

export default ProductAdd;
