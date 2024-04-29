import { Link } from "react-router-dom";
import SearchOder from "../features/order/SearchOder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOder />
    </header>
  );
}

export default Header;
