const add_to_cart = "add_to_cart";
const clear_cart = "clear_cart";
const checkout_cart = "checkout_cart";

const CartReducer = (state, action) => {
  let cart;
  let productId;
  let newTotal;
  let newTotalDiscount;

  switch (action.type) {
    case add_to_cart:
      cart = [...state.cart];
      productId = cart.findIndex((product) => product.id === action.payload.id);

      if (productId === -1) {
        cart.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        cart = [
          ...cart.slice(0, productId),
          { ...cart[productId], quantity: cart[productId].quantity + 1 },
          ...cart.slice(productId + 1),
        ];
      }
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      newTotalDiscount = cart.reduce((currentTotalDiscount, product) => {
        currentTotalDiscount +=
          product.product.price * product.quantity -
          product.product.discountedPrice * product.quantity;
        return currentTotalDiscount;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        totalDiscount: newTotalDiscount,
        checkout: false,
      };

    case clear_cart:
      return { cart: [], total: 0, checkout: false };

    case checkout_cart:
      return { cart: [], total: 0, totalDiscount: 0, checkout: true };
    default:
      return state;
  }
};

export default CartReducer;
