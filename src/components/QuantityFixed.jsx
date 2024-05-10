/* eslint-disable react/prop-types */
const QuantityFixed = ({ quantity, setQuantity }) => {
  const handleAdd = () => quantity < 10 && setQuantity((prev) => prev + 1);
  const handleMinus = () => quantity > 1 && setQuantity((prev) => prev - 1);
  return (
    <div className="grid grid-cols-3 w-[128px] bg-white-grey">
      <div
        onClick={handleMinus}
        className="select-none flex itemx-center text-accent-grey hover:text-accent-orange font-bold p-3 justify-center cursor-pointer bg-white-grey duration-300 transition-all hover:bg-[#d3d3d3]">
        -
      </div>
      <div className="select-none flex itemx-center text-accent-black font-bold p-3 justify-center cursor-pointer text-[15px]">
        {quantity}
      </div>
      <div
        onClick={handleAdd}
        className="select-none flex itemx-center text-accent-grey hover:text-accent-orange font-bold p-3 justify-center cursor-pointer bg-white-grey duration-300 transition-all hover:bg-[#d3d3d3]">
        +
      </div>
    </div>
  );
};

export default QuantityFixed;
