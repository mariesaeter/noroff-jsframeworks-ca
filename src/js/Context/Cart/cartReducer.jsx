const add_to_cart = "add_to_cart";
const remove_from_cart = "remove_from_cart";
const clear_cart = "clear_cart";
// const increase = "increase";
// const decrease = "decrease";
// const checkout = "checkout";

const CartReducer = (state, action) => {
  let cart;
  let productId;
  let newTotal;

  //   let { product } = action.payload;

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
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        checkout: true,
      };

    case remove_from_cart:
      cart = [...state.cart];

      productId = cart.findIndex((product) => product.id === action.payload.id);

      if (productId !== -1) {
        if (cart[productId].quantity > 1) {
          cart = [
            ...cart.slice(0, productId),
            { ...cart[productId], quantity: cart[productId].quantity - 1 },
            ...cart.slice(productId + 1),
          ];
        }
      } else {
        cart = [...cart.slice(0, productId), ...cart.slice(productId + 1)];
      }

      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        checkout: true,
      };

    case clear_cart:
      return { cart: [], total: 0, checkout: false };

    default:
      return state;
  }
};

export default CartReducer;
