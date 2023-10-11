import { useApi } from "../../../hooks/api";
import { rating } from "../rating";

function Banner() {
  return (
    <div className="hero-banner display-flex-column justify-content-between">
      <div>
        <div className="hero-banner-heading m-t-30">Welcome to</div>
        <h1 className="hero-banner-title "> TrendTrove</h1>
        <p className="hero-banner-text">The trendy fashion store</p>
      </div>
      <div className="hero-banner-line"></div>
    </div>
  );
}
const url = "https://api.noroff.dev/api/v1/online-shop";

// function Product() {
//   return (

//   )
// }

function Products() {
  const { products, isLoading, isError } = useApi(url);
  if (isLoading) {
    return <div>Loading products</div>;
  }
  if (isError) {
    return <div>Error with loading products</div>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="product-card-img"
          />
          <h2 className="product-card-title">{product.title}</h2>
          <span className="product-rating">
            {rating(product.rating)} {product.rating}
          </span>
          <div className="center-flex product-card-price m-b-10">
            <p className="m-r-10">{product.price} kr</p>
            <p>{product.discountedPrice} kr</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <div>
      <Banner />
      <div className="m-l-20 m-r-20">
        <h1>Products</h1>
        <Products />
      </div>
    </div>
  );
}
