import { Link } from "react-router-dom";
import "./Nav.css";
function Nav(props) {
  const { user, handleLogout } = props;
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-title">
        DIGITAL TOOLBELT
      </Link>
      <Link className="nav-logout" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  );
}

export default Nav;
