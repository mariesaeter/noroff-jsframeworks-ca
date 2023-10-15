// import { useNavigate } from "react-router-dom";

const add_to_cart = "add_to_cart";
// const remove_from_cart = "remove_from_cart";
const clear_cart = "clear_cart";
const increase = "increase";
const decrease = "decrease";
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

    case increase:
      cart = [...state.cart];
      productId = cart.findIndex((product) => product.id === action.payload.id);

      cart = [
        ...cart.slice(0, productId),
        { ...cart[productId], quantity: cart[productId].quantity + 1 },
        ...cart.slice(productId + 1),
      ];

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

    case decrease:
      cart = [...state.cart];
      productId = cart.findIndex((product) => product.id === action.payload.id);

      console.log(productId);

      if (cart[productId].quantity > 1) {
        cart = [
          ...cart.slice(0, productId),
          { ...cart[productId], quantity: cart[productId].quantity - 1 },
          ...cart.slice(productId + 1),
        ];
      } else {
        cart = [...cart.slice(0, productId), ...cart.slice(productId + 1)];
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
    // case remove_from_cart:
    //   cart = [...state.cart];

    //   const findItem = cart.find(
    //     (cartItem) => cartItem.id === action.payload.id
    //   );

    // const findItem = cart.find((item) => item.id === action.payload.id);

    // cart = [...cart.splice(findItem, 1)];
    //   cart = [findItem];

    //   const isItemInCart = cart.find(
    //     (product) => product.id === action.payload.id
    //   );

    //   console.log(isItemInCart);
    //   productId = cart.findIndex((product) => product.id === action.payload.id);

    //   console.log(productId);
    //   if (productId !== -1) {
    //     cart = [...cart.splice(productId, 1)];
    //     cart = [...cart.slice(0, productId), ...cart.slice(productId + 1)];
    // cart.splice(...action.payload, 1);
    // cart = [
    //   ...cart.splice(productId, 1),
    //   { ...cart[productId], quantity: (cart[productId].quantity = 0) },
    // ];
    //   }

    //     if (cart[productId].quantity > 1) {
    //       cart = [
    //         ...cart.slice(0, productId),
    //         { ...cart[productId], quantity: cart[productId].quantity - 1 },
    //         ...cart.slice(productId + 1),
    //       ];
    //     }
    //   } else {
    //     cart = [...cart.slice(0, productId), ...cart.slice(productId + 1)];
    //   }

    // newTotal = cart.reduce((currentTotal, product) => {
    //   currentTotal += product.discountedPrice * product.quantity;
    //   return currentTotal;
    // }, 0);

    // return {
    //   ...state,
    //   cart: cart,
    //   total: newTotal,
    //   checkout: false,
    // };

    case clear_cart:
      // route to link to checkout success

      return { cart: [], total: 0, checkout: false };

    case checkout_cart:
      // cart = [...state.cart];
      // if (cart.length !== 0) {
      //   navigate("checkout-success");
      // }
      return { cart: [], total: 0, totalDiscount: 0, checkout: true };
    default:
      return state;
  }
};

export default CartReducer;
