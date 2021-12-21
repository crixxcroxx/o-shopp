import "./product.css";

export default function Product() {

  return (
    <div className="product">
      <img src="#" alt="product" />
      <div className="product-body">
        <div className="product-description">
          <h3>product name</h3>
          <p></p>
        </div>

        <div className="btn-grp">
          <button className="btn-decrement">-</button>

          <div className="product-count">45</div>

          <button className="btn-increment">+</button>
        </div>
      </div>
    </div>
  );
}