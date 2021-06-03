import React from "react";
import styled from 'styled-components'

import { Link } from "react-router-dom";

// CSS for this section
import '../App.css';
const NavContainer = styled.nav`
    color: var(--yellow);
    width: 100%;
    background: var(--black);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const UlWrapper = styled.ul`
    display: inline-flex;
    max-width: 80%;
    justify-content: space-between;
    flex: 1;
    margin: 0;
`;

const LiWrapper = styled.li`
    display: inline-block;
    padding: 1rem;
    border-radius: 5px;

    &:hover {
        background-color: var(--yellow);
        color: var(--black);
    }
`;


function Nav(props) {
    return <NavContainer>
        <UlWrapper>
            <Link to="/">
                <LiWrapper>Home</LiWrapper>
            </Link>
            <Link to="/profile">
                <LiWrapper>Profile</LiWrapper>
            </Link>
            <Link to="/inbox">
                <LiWrapper>Inbox</LiWrapper>
            </Link>
            <Link to="/contact">
                <LiWrapper>Contact Us</LiWrapper>
            </Link>         
        </UlWrapper>
    </NavContainer>
}

export default Nav;