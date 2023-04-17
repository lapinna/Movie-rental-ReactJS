import "./NavBar.style.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
const handleClick = () => {
  localStorage.removeItem("user")
}

  return (
    <nav>
      <Link className="nav-link" to={"/home"}>Home</Link>
      <Link className="nav-link" to={"/yourMovies"}>Your movies</Link>
      <Link className="nav-link" to={"/profile"}>Profile</Link>
      <Link className="nav-link" to={"/"} onClick={handleClick}>Logout</Link>
    </nav>
  );
};

export default NavBar;
