import { OverviewEarphones, OverviewSpeaker } from "../assets";
import { Button } from "../components";
import { motion } from "framer-motion";

const ProductsOverview = () => {
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
      className="container flex flex-col gap-10">
      <div className="flex max-lg:flex-col gap-22 lg:gap-32 bg-accent-orange rounded-radius max-lg:py-14 px-10 lg:px-20 pt-20 overflow-hidden bg-pattern bg-no-repeat bg-[length:100%] lg:bg-[length:62%]">
        <img
          src={OverviewSpeaker}
          className="w-[400px] relative -bottom-[9px]"
        />
        <div className="flex flex-col gap-5 max-w-[350px] mt-10 max-lg:items-center max-lg:text-center">
          <h1 className="text-white text-[45px] md:text-[56px] font-bold">
            ZX9 SPEAKER
          </h1>
          <p className="font-medium text-[#fafafa80]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            text={"see product"}
            textColor={"text-white"}
            borderColor={"border-accent-black"}
            bgColor={"bg-accent-black"}
            className={"hover:bg-[#141414]"}
            href={"/speakers/zx9-speaker"}
          />
        </div>
      </div>
      <div className="flex bg-speaker max-md:bg-[center] py-20 px-10 md:py-[100px] md:px-[95px] rounded-radius bg-cover bg-no-repeat">
        <div className="flex flex-col gap-5">
          <h1 className="text-[28px] font-bold text-black">ZX7 SPEAKER</h1>
          <Button
            text={"see product"}
            borderColor={"border-black"}
            href={"/speakers/zx7-speaker"}
            bgColor={"transparent"}
            className={"hover:bg-black hover:text-white"}
          />
        </div>
      </div>
      <div className="flex max-md:flex-col gap-10">
        <div className="flex rounded-radius overflow-hidden">
          <img src={OverviewEarphones} />
        </div>
        <div className="flex flex-col py-[41px] justify-center gap-5 px-[95px] bg-white-grey md:w-1/2 rounded-radius">
          <h1 className="text-[28px] font-bold text-black">YX1 EARPHONES</h1>
          <Button
            text={"see product"}
            borderColor={"border-black"}
            href={"/earphones/yx1-wireless-earphone"}
            bgColor={"transparent"}
            className={"hover:bg-black hover:text-white"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsOverview;
