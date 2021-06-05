import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {toggleDM} from "../actions";

import styled from 'styled-components'

import star from "../images/ic_star_half_24px@2x.png";


// CSS for this section
import '../App.css';

const ToggleContainer = styled.div`
    padding: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
`
const ImgWrapper = styled.img`
    float: right;
    border-radius: 50%;
    border: 3px solid;
    padding: 0.2rem;
    
    &:hover{
        padding: 0.3rem;
        transition: 0.2s;
    }
`

function ToggleNM(props) {

    const dispatch = useDispatch();

    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    console.log(isDark);

    return <ToggleContainer>
        <ImgWrapper src={star} onClick={() => dispatch(toggleDM())} className="toggleWrapper"/>
    </ToggleContainer>
}

export default ToggleNM;