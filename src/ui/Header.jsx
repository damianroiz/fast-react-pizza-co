import { Link } from 'react-router-dom';
import SearchOder from '../features/order/SearchOder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOder />
      <Username />
    </header>
  );
}

export default Header;
