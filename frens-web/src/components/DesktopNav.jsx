import logo from "../images/Frens-2.png";
import Navbar from "./Navbar";
import styled from "styled-components";

const NavDesktop = styled.nav`
    background-color: black;
    border-bottom: 4px solid var(--primary-color);

    .nav-inner {
        width: 100%;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    .logo-container img {
        width: 200px;
        padding: 10px 10px;
        position: relative;
    }

    @media all and (max-width: 480px) {
        display: none;
    }
`;

function DesktopNav() {
    return (
        <NavDesktop className="nav-desktop">
            <div className="max-container nav-inner">
                <div className="logo-container">
                    <a href="/index.html"></a>
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
                <Navbar />
            </div>
        </NavDesktop>
    );
}

export default DesktopNav;
