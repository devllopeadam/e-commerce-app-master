/* eslint-disable react-refresh/only-export-components */
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  AlsoLike,
  BestAudio,
  Categories,
  GoBack,
  ProductAdd,
} from "../components";
import { products } from "../constants";

const Product = () => {
  const { name } = useParams();
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const final = name
    .split("-")
    .map((ele) => {
      return ele.toUpperCase();
    })
    .join(" ");
  const product = useLoaderData();
  const filtred = products.filter((product) => product.name !== final);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-24 pt-40">
      <div className="container flex flex-col gap-20">
        <GoBack />
        <ProductAdd {...product} />
        <AlsoLike array={shuffleArray(filtred)} />
        <Categories />
        <BestAudio />
      </div>
    </div>
  );
};

export const productLoader = async ({ params }) => {
  const final = params.name
    .split("-")
    .map((ele) => {
      return ele.toUpperCase();
    })
    .join(" ");
  return products.filter((product) => product.name === final)[0];
};

export default Product;
