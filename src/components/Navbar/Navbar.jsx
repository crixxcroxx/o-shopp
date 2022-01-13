import { Link } from "react-router-dom";

import { useStore } from "../../store/store";

import "./navbar.css";

export default function Navbar() {
  const cart = useStore(state => state.cart)

  return (
    <nav>
      <Link to="/">
        <h3 className="company-name">o-Shopp</h3>
      </Link>

      <Link to="cart">{cart.length}</Link>
    </nav>
  );
}