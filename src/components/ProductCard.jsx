import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      {/* 👇 IMAGE YAHAN AAYEGI */}
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />

      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}