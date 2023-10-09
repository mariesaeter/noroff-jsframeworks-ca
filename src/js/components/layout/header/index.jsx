import { Link } from "react-router-dom";
import { Nav } from "../nav";

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/logo.png" alt="trendtrove logo" />
      </Link>
      <Nav />
    </header>
  );
}
