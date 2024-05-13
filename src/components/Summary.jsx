/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useTotalPrice } from "../context/TotalPriceContext";
import { Button, Tanks } from "../components";
import { EmptyCart } from "../assets";
import { useDataInputs } from "../context/DataInputsContext";
import { usePaymentMethod } from "../context/PaymentMethodContext";
import { useEffect, useState } from "react";

const Summary = ({ orders }) => {
  const { totalPrice } = useTotalPrice();
  const { data, setErrors, setData } = useDataInputs();
  const { paymentMethod } = usePaymentMethod();
  const [isValid, setIsValid] = useState(false);
  const totalWithVat = totalPrice + 50 + totalPrice * 0.2;

  const handleClick = () => {
    if (isValid) {
      setData({
        name: "",
        email: "",
        phone: "",
        adress: "",
        city: "",
        country: "",
        zip: "",
        eNumber: "",
        ePin: "",
      });
    }
    // Validate all the inputs here
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      zip: "",
      adress: "",
      city: "",
      country: "",
    };

    if (paymentMethod !== "eMoney") {
      Object.keys(data)
        .slice(0, -2)
        .forEach((key) => {
          let error = "";
          if (data[key].trim() === "") {
            error = "Field cannot be empty";
            setIsValid(false);
          } else if (key === "email" && !/\S+@\S+\.\S+/.test(data[key])) {
            error = "Invalid email format";
            setIsValid(false);
          } else if (key === "phone" && !/[0-9]{5}/.test(data[key])) {
            error = "Invalid Phone format";
            setIsValid(false);
          } else {
            setIsValid(true);
            setData({
              name: "",
              email: "",
              phone: "",
              adress: "",
              city: "",
              country: "",
              zip: "",
              eNumber: "",
              ePin: "",
            });
          }
          newErrors[key] = error;
        });
      console.log(isValid);
    } else {
      Object.keys(data).forEach((key) => {
        let error = "";
        if (data[key].trim() === "") {
          error = "Field cannot be empty";
          setIsValid(false);
        } else if (key === "email" && !/\S+@\S+\.\S+/.test(data[key])) {
          error = "Invalid email format";
          setIsValid(false);
        } else if (key === "phone" && !/[0-9]{5}/.test(data[key])) {
          error = "Invalid Phone format";
          setIsValid(false);
        } else if (key === "eNumber" && !/^[0-9]{9}$/.test(data[key])) {
          error = "Wrong e-Number Format";
        } else if (key === "ePin" && !/^[0-9]{4}$/.test(data[key])) {
          error = "Wrong e-Pin Format";
        } else {
          setIsValid(true);
          setData({
            name: "",
            email: "",
            phone: "",
            adress: "",
            city: "",
            country: "",
            zip: "",
            eNumber: "",
            ePin: "",
          });
        }
        newErrors[key] = error;
      });
    }
    // Update the data state
    setData(data);
    setErrors(newErrors);
  };

  useEffect(() => {
    if (isValid) {
      setData({
        name: "",
        email: "",
        phone: "",
        adress: "",
        city: "",
        country: "",
        zip: "",
        eNumber: "",
        ePin: "",
      });
    }
  }, [isValid]);

  return (
    <>
      <div className="py-8 px-6 md:p-8 bg-white rounded-radius flex flex-col gap-7">
        <h4 className="text-[18px] font-bold uppercase">Summary</h4>

        {totalPrice > 0 ? (
          <>
            <div className="flex flex-col gap-5">
              {orders.map((order) => {
                return (
                  <motion.div
                    key={order.textLike + "_checkout_section"}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, height: 0 }}
                    className="flex justify-between gap-3 items-center">
                    <img
                      src={order.imageOrder}
                      className="w-16 h-16 rounded-[5px]"
                    />
                    <div className="flex items-start justify-between flex-1">
                      <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-[15px]">
                          {order.textLike}
                        </h4>
                        <h4 className="text-[14px] font-semibold text-accent-grey">{`$ ${order.priceNumber.toLocaleString()}`}</h4>
                      </div>
                      <div className="text-accent-grey font-bold text-[15px]">{`x${order.quantity}`}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-normal uppercase text-accent-grey">
                  Total
                </h4>
                <h4 className="font-bold text-[18px] from-accent-black">
                  {`$ ${totalPrice.toLocaleString()}`}
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-normal uppercase text-accent-grey">
                  shipping
                </h4>
                <h4 className="font-bold text-[18px] from-accent-black">{`$ 50`}</h4>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-normal uppercase text-accent-grey">
                  VAT (INCLUDED)
                </h4>
                <h4 className="font-bold text-[18px] from-accent-black">
                  {`$ ${(totalPrice * 0.2).toLocaleString()}`}
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <h4 className="text-[15px] font-normal uppercase text-accent-grey">
                GRAND TOTAL
              </h4>
              <h4 className="font-bold text-[18px] text-accent-orange">
                {`$ ${totalWithVat.toLocaleString()}`}
              </h4>
            </div>
            <Button
              onClick={() => {
                handleClick();
              }}
              href={""}
              text={"continue & pay"}
              bgColor={"bg-accent-orange"}
              bgHoverColor={"bg-accent-orange-hover"}
              borderColor={"border-accent-orange"}
              textColor={"text-white"}
              className={
                "hover:bg-accent-orange-hover !py-[12px] hover:border-accent-orange-hover w-full text-center"
              }
            />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col gap-5 items-center justify-center font-semibold p-5">
            <img
              src={EmptyCart}
              className="w-[100px]"
            />
            <h1 className="text-accent-grey">No Orders Yet</h1>
          </motion.div>
        )}
      </div>
      {isValid && <Tanks />}
    </>
  );
};

export default Summary;
