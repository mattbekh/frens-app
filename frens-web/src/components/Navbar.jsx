import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logUserOut } from "../redux/actions";

import ToggleNM from "./ToggleNM";

const HeaderNavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  & > li {
    &:hover {
      transform: scale(1.3);
      text-shadow: 2px 2px 5px orange, 0 0 35px rgb(250, 171, 97),
        0 0 5px rgb(250, 223, 68);
    }
  }
`;

const HeaderLink = styled(NavLink)`
  display: inline-block;
  margin-left: 2rem;
  display: block;
  color: #FFBE0B;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  transition: 0.3s ease-out;
  font-weight: 400;
  padding: "5px"

  
`;

let activeStyle = {
  backgroundColor: "#FFBE0B",
  color: "#000",
  borderRadius: "8px",
  padding: "5px"
}

function Navbar() {
  const dispatch = useDispatch();
  return (
    <HeaderNavUl id="menu-list">
      <li>
        <HeaderLink to="/Main" className="header-links" activeStyle={activeStyle}>
          Main Page
        </HeaderLink>
      </li>
      <li>
        <HeaderLink to="/Profile" className="header-links" activeStyle={activeStyle}>
          Profile
        </HeaderLink>
      </li>
      <li>
        <HeaderLink
          to="/"
          className="header-links"
          onClick={() => {
            dispatch(logUserOut());
            localStorage.clear();
          }}
        >
          Logout
        </HeaderLink>
      </li>
      <li>
        <ToggleNM />
      </li>
    </HeaderNavUl>
  );
}

export default Navbar;
