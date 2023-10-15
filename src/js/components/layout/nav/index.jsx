import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../Context/Cart/cartContext";

export function Nav() {
  const { cart } = useContext(CartContext);

  const sum = cart.reduce((accumulator, object) => {
    return accumulator + object.quantity;
  }, 0);

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
          <Link to="/cart" className="position-relative">
            <img src="/icons/shopping-cart.png" alt="Shopping cart" />
            <span className="cart-counter">{sum}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
