import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {

  return (
    <nav>
      <Link to="/">
        <p className="company-name">o-Shopp</p>
      </Link>
    </nav>
  );
}