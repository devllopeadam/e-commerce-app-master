import { InputField } from "../components";
import { useDataInputs } from "../context/DataInputsContext";
import { motion } from "framer-motion";
import { CashOnDelivery } from "../assets";
import { usePaymentMethod } from "../context/PaymentMethodContext";

const CheckoutPayment = () => {
  const { data, errors } = useDataInputs();
  const { paymentMethod, setPaymentMethod } = usePaymentMethod();

  return (
    <div className="py-8 px-6 md:py-[58px] md:px-12 bg-white rounded-radius flex flex-col gap-7">
      <h1 className="text-[28px] font-bold uppercase">CHECKOUT</h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-[13px] text-accent-orange tracking-wide uppercase font-bold">
            billing details
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              id={"name"}
              name={"name"}
              errorName={errors.name}
              value={data.name}
              label={"Name"}
              placeholder={"Jeniah Adam"}
            />
            <InputField
              id={"email"}
              name={"email"}
              errorName={errors.email}
              value={data.email}
              label={"Email Adress"}
              placeholder={"test@example.com"}
            />
            <InputField
              id={"phone"}
              name={"phone"}
              errorName={errors.phone}
              value={data.phone}
              label={"Phone Number"}
              placeholder={"0695266499"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[13px] text-accent-orange tracking-wide uppercase font-bold">
            Shipping info
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              id={"adress"}
              name={"adress"}
              errorName={errors.adress}
              value={data.adress}
              label={"Your Adress"}
              placeholder={"Belle vue"}
              className="sm:col-span-2"
            />
            <InputField
              id={"zip"}
              name={"zip"}
              errorName={errors.zip}
              value={data.zip}
              label={"Zip Code"}
              placeholder={"10011"}
            />
            <InputField
              id={"city"}
              name={"city"}
              errorName={errors.city}
              value={data.city}
              label={"City"}
              placeholder={"Tangier"}
            />
            <InputField
              id={"country"}
              name={"country"}
              errorName={errors.country}
              value={data.country}
              label={"Country"}
              placeholder={"Morocco"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[13px] text-accent-orange tracking-wide uppercase font-bold">
            payment details
          </h1>
          <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 justify-between">
            <p className="text-accent-black text-[12px] font-bold">
              Payment Method
            </p>
            <div className="flex flex-col gap-5">
              <div
                onClick={() => setPaymentMethod("eMoney")}
                className={`cursor-pointer p-4 w-full rounded-radius flex gap-5 items-center transition-all border duration-300 ${
                  paymentMethod === "eMoney"
                    ? "border-accent-orange"
                    : "border-[#cfcfcf]"
                }`}>
                <span className="w-5 h-5 relative rounded-full border border-[#cfcfcf] flex items-center justify-center">
                  <span
                    className={`w-[12px] h-[12px] transition-all duration-300 absolute bg-accent-orange rounded-full ${
                      paymentMethod === "eMoney" ? "opacity-100" : "opacity-0"
                    }`}></span>
                </span>
                <p className="text-[14px] font-bold">e-Money</p>
              </div>
              <div
                onClick={() => setPaymentMethod("cod")}
                className={`cursor-pointer p-4 w-full rounded-radius flex gap-5 items-center transition-all border duration-300 ${
                  paymentMethod === "cod"
                    ? "border-accent-orange"
                    : "border-[#cfcfcf]"
                }`}>
                <span className="w-5 h-5 relative rounded-full border border-[#cfcfcf] flex items-center justify-center">
                  <span
                    className={`w-[12px] h-[12px] transition-all duration-300 absolute bg-accent-orange rounded-full ${
                      paymentMethod === "cod" ? "opacity-100" : "opacity-0"
                    }`}></span>
                </span>
                <p className="text-[14px] font-bold">Cash on Delivery</p>
              </div>
            </div>
          </div>
          {paymentMethod === "eMoney" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <InputField
                id={"eNumber"}
                name={"eNumber"}
                errorName={errors.eNumber}
                value={data.eNumber}
                label={"e-Money Number"}
                placeholder={"238521993"}
              />
              <InputField
                id={"ePin"}
                name={"ePin"}
                errorName={errors.ePin}
                value={data.ePin}
                label={"e-Money PIN"}
                placeholder={"6891"}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-8 items-start mt-6">
              <img src={CashOnDelivery} />
              <p className="text-[15px] text-accent-grey">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
