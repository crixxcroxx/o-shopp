import { Link } from "react-router-dom";

import BtnGrp from "../BtnGrp";

import { useStore } from "../../store/store";

import "./cart.css";

export default function Cart() {
  const cart = useStore(state => state.cart)

  return (
    <div className="cart">
      {cart.map(item =>
        <div>
          <div className="cart-item">
            <img src={item.image} alt={item.title} />

            <div className="cart-desc">
              <Link to={`/${item.id}/${item.title}`} key={item.title}>
                {item.title}
              </Link>
              <BtnGrp />
            </div>

            <div>
              <p>Subtotal</p>
              <p>x</p>
            </div>
          </div>
        </div>
      )}

      <div className="cart-total">
        {cart.length > 0
          ? <p>Total <span>x</span></p>
          : <p>No items in your cart</p>
        }
      </div>
    </div>
  );
}