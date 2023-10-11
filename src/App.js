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
} from "./js/components/layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path=":id" element={<Product />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
