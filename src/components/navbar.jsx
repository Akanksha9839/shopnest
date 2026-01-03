import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2>ShopNest</h2>

      <input
        type="text"
        placeholder="Search products..."
        style={{ padding: "6px", width: "250px" }}
      />

      <div>
        <Link
          to="/products"
          style={{ color: "white", marginRight: "15px" }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{ color: "white", marginRight: "15px" }}
        >
          Cart 🛒 ({cartItems.length})
        </Link>
        <Link to="/login" style={{ color: "white", marginLeft: "15px" }}>
         Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;