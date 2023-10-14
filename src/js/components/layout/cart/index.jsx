import { useContext } from "react";
import CartContext from "../../../Context/Cart/cartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, totalDiscount, clearCart, checkoutCart } =
    useContext(CartContext);

  // const productList = cart.map(products => products.product);

  console.log(cart);
  console.log(total);

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
                <p>{cartItem.product.price * cartItem.quantity} kr</p>
                <p>{cartItem.product.discountedPrice * cartItem.quantity} kr</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clearCart}>Clear cart</button>

      <div className="display-grid justify-end product-card-general p-10">
        <div>Discount </div>
        <p>- {totalDiscount} kr</p>
        <div className="text-bold">Total </div>
        <p className="text-bold">{total} kr</p>
      </div>
      <Link to="checkout-success">
        <button onClick={checkoutCart} className="primary-button">
          checkout
        </button>
      </Link>
    </div>
  );
}
