import { useContext } from "react";
import CartContext from "../../../Context/Cart/cartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, totalDiscount, clearCart, checkoutCart } =
    useContext(CartContext);

  // const productList = cart.map(products => products.product);

  console.log(cart);
  console.log(total.toFixed(2));

  if (cart.length === 0) {
    return (
      <div className="m-l-20 m-r-20 text-center">
        <h1>Cart</h1>
        <p>Cart is empty</p>
        <Link to="/">
          <button className="primary-button">Go shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="m-l-20 m-r-20">
      <h1>Cart</h1>
      <div>
        {cart.map((cartItem) => (
          <div className="display-flex" key={cartItem.product.id}>
            <div className="product-cart m-b-10 display-flex justify-content-between">
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
              <div className="display-flex">
                <div className="p-5 ">{cartItem.quantity}</div>
                <div>
                  <button className="icon-button">
                    <img src="/icons/plus.png" alt="add item" />
                  </button>
                  <button className="icon-button">
                    <img src="/icons/minus.png" alt="subtract item" />
                  </button>
                </div>

                <div className="product-price m-l-15 m-r-10">
                  <p>{cartItem.product.price * cartItem.quantity} kr</p>
                  <p>
                    {cartItem.product.discountedPrice * cartItem.quantity} kr
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="display-grid justify-end product-card-general p-10">
        <div>Discount </div>
        <p>- {totalDiscount.toFixed(2)} kr</p>
        <div className="text-bold">Total </div>
        <p className="text-bold">{total.toFixed(2)} kr</p>
      </div>
      <button
        className="link-button icon-button m-t-20 m-b-20"
        onClick={clearCart}
      >
        Clear cart
      </button>
      <Link to="checkout-success">
        <button onClick={checkoutCart} className="primary-button">
          checkout
        </button>
      </Link>
    </div>
  );
}
