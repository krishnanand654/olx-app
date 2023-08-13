import Button, { Lang } from "../Button/Button";
import Search from "./Search/Search";
import { LoginButton } from "../Button/Button";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
        />
        <Search />
        <Lang />

        <LoginButton />
        <Button />
      </nav>
    </div>
  );
};

export default Navbar;
