import { useParams } from "react-router-dom";

import "./product.css";

export default function Product() {
  const { id: productId } = useParams()

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