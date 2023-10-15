import { useContext, useEffect, useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";

export const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItems");
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const sum = () => {
  let localCartData = localStorage.getItem("cartItems");
  if (!localCartData) {
    return 0;
  } else {
    const cartData = JSON.parse(localCartData);
    let newTotal = cartData.reduce((currentTotal, product) => {
      currentTotal += product.product.discountedPrice * product.quantity;
      return currentTotal;
    }, 0);
    return newTotal;
  }
};

const sumDiscount = () => {
  let localCartData = localStorage.getItem("cartItems");
  if (!localCartData) {
    return 0;
  } else {
    const cartData = JSON.parse(localCartData);
    let newTotalDiscount = cartData.reduce((currentTotalDiscount, product) => {
      currentTotalDiscount +=
        product.product.price * product.quantity -
        product.product.discountedPrice * product.quantity;
      return currentTotalDiscount;
    }, 0);
    return newTotalDiscount;
  }
};

const initialState = {
  cart: getLocalCartData(),
  total: sum(),
  totalDiscount: sumDiscount(),
  checkout: false,
};

const CartState = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, product) => {
    dispatch({ type: "add_to_cart", payload: { id, product } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "remove_from_cart", payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: "increase", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "decrease", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "clear_cart" });
  };

  const checkoutCart = () => {
    dispatch({ type: "checkout_cart" });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        totalDiscount: state.totalDiscount,
        addToCart,
        removeFromCart,
        clearCart,
        increase,
        decrease,
        checkoutCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartState, useCartContext };
