import { useEffect } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard";

import useStore from "../../store/store";

import "./productsList.css";

export default function ProductsList() {
  const fetchProducts = useStore(state => state.fetchProducts)
  const products = useStore(state => state.products)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);

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
