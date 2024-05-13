import { useEffect, useState } from "react";
import { Check } from "../assets";
import { Button } from "../components";
import { useOrders } from "../context/OrdersContext";
import { motion } from "framer-motion";
import { useTotalPrice } from "../context/TotalPriceContext";
import { useNavigate } from "react-router-dom";

const Tanks = () => {
  const [showThanks, setShowThanks] = useState(true);
  const { totalPrice } = useTotalPrice();
  const { orders, setOrders } = useOrders();
  const totalWithVat = totalPrice + 50 + totalPrice * 0.2;
  const navigate = useNavigate();
  useEffect(() => {
    if (showThanks) {
      document.body.classList.add("backdrop");
    } else {
      document.body.classList.remove("backdrop");
      setOrders([]);
    }
    const handleKeyUp = (e) => e.key === "Escape" && setShowThanks(false);
    const handleClick = (e) =>
      showThanks && e.target === document.body && setShowThanks(false);

    document.body.addEventListener("keyup", handleKeyUp);
    document.body.addEventListener("click", handleClick);
    // Cleanup function to remove event listeners
    return () => {
      document.body.removeEventListener("keyup", handleKeyUp);
      document.body.removeEventListener("click", handleClick);
    };
  }, [showThanks]);

  const handleClick = () => {
    setShowThanks(false);
    setOrders([]);
    navigate("/");
  };

  return (
    showThanks && (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-radius z-[100] p-8 sm:p-10 md:p-12 flex flex-col gap-6 fixed left-1/2 top-1/2 max-sm:w-[90%] sm:w-[80%] md:w-[550px] bg-white !-translate-y-1/2 !-translate-x-1/2">
        <img
          className="w-16 h-16"
          src={Check}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-[20px] md:text-[32px] text-accent-black font-bold leading-[1.2] max-w-[300px] uppercase">
            thank your for your order
          </h1>
          <p className="text-accent-grey text-[14px]">
            You will recaive an email confirmation shortly
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 my-6 max-md:rounded-radius">
            <div className="flex flex-col items-center gap-5 bg-[#f1f1f1] p-3 pr-5 md:p-6 rounded-t-radius md:rounded-l-radius">
              <motion.div
                key={orders[0].textLike + "_checkout_section"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, height: 0 }}
                className="flex justify-between gap-3 items-center w-full">
                <img
                  src={orders[0].imageOrder}
                  className="w-16 h-16 rounded-[5px]"
                />
                <div className="flex items-start justify-between flex-1">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-[15px]">
                      {orders[0].textLike}
                    </h4>
                    <h4 className="text-[14px] font-semibold text-accent-grey">{`$ ${orders[0].priceNumber.toLocaleString()}`}</h4>
                  </div>
                  <div className="text-accent-grey font-bold text-[15px]">{`x${orders[0].quantity}`}</div>
                </div>
              </motion.div>
              {orders.length > 1 && (
                <p className="text-[14px] font-bold text-accent-grey">
                  {orders.length === 2
                    ? "And 1 other item"
                    : `And ${orders.length - 1} items`}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start gap-3 md:gap-5 rounded-b-radius md:rounded-r-radius py-5 md:py-[42px] px-8 bg-accent-black">
              <p className="text-[15px] uppercase text-white-grey">
                grand total
              </p>
              <h4 className="font-bold text-[15px] text-white">
                {`$ ${totalWithVat.toLocaleString()}`}
              </h4>
            </div>
          </div>

          <Button
            onClick={handleClick}
            href={""}
            text={"Back To Home"}
            bgColor={"bg-accent-orange"}
            bgHoverColor={"bg-accent-orange-hover"}
            borderColor={"border-accent-orange"}
            textColor={"text-white"}
            className={
              "hover:bg-accent-orange-hover !py-[13px] tracking-wide hover:border-accent-orange-hover w-full text-center"
            }
          />
        </div>
      </motion.div>
    )
  );
};

export default Tanks;
