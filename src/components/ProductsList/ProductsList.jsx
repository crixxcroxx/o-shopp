import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import ProductCard from "../ProductCard";

import { setProducts } from "../../redux/actions/productActions";

import "./productsList.css";

export default function ProductsList() {

  const products = useSelector(state => state.allProducts.products)
  const dispatch = useDispatch()

  const fetchProducts = useCallback(async () => {
    let res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.error(err))

    dispatch(setProducts(res.data))
  }, [dispatch])

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
