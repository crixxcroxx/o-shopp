import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import { selectedProduct, removeSelectedProduct } from "../../redux/actions/productActions";

import "./product.css";

export default function Product() {
  const { id: productId } = useParams()

  const product = useSelector(state => state.product)
  const dispatch = useDispatch()

  const { image, title, price, category, description } = product

  const fetchProductDetails = useCallback(async () => {
    let res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.error(err))

    dispatch(selectedProduct(res.data))
  }, [dispatch, productId])

  useEffect(() => {
    if(productId && productId !== "") fetchProductDetails()

    return () => dispatch(removeSelectedProduct())
  }, [productId, fetchProductDetails, dispatch]);

  return (
    <div className="product-wrapper">
      <div className="product">
      {Object.keys(product).length === 0
        ? (<div>Loading</div>)
        : (<>
          <img src={image} alt="product" />
          <div className="product-body">
            <div className="product-description">
              <h3>{title}</h3>
              <p>$ {price}</p>
              <p>{category}</p>
              <p>{description}</p>
            </div>

            <div className="btn-grp">
              <button className="btn-decrement">-</button>

              <div className="product-count">0</div>

              <button className="btn-increment">+</button>
            </div>
          </div>
        </>)
      }
      </div>
    </div>
  );
}