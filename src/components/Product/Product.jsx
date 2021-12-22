import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useStore from "../../store/store";

import "./product.css";

export default function Product() {
  const { id: productId } = useParams()

  const fetchProduct = useStore(state => state.fetchProduct)
  const removeProduct = useStore(state => state.removeProduct)
  const product = useStore(state => state.product)

  useEffect(() => {
    fetchProduct(productId)

    return () => removeProduct()
  }, [productId, fetchProduct]);

  return (
    <div className="product-wrapper">
      <div className="product">
      {Object.keys(product).length === 0
        ? (<div>Loading</div>)
        : (<>
          <img src={product.image} alt="product" />
          <div className="product-body">
            <div className="product-description">
              <h3>{product.title}</h3>
              <p>$ {product.price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
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