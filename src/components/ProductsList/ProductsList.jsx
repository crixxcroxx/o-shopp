import ProductCard from "../ProductCard";
import "./productsList.css";

export default function ProductsList() {

  return (
    <div className="products-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
