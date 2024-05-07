import { Link } from "react-router-dom";
import { Cart, Close, Logo, Menu } from "../assets";
import { links } from "../constants";
import { useActiveLink } from "../context/ActiveLinkContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Cart } from "../components";

const Header = () => {
  const { activeLink, setActiveLink } = useActiveLink();
  const [show, setShow] = useState(false);

  return (
    <header className="fixed w-full bg-accent-black py-8">
      <div className="container flex items-center justify-between">
        <img
          className="lg:hidden"
          onClick={() => setShow(!show)}
          src={show ? Close : Menu}
        />
        <Link to={"/"}>
          <img
            src={Logo}
            loading="lazy"
            className="w-[143px]"
          />
        </Link>
        <div className="flex items-center gap-7 max-lg:hidden">
          {links.map((link) => {
            return (
              <Link
                to={link.href}
                onClick={() => setActiveLink(link.label)}
                key={link.label + "_header_desktop"}
                className={`text-[13.5px] uppercase font-bold tracking-tight hover:text-accent-orange transition-colors duration-300 ${
                  activeLink === link.label
                    ? "text-accent-orange"
                    : "text-white"
                }`}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={Cart}
            loading="lazy"
            className="cursor-pointer"
          />
        </div>
      </div>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 items-center justify-center h-[50vh] bg-accent-black-gray absolute w-full top-full p-5 lg:hidden">
          {links.map((link) => {
            return (
              <Link
                to={link.href}
                onClick={() => {
                  setShow(false);
                  setActiveLink(link.label);
                }}
                key={link.label + "_header_mobile"}
                className={`text-xl font-medium uppercase tracking-tight hover:text-accent-orange transition-colors duration-300 ${
                  activeLink === link.label
                    ? "text-accent-orange"
                    : "text-white"
                }`}>
                {link.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
