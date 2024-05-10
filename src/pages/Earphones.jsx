import { useEffect } from "react";
import { useActiveLink } from "../context/ActiveLinkContext";
import {
  BestAudio,
  Categories,
  HeroProducts,
  ProductsDisplay,
} from "../components";
import { productsEarphones } from "../constants";

const Earphones = () => {
  const { setActiveLink } = useActiveLink();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveLink("earphones");
  }, []);
  return (
    <>
      <HeroProducts text={"Earphones"} />
      <ProductsDisplay products={productsEarphones} />
      <div className="flex flex-col gap-40 mt-10">
        <Categories />
        <BestAudio />
      </div>
    </>
  );
};

export default Earphones;
