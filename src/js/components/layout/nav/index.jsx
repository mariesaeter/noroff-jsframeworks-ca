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
          <Link to="/search">Search icon</Link>
        </li>
        <li>
          <Link to="/cart">Cart icon</Link>
        </li>
      </ul>
    </nav>
  );
}
