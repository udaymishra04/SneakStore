import "../styles/ProductCard.css";

function ProductCard({ image, name, price, rating }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name txt-center">{name}</h3>
      <p className="product-price txt-center">${price}</p>
      <p className="text-yellow-500 py-1 txt-center">{"⭐".repeat(rating)}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}
export default ProductCard;