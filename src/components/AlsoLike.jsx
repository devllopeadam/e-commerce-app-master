import { motion } from "framer-motion";
import { Button } from "../components";

/* eslint-disable react/prop-types */
const AlsoLike = ({ array }) => {
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
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container mt-5 flex flex-col gap-10 items-center">
      <h1 className="text-[32px] font-bold">YOU MAY ALSO LIKE</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-10">
        {array.slice(0, 3).map((product) => {
          return (
            <div
              key={product.name + "_also_like"}
              className="flex flex-col gap-5 items-center">
              <img
                src={product.imageLike}
                className="rounded-radius max-h-[324px] w-[356px] object-cover"
              />
              <h4 className="font-bold text-[24px] text-accent-black tracking-widest">
                {product.textLike}
              </h4>
              <Button
                href={product.href}
                text={"see product"}
                bgColor={"bg-accent-orange"}
                bgHoverColor={"bg-accent-orange-hover"}
                borderColor={"border-accent-orange"}
                textColor={"text-white"}
                className={
                  "py-[12px] hover:bg-accent-orange-hover hover:border-accent-orange-hover"
                }
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AlsoLike;
