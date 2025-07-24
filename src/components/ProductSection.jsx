import React from "react";
import "./ProductSection.scss";
import heroWatch from "../assets/hero-watch.png";

const ProductSection = () => {
  return (
    <section className="product">
      <div className="product__container">
        <div className="product__image">
          <img src={heroWatch} alt="Hero Watch" />
        </div>
        <div className="product__details">
          <h2>Engineered Elegance</h2>
          <p>
            Precision in every tick. Discover the art of time with our latest collection.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
