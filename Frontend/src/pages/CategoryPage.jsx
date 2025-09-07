import React from "react";
import categories from "../data/categories";
import "../styles/CategoryPage.css";



export default function CategoryPage() {
  return (
    <div data-aos="fade-in" className="category-page">
      <h1 className="text-3xl font-3 font-bold mb-6 text-center clr-white m-3">
        Shop by Category
      </h1>
      {categories.map((cat, idx) => (
        <div
          className={`category-container ${
            idx % 2 === 0 ? "desc-right" : "desc-left"
          }`}
          key={idx}
        >
          <img
            className="category-section"
            src={cat.image}
            alt={cat.name}
          />
          <div
            className={`category-description ${
              idx % 2 === 0 ? "right" : "left"
            }`}
          >
            <h2 className="category-title">{cat.name}</h2>
            <p>{cat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
