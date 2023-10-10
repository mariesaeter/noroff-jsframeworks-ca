import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/search">
            <img src="/icons/Search.png" alt="Search" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="/icons/shopping-cart.png" alt="Shopping cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
