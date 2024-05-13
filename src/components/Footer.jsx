import { Link } from "react-router-dom";
import { links } from "../constants";
import { Facebook, Instagram, Logo, Twitter } from "../assets";
import { motion } from "framer-motion";

const Footer = () => {
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
    <div className="bg-accent-black py-14">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container flex flex-col gap-10">
        <div className="flex md:items-center justify-between w-full max-md:flex-col max-md:gap-8 max-sm:items-center">
          <Link to={"/"}>
            <img
              src={Logo}
              loading="lazy"
              className="w-[143px]"
            />
          </Link>
          <div className="flex items-center gap-7 max-sm:flex-col">
            {links.map((link) => {
              return (
                <Link
                  to={link.href}
                  key={link.label + "_header_desktop"}
                  className={`text-[15px] sm:text-[13.5px] uppercase font-bold tracking-tight text-white hover:text-accent-orange transition-colors duration-300`}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex md:items-center max-sm:items-center gap-8 justify-between w-full max-md:flex-col">
          <p className="text-[15px] text-[#fafafa80] max-w-[540px]">
            {`Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.`}
          </p>
          <div className="flex gap-5 items-center">
            <img
              className="cursor-pointer fill-current text-accent-orange"
              src={Facebook}
            />
            <img
              className="cursor-pointer fill-current text-accent-orange"
              src={Twitter}
            />
            <img
              className="cursor-pointer fill-current text-accent-orange"
              src={Instagram}
            />
          </div>
        </div>
        <p className="text-[15px] font-semibold text-[#fafafa80]">
          Copyright 2024. All Rights Reserved
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
