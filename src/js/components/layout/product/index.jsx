import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/api";
import { rating } from "../rating";
import { reviews } from "./reviews";

const url = "https://api.noroff.dev/api/v1/online-shop";

export function Product() {
  let params = useParams();
  const { products, isLoading, isError } = useApi(`${url}/${params.id}`);
  if (isLoading) {
    return <div>Loading products</div>;
  }
  if (isError) {
    return <div>Error with loading products</div>;
  }

  return (
    <div className="product-page">
      <img
        src={products.imageUrl}
        alt={products.title}
        className="product-img"
      />
      <div className="m-l-20 m-r-20">
        <h1>{products.title}</h1>
        <p>{products.description}</p>

        <div className="product-price m-b-10">
          <p>{products.price} kr</p>
          <p>{products.discountedPrice} kr</p>
        </div>
        <div>
          <h2>Reviews</h2>
          <span className="product-rating">{rating(products.rating)}</span>
          <small>{products.rating} stars </small>
          {reviews(products.reviews)}
        </div>
      </div>
    </div>
  );
}
