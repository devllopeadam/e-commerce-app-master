import { motion } from "framer-motion";
import { Button } from "../components";

/* eslint-disable react/prop-types */

const ProductsDisplay = ({ products }) => {
  const variants_one = {
    animate: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -50,
    },
  };
  const variants_two = {
    animate: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };
  return (
    <div className="container my-14">
      <div className="flex flex-col gap-28">
        {products.map((product, i) => {
          return (
            <motion.div
              variants={i % 2 === 0 ? variants_one : variants_two}
              initial="hidden"
              whileInView={"animate"}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              key={product.name}
              className="flex gap-10 items-center justify-between max-md:flex-col">
              <img
                src={product.image}
                className="rounded-radius w-[540px]"
              />
              <div
                className={`${
                  i === 1 && "md:-order-1"
                } flex flex-col max-md:items-center gap-5 md:max-w-[450px] max-md:text-center`}>
                {product.isNew && (
                  <p className="text-[14px] font-normal text-accent-orange tracking-widest uppercase">
                    NEW PRODUCT
                  </p>
                )}
                <h4 className="font-bold text-[28px] md:max-w-[230px] text-accent-black">
                  {product.name}
                </h4>
                <p className="text-[15px] text-accent-grey">
                  {product.description}
                </p>
                <Button
                  href={product.href}
                  text={"see product"}
                  bgColor={"bg-accent-orange"}
                  bgHoverColor={"bg-accent-orange-hover"}
                  borderColor={"border-accent-orange"}
                  textColor={"text-white"}
                  className={
                    "hover:bg-accent-orange-hover hover:border-accent-orange-hover"
                  }
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsDisplay;
