import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./styles/products.css";

export default function Products() {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}