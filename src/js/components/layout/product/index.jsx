import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/api";
import { rating } from "../rating";
import { reviews } from "./reviews";

import { useCartContext } from "../../../Context/Cart/cartState";

const url = "https://api.noroff.dev/api/v1/online-shop";

// const AddToCart = ({ product }) => {
//   const { addToCart } = useCartContext();

//   const { id } = product;
// };

export function Product() {
  let params = useParams();
  const { products, isLoading, isError } = useApi(`${url}/${params.id}`);

  const product = products;

  const { addToCart } = useCartContext();

  const { id } = product;

  if (isLoading) {
    return <div>Loading products</div>;
  }
  if (isError) {
    return <div>Error with loading products</div>;
  }

  // function addToCart() {
  //   localStorage.setItem("cartItems", JSON.stringify(products));
  // }

  return (
    <div className="product-page" key={product.id}>
      <img src={product.imageUrl} alt={product.title} className="product-img" />
      <div className="m-l-20 m-r-20">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <div className="product-price m-b-10">
          <p>{product.price} kr</p>
          <p>{product.discountedPrice} kr</p>
        </div>
        <button
          onClick={() => addToCart(id, product)}
          className="primary-button"
        >
          Add to cart
          <img
            src="/icons/add-to-cart.png"
            alt="add to cart"
            className="icon-width-32 m-l-5"
          />
        </button>
        <div>
          <h2>Reviews</h2>
          <span className="product-rating">{rating(product.rating)}</span>
          <small>{product.rating} stars </small>
          {reviews(product.reviews)}
        </div>
      </div>
    </div>
  );
}
