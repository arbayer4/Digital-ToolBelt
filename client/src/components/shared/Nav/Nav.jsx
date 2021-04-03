import { Link } from "react-router-dom";
import "./Nav.css";
function Nav(props) {
  const { user, handleLogout } = props;

  const authenticatedOptions = (
    <Link className="right-links" onClick={handleLogout}>
      Logout
    </Link>
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
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  );
}

export default Nav;
