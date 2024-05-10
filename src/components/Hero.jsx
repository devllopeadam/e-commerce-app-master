import { Button } from "../components";
import { motion } from "framer-motion";
const Hero = () => {
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
    <div className="hero pt-[90px] lg:pt-[90px] bg-accent-black min-h-screen">
      <div className="w-[92%] lg:w-[80%] mx-auto h-[1px] bg-[#fafafa1a]"></div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container h-screen max-md:pt-[50px] md:h-[80vh] max-lg:flex-col flex text-white items-center justify-start">
        <div className="flex flex-col gap-5 max-lg:items-center max-lg:justify-center max-w-[370px] max-lg:text-center`">
          <p className="text-[14px] text-[#fafafa80] tracking-[.625rem] uppercase">
            NEW PRODUCT
          </p>
          <h1 className="text-white font-bold max-lg:text-center text-[42px] md:text-[56px] leading-[1.2]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-[15px] text-[#fafafa80] max-lg:text-center leading-[1.8]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            href={"/headphones/xx99-two-headphone"}
            text={"see product"}
            bgColor={"bg-accent-orange"}
            bgHoverColor={"bg-accent-orange-hover"}
            borderColor={"border-accent-orange"}
            textColor={"text-white"}
            className={"hover:bg-accent-orange-hover"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
