import { rating } from "../rating";

export function reviews(productReviews) {
  if (typeof productReviews === "undefined") {
    return (
      <div className="review p-5 m-b-10">
        There are no reviews for this product yet
      </div>
    );
  }
  if (productReviews.length === 0) {
    return (
      <div className="review p-5 m-b-10">
        There are no reviews for this product yet
      </div>
    );
  }

  return (
    <div>
      {productReviews.map((review) => (
        <div className="review p-5 m-b-10" key={review.id}>
          <div className="display-flex justify-content-between">
            <p className="review-username">{review.username}</p>
            <span className="product-rating">{rating(review.rating)}</span>
          </div>
          <p className="review-description">{review.description}</p>
        </div>
      ))}
    </div>
  );
}
