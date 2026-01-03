<<<<<<< HEAD
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "20px" }}>No items in cart</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.title}</strong> – ₹{item.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
=======
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "20px" }}>No items in cart</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.title}</strong> – ₹{item.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
>>>>>>> ffe415f15d3e7f3c0258a4c0bda5780a3fb656c4
}