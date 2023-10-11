import { Link } from "react-router-dom";
import { Nav } from "../nav";

export function Header() {
  return (
    <header className="p-l-20 p-r-20">
      <Link to="/">
        <img src="/logo.png" alt="trendtrove logo" className="logo" />
      </Link>
      <Nav />
    </header>
  );
}
