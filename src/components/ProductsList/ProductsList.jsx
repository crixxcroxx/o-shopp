import { Link } from "react-router-dom";

import ProductCard from "../ProductCard";

import "./productsList.css";

export default function ProductsList() {

  return (
    <div className="products-list">
      {products.length === 0 && <div>Loading</div>}
      {products.map(product =>
        <Link to={`/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      )}
    </div>
  );
}
