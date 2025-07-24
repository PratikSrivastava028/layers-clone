import React from "react";
import "./Products.scss";
import product1 from "../assets/watch-1.png";
import product2 from "../assets/watch-2.png";
import product3 from "../assets/watch-3.png";

const Products = () => {
  const watches = [
    {
      img: product1,
      title: "Classic Chrono",
      desc: "Elegance in every tick",
      price: "₹7,999",
    },
    {
      img: product2,
      title: "Steel Master",
      desc: "Engineered for perfection",
      price: "₹9,499",
    },
    {
      img: product3,
      title: "Night Edge",
      desc: "Dark. Bold. Powerful.",
      price: "₹11,299",
    },
  ];

  return (
    <section className="products">
      <h2>Featured Watches</h2>
      <div className="product-list">
        {watches.map((watch, index) => (
          <div key={index} className="product-card">
            <img src={watch.img} alt={watch.title} />
            <h3>{watch.title}</h3>
            <p>{watch.desc}</p>
            <span>{watch.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
