import { useSelector } from "react-redux";

import "./productCard.css";

export default function ProductCard() {
  const product = useSelector(state => state.allProducts.products)
  const { id, name, category } = product[0]

  return (
    <div className="product-card">
      <img src="#" alt="product" />
      <div className="product-details">
        <p>{id}</p>
        <p>{name}</p>
        <p className="product-details-sub">{category}</p>
      </div>
    </div>
  );
}