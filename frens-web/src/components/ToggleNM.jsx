import React from "react";
import { useDispatch } from "react-redux";
import { toggleDM } from "../redux/actions";

import styled from "styled-components";

const ToggleContainer = styled.div`
    margin: auto 0;
    padding: 0 2rem;
    position: relative;
`;

const OuterCircle = styled.div`
    float: right;
    border-radius: 10px;
    width: 1rem;
    height: 2rem;
    border: 2px solid black;
    padding: 0.2rem;
    &:hover {
        filter: brightness(1.5);
        transition: 0.5s;
    }
`

const InnerCircle = styled.div`
    height: 50%;
    width: 100%;
    position: relative;
    border-radius: 50%;
    background-color: black;
    &:hover {
        filter: brightness(1.5);
        transition: 0.5s;
      }
`

function ToggleNM() {
    const dispatch = useDispatch();

    return (
        <ToggleContainer>
            <OuterCircle className="toggle-body">
                <InnerCircle onClick={() => dispatch(toggleDM())} className="toggle-knob"/>
            </OuterCircle>
        </ToggleContainer>
    );
}

export default ToggleNM;
