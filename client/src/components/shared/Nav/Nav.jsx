import "./Nav.css";
function Nav(props) {
  const { user, handleLogout } = props;
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Nav;
