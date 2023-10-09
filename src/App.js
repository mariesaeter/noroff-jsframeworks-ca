import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/styles.css";
import {
  Cart,
  Contact,
  Home,
  Layout,
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
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
      <h1>Title</h1>
      <p>This is some body text</p>
    </div>
  );
}

export default App;
