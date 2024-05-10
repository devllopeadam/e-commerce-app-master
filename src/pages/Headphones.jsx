import { useEffect } from "react";
import { useActiveLink } from "../context/ActiveLinkContext";
import {
  BestAudio,
  Categories,
  HeroProducts,
  ProductsDisplay,
} from "../components";
import { productsHeadphones } from "../constants";

const Headphones = () => {
  const { setActiveLink } = useActiveLink();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveLink("headphones");
  }, []);
  return (
    <>
      <HeroProducts text={"Headphones"} />
      <ProductsDisplay products={productsHeadphones} />
      <div className="flex flex-col gap-40 mt-10">
        <Categories />
        <BestAudio />
      </div>
    </>
  );
};

export default Headphones;
