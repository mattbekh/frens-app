import { Link } from "react-router-dom";
import logo from "../images/Frens-2.png";
import "../css/Header.css";
import Profile from "./ProfilePage/Profile";

function Header() {
  return (
    <nav>
      <div className="logo-container">
        <a href="/index.html"></a>
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <ul id="menu-list">
        <li>
          <Link to="/" className="header-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/Profile" className="header-links">
            Profile
          </Link>
        </li>
      </ul>

      <div className="menu-icon" id="menu-bar">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
}

export default Header;
