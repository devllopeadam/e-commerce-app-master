import { motion } from "framer-motion";
import { categories } from "../constants";
import { Link } from "react-router-dom";
import { ArrowRight } from "../assets";

const Categories = () => {
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
    <div className="container mt-32 grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-16 md:gap-8 items-center">
      {categories.map((category, i) => {
        return (
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView={"animate"}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            key={category.name + "_category_section"}
            className="relative pt-20 flex flex-col items-center justify-center rounded-radius bg-white-grey w-full gap-4 pb-6">
            <h4 className="font-bold text-[15px]">{category.name}</h4>
            <Link
              to={category.href}
              className="flex items-center gap-2 group">
              <p className="group-hover:text-accent-orange transition-colors text-[14px] text-accent-grey font-bold uppercase">
                Shop
              </p>
              <img src={ArrowRight} />
            </Link>
            <img
              src={category.image}
              className={`w-[95px] absolute ${
                i === 2 ? "-top-[38px]" : "-top-[60px]"
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Categories;
