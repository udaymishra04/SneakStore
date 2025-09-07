import React, { useState } from 'react';
import "../styles/ProductCard.css";

function ProductCard({ image, name, price, rating }) {
  const [cartCount, setCartCount] = React.useState(0);

  function addToCart () {
    setCartCount(cartCount + 1);
    // document.getElementById("add-to-cart-button").style.display = "none";
    // document.getElementById("add-to-cart-counter").style.display = "inline-block";
  };
  function incrementCart() {
    setCartCount(cartCount + 1);
  }
  function decrementCart() {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0);
    if (cartCount <= 1) {
      // document.getElementById("add-to-cart-button").style.display = "inline-block";
      // document.getElementById("add-to-cart-counter").style.display = "none";
    }
  }
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name txt-center">{name}</h3>
      <p className="product-price txt-center">${price}</p>
      <p className="text-yellow-500 py-1 txt-center">{"⭐".repeat(rating)}</p>
      <button onClick={addToCart} id="add-to-cart-button" className="add-to-cart-button">Add to Cart</button>
      {/* <div style={{display: "none"}} id="add-to-cart-counter" className="add-to-cart-counter">
        <button className="cart-button-increment" onClick={incrementCart}>+</button>
        <span className="cart-count">{cartCount}</span>
        <button className="cart-button-decrement" onClick={decrementCart}>-</button>
      </div> */}
    </div>
  );
}
export default ProductCard;