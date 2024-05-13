import { useOrders } from "../context/OrdersContext";

/* eslint-disable react/prop-types */
const QuantityFixed = ({
  quantity,
  setQuantity,
  className,
  padding,
  onAdd = null,
  onMinus = null,
}) => {
  const { setOrders } = useOrders();
  const handleAdd = () => {
    if (quantity < 10 && onAdd !== null) {
      onAdd();
      setQuantity((prev) => prev + 1);
    } else if (quantity < 10 && onAdd === null) {
      setQuantity((prev) => prev + 1);
    }
  };
  const handleMinus = () => {
    if (onMinus !== null) {
      // if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      onMinus();
      // }
      // else {
      // delete the order if the quantity if small than 1
      setOrders((prev) => prev.filter((order) => order.quantity !== 0));
      // }
    } else if (quantity > 1 && onMinus === null) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={`grid grid-cols-3 w-[128px] bg-white-grey ${className}`}>
      <div
        onClick={handleMinus}
        className={`select-none ${padding} flex itemx-center text-accent-grey hover:text-accent-orange font-bold p-3 justify-center cursor-pointer bg-white-grey duration-300 transition-all hover:bg-[#d3d3d3]`}>
        -
      </div>
      <div
        className={`select-none ${padding} flex itemx-center text-accent-black font-bold p-3 justify-center cursor-pointer text-[15px`}>
        {quantity}
      </div>
      <div
        onClick={handleAdd}
        className={`select-none ${padding} flex itemx-center text-accent-grey hover:text-accent-orange font-bold p-3 justify-center cursor-pointer bg-white-grey duration-300 transition-all hover:bg-[#d3d3d3]`}>
        +
      </div>
    </div>
  );
};

export default QuantityFixed;
