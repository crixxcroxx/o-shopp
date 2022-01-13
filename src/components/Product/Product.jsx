import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Btn from "../Btn";

import { useStore } from "../../store/store";

import "./product.css";

export default function Product() {
  const { id: productId } = useParams()

  const {
    fetchProduct,
    removeProduct,
    product,
    cart,
    addToCart,
    removeFromCart
  } = useStore(state => state)

  const [isOnCart, setIsOnCart] = useState(
    cart.findIndex(item => item.id === parseInt(productId)) < 0 ? false : true
  );

  const handleClick = () => {
    if(!isOnCart) {
      addToCart(product)
    } else {
      removeFromCart(product.id)
    }

    setIsOnCart(!isOnCart)
  }

  useEffect(() => {
    fetchProduct(productId)

    return () => removeProduct()
  }, [productId, fetchProduct, removeProduct]);

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

            <div onClick={handleClick}>
              <Btn>{!isOnCart ? "Add to Cart" : "Remove from Cart"}</Btn>
            </div>
          </div>
        </>)
      }
      </div>
    </div>
  );
}