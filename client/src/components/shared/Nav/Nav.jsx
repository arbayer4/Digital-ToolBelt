import { Link } from "react-router-dom";
import Burger from "./Burger";
import "./Nav.css";
function Nav(props) {
  const { user, handleLogout } = props;

  const authenticatedOptions = (
    <div className="right">
      <Link className="right-links" to="/">
        My Projects
      </Link>
      <Link className="right-links" to="/add-project">
        Add Project
      </Link>
      <Link className="right-links" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
  const unauthenticatedOptions = (
    <Link className="right-links" to="/login">
      Login
    </Link>
  );
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-title">
        DIGITAL TOOLBELT
      </Link>
      <div className="right">
        {user ? <Burger handleLogout={handleLogout} /> : unauthenticatedOptions}
      </div>
    </nav>
  );
}

export default Nav;
