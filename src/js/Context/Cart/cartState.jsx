import { useContext, useEffect, useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItems");
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total: 0,
  checkout: false,
};

const CartState = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, product) => {
    dispatch({ type: "add_to_cart", payload: { id, product } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "remove_from_cart", id });
  };

  const increase = (payload) => {
    dispatch({ type: "increase", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "decrease", payload });
  };

  const clearCart = () => {
    dispatch({ type: "clear_cart" });
  };

  const checkout = () => {
    dispatch({ type: "checkout" });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
        increase,
        decrease,
        checkout,
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
