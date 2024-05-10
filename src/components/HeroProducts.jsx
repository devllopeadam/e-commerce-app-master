import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

const HeroProducts = ({ text }) => {
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
    <div className="flex flex-col pt-[90px] lg:pt-[90px] bg-accent-black">
      <div className="w-[80%] mx-auto h-[1px] bg-[#fafafa1a]"></div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container items-center flex justify-center h-[240px]">
        <h1 className="text-[32px] md:text-[44px] font-bold text-white">
          {text}
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroProducts;
