import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const p = products.find(x => x.id === Number(id));

  return (
    <div style={{ padding: 20 }}>
      <h2>{p.title}</h2>
      <img src={p.image} width="300" />
      <p>{p.description}</p>
      <h3>₹{p.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}