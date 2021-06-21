import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDM } from "../actions";

import styled from "styled-components";

// CSS for this section
import "../App.css";

const ToggleContainer = styled.div`
    margin: auto 0;
    padding: 0 2rem;
    position: relative;
    // bottom: 0;
    // right: 0;
    
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
    }
    // box-shadow: 0px 0px 1rem rgba(255, 230, 0, 0.8);
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
<<<<<<< HEAD
    }
=======
        transition: 0.5s;
      }
>>>>>>> 54a07e09c21e6ec695baa656cc9f70be69f0af2c
`

function ToggleNM(props) {
    const dispatch = useDispatch();

    // Check redux isDark state
    const isDark = useSelector((state) => state.isDark);

    return (
        <ToggleContainer>
            <OuterCircle className="toggle-body">
                <InnerCircle onClick={() => dispatch(toggleDM())} className="toggle-knob"/>
            </OuterCircle>
        </ToggleContainer>
    );
}

export default ToggleNM;
