import { Link } from "react-router-dom";
import styled from "styled-components";

//This styled components was learned from this:
//https://www.youtube.com/watch?v=GGkBwpxV7AI

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    /* padding: 18px 10px */
    color: rgb(220, 112, 73);
  }

  @media (max-width: 1080px) {
    flex-flow: column nowrap;
    background-color: rgb(244, 187, 68);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    margin: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    li {
      margin-top: 20px;
      font-size: 15px;
    }
  }
`;

function RightNav(props) {
  return (
    <Ul open={props.open}>
      <li>
        <Link
          className="right-links"
          to="/"
          onClick={() => props.setOpen(!props.open)}
        >
          My Projects
        </Link>
      </li>
      <li>
        <Link
          className="right-links"
          to="/add-project"
          onClick={() => props.setOpen(!props.open)}
        >
          Add Project
        </Link>
      </li>
      <li>
        <Link
          className="right-links"
          onClick={() => {
            props.setOpen(!props.open);
            props.handleLogout();
          }}
        >
          Logout
        </Link>
      </li>
    </Ul>
  );
}

export default RightNav;
