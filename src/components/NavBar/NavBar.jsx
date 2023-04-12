import "./NavBar.style.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link className="nav-link" to={"/home"}>Home</Link>
      <Link className="nav-link" to={"/yourMovies"}>Your movies</Link>
      <Link className="nav-link" to={"/profile"}>Profile</Link>
    </nav>
  );
};

export default NavBar;
