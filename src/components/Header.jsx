import { Link } from "react-router-dom";
import { Cart, Close, Logo, Menu } from "../assets";
import { links } from "../constants";
import { useActiveLink } from "../context/ActiveLinkContext";
import { motion } from "framer-motion";
import { CartShop } from "../components";
import { useOrderQuantities } from "../context/OrderQuantitiesContext";
import { useEffect, useState } from "react";

const Header = () => {
  const { activeLink, setActiveLink } = useActiveLink();
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { orderQuantities } = useOrderQuantities();
  const handleRemeoveCart = (e) => e.key === "Escape" && setShowCart(false);
  const [overScroll, setOverScroll] = useState(false);

  const fixHeaderHeight = () => {
    window.onscroll = () =>
      window.scrollY > 50 ? setOverScroll(true) : setOverScroll(false);
  };

  useEffect(() => {
    fixHeaderHeight();
  }, [overScroll]);

  useEffect(() => {
    showCart
      ? document.body.classList.add("backdrop")
      : document.body.classList.remove("backdrop");
  }, [showCart]);

  return (
    <header
      className={`fixed w-full transition-all duration-300 ${
        show ? "bg-accent-black-gray" : "bg-accent-black"
      } py-8 z-[100] ${overScroll ? "py-6" : "py-8"}`}
      tabIndex={1}
      onKeyUp={handleRemeoveCart}>
      <div className="container relative flex items-center justify-between">
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
        <div
          className="flex items-center justify-center relative select-none"
          onClick={() => setShowCart(!showCart)}
          tabIndex={1}>
          <img
            src={Cart}
            loading="lazy"
            className="cursor-pointer"
          />
          {orderQuantities > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-[9px] -right-[9px] flex items-center justify-center text-[13px] w-[18px] h-[18px] rounded-full bg-accent-orange text-white">
              <p className="select-none">{orderQuantities}</p>
            </motion.div>
          )}
        </div>
        {showCart && (
          <CartShop
            setShowCart={setShowCart}
            showCart={showCart}
          />
        )}
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
