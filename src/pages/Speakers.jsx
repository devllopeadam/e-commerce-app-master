import { useEffect } from "react";
import { useActiveLink } from "../context/ActiveLinkContext";
import {
  BestAudio,
  Categories,
  HeroProducts,
  ProductsDisplay,
} from "../components";
import { productsSpeakers } from "../constants";

const Speakers = () => {
  const { setActiveLink } = useActiveLink();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveLink("speakers");
  }, []);

  return (
    <>
      <HeroProducts text={"Speakers"} />
      <ProductsDisplay products={productsSpeakers} />
      <div className="flex flex-col gap-40 mt-10">
        <Categories />
        <BestAudio />
      </div>
    </>
  );
};

export default Speakers;
