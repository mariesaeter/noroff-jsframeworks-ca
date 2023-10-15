import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/styles.css";
import {
  Cart,
  Contact,
  Home,
  Layout,
  Product,
  RouteNotFound,
  Search,
  CheckoutSuccess,
} from "./js/components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/checkout-success" element={<CheckoutSuccess />} />
        <Route path=":id" element={<Product />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
