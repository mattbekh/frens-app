import { Link } from "react-router-dom";
import logo from "../images/Frens-2.png";
import "../css/Header.css";

function Header() {
    return (
        <nav>
            <div className="logo-container">
                <a href="/index.html"></a>
                <img src={logo} alt="logo" className="logo-img" />
            </div>
            <ul id="menu-list">
                <li>
                    <Link to="/home" className="header-links">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="header-links">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/main" className="header-links">
                        My Account
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
