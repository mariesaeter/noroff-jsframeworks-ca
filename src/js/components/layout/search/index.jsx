import { useState } from "react";
import { useApi } from "../../../hooks/api";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

// function SearchProduct() {

//   return (

//   )
// }

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

  // const [state, setstate] = useState({
  //   searchword: " ",
  //   list: [],
  // });
  // const handleChange = (e) => {
  //   const searchResult = products.filter((product) => {
  //     if (e.target.value === "") {
  //       return products;
  //     }
  //     return product.title.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setstate({
  //     searchword: e.target.value,
  //     list: searchResult,
  //   });
  // };

  return (
    <div className="m-l-20 m-r-20 display-flex-column">
      <h1>Search</h1>
      <input
        type="text"
        value={searchItem}
        onChange={handleChange}
        placeholder="Type to search"
      />
      <ul>
        {filteredItems.map((product) => (
          <li key={product.id}>
            <Link
              to={`/${product.id}`}
              className="product-cart m-b-10 display-flex"
            >
              <img
                className="product-img product-cart-img"
                src={product.imageUrl}
                alt={product.title}
              />
              <h2 className="product-card-title m-l-10">{product.title}</h2>
              <div className="product-price">
                <p>{product.price} kr</p>
                <p>{product.discountedPrice} kr</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* <form className="display-flex-column">
        <input
          placeholder="search"
          type="search"
          value={state.searchword}
          onChange={handleChange}
        />
      </form>
      <ul>
        {state.searchword === ""
          ? ""
          : state.list.map((product) => {
              return <li key={product.title}>{product.title}</li>;
            })}
      </ul> */}
    </div>
  );
}
