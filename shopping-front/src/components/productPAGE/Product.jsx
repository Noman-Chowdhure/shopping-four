import LocomotiveScroll from "locomotive-scroll";
import React from "react";
import ProductHero from "./heroSection/ProductHero";
const Product = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div>
      <ProductHero></ProductHero>
    </div>
  );
};

export default Product;
