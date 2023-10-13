import { useContext } from "react";
import CartContext from "../../../Context/Cart/cartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // const productList = cart.map(products => products.product);

  console.log(cart);

  return (
    <div className="m-l-20 m-r-20">
      <h1>Cart</h1>
      <div>
        {cart.map((cartItem) => (
          <div className="display-flex" key={cartItem.product.id}>
            <div className="product-cart m-b-10 display-flex">
              <Link to={cartItem.id} className="display-flex">
                <img
                  className="product-img product-cart-img"
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.title}
                />
                <h2 className="product-card-title m-l-10">
                  {cartItem.product.title}
                </h2>
              </Link>

              <div className="p-10 ">{cartItem.quantity}</div>
              <div>
                <button className="icon-button">
                  <img src="/icons/plus.png" alt="add item" />
                </button>
                <button className="icon-button">
                  <img src="/icons/minus.png" alt="subtract item" />
                </button>
              </div>
              <div className="product-price">
                <p>{cartItem.product.price} kr</p>
                <p>{cartItem.product.discountedPrice} kr</p>
              </div>
            </div>
            <button
              value={cartItem.id}
              onClick={() => removeFromCart(cartItem.id)}
              className="icon-button"
            >
              <img src="/icons/delete.png" alt="delete item" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
