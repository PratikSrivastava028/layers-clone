import React from "react";
import "./Gallery.scss";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";        
import review3 from "../assets/review3.png";

const reviews = [
  {
    name: "Aditi Sharma",
    review: "Absolutely love the watch! The design is elegant and the quality is top-notch.",
    img: review1,
  },
  {
    name: "Meera Kapoor",
    review: "Perfect blend of tradition and technology. A must-have!",
    img: review2   ,
  },
  {
    name: "Rohan Das",
    review: "Stylish, durable, and classy. I get compliments every day!",
    img: review3,
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>Customer Reviews</h2>
      <div className="gallery-grid">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <img src={item.img} alt={item.name} />
            <p className="review-text">“{item.review}”</p>
            <p className="reviewer">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
