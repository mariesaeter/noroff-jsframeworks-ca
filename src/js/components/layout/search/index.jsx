import { useState } from "react";
import { useApi } from "../../../hooks/api";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ProductImgAndTitle } from "../../ProductImgAndTitle";

const url = "https://api.noroff.dev/api/v1/online-shop";

// inspired by:
// https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm
// https://www.makeuseof.com/react-search-bar-filters-data-create/

export function Search() {
  const { products } = useApi(url);

  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredProducts);
  };

  return (
    <>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="TrendTrove - Search page" />
      </Helmet>
      <div className="m-l-20 m-r-20 display-flex-column">
        <h1>Search</h1>
        <input
          type="text"
          value={searchItem}
          onChange={handleChange}
          placeholder="Type to search"
        />
        <ul className="m-t-15">
          {filteredItems.map((product) => (
            <li key={product.id}>
              <Link
                to={`/${product.id}`}
                className="product-cart m-b-10 display-flex justify-content-between"
              >
                <div className="display-flex">
                  <ProductImgAndTitle
                    imageUrl={product.imageUrl}
                    title={product.title}
                  />
                </div>
                <div className="product-price m-r-10">
                  <p>{product.price} kr</p>
                  <p>{product.discountedPrice} kr</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
