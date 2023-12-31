import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
export { Home } from "./home";
export { Contact } from "./contact";
export { Search } from "./search";
export { Cart } from "./cart";
export { RouteNotFound } from "./route-not-found";
export { Product } from "./product";
export { CheckoutSuccess } from "./checkoutSuccess";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
