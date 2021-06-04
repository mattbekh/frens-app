import React from "react";
import styled from 'styled-components'

// CSS for this section
import '../App.css';

const SlipInContainer = styled.div`
    margin: 0 2rem;
`



function SlipIn(props) {
    return (

        <SlipInContainer>
            <h1 className="header-h1">{props.name}</h1>
        </SlipInContainer>

    );
    
}

export default SlipIn;