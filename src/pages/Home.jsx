import { useEffect } from "react";
import { BestAudio, Categories, Hero, ProductsOverview } from "../components";
import { useActiveLink } from "../context/ActiveLinkContext";

const Home = () => {
  const { setActiveLink } = useActiveLink();
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveLink("home");
  }, []);
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-24">
        <Categories />
        <ProductsOverview />
        <BestAudio />
      </div>
    </>
  );
};

export default Home;
