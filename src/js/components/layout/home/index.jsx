import { Link } from "react-router-dom";
import { useApi } from "../../../hooks/api";
import { rating } from "../rating";
import { Dots } from "../../dots";
import { Helmet } from "react-helmet";

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
    return (
      <div className="loader">
        <Dots />
      </div>
    );
  }
  if (isError) {
    return <div>There was an error when trying to fetch products</div>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/${product.id}`} key={product.id} className="product-card">
          <div className="product-card-img-container">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-card-img product-img"
            />
            <button className="primary-button product-button">
              view product
            </button>
          </div>
          <h2 className="product-card-title m-t-10">{product.title}</h2>
          <span className="product-rating">{rating(product.rating)}</span>
          <div className="center-flex product-price m-b-10">
            <p className="m-r-10">{product.price} kr</p>
            <p>{product.discountedPrice} kr</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="TrendTrove - Home page" />
      </Helmet>
      <div>
        <Banner />
        <div className="m-l-20 m-r-20 m-b-20">
          <h1>Products</h1>
          <Products />
        </div>
      </div>
    </>
  );
}
