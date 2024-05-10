import { motion } from "framer-motion";
import { BestGear } from "../assets";

const BestAudio = () => {
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
      className="container mb-32 flex items-center gap-20 justify-between max-lg:flex-col">
      <div className="flex max-lg:text-center flex-col gap-5 max-w-[445px]">
        <h1 className="text-4xl md:text-[40px] font-bold">
          BRINGING YOU THE <span className="text-accent-orange">BEST</span>{" "}
          AUDIO GEAR
        </h1>
        <p className="text-[15px] text-accent-grey">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={BestGear}
        className="w-[493px] rounded-radius"
      />
    </motion.div>
  );
};

export default BestAudio;
