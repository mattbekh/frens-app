import { useState } from "react";
import logo from "../images/Frens-2.png";
import Navbar from "./Navbar";
import styled from "styled-components";

const NavMobile = styled.nav`
    background-color: black;
    border-bottom: 4px solid var(--yellow);
    position: relative;

    .logo-container {
        width: 100%;
        text-align: center;
    }

    .logo-container img {
        width: 200px;
        padding: 10px 10px;
        position: relative;
    }

    li {
        display: block;
        padding: 12px;
        margin-left: 0%;
        border-top: 1.5px solid var(--yellow);
    }

    ul {
        width: 100%;
        /* height: 100vh; */
        position: absolute;
        top: 68px;
        left: 0;
        z-index: 1;

        text-align: center;
        list-style: none;
        padding: 0;
        background-color: black;
        display: none;
    }

    &&.active ul {
        display: block;
        margin-top: 10%;
    }

    .menu-icon {
        display: block;
        position: absolute;
        left: 30px;
        top: 22px;
        padding: 8px 8px 4px;
    }

    .menu-line {
        width: 30px;
        height: 3px;
        background-color: var(--yellow);
        margin-bottom: 5px;
        transition: 0.3s;
    }

    @media all and (min-width: 481px) {
        display: none;
    }
`;

function MobileNav() {
    const [hamburger, setHamburger] = useState(false);
    let isActive = "";
    if (hamburger) isActive = "active";

    function handleClick() {
        setHamburger(!hamburger);
    }

    return (
        <NavMobile className={`nav-mobile ${isActive ? "active" : ""}`}>
            <div className="max-container nav-inner">
                <div className="logo-container">
                    <a href="/index.html"></a>
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
                <Navbar />

                <div className={`menu-icon ${isActive ? "active" : ""}`} onClick={handleClick}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
            </div>
        </NavMobile>
    );
}

export default MobileNav;
