import React from 'react';
import styled from "styled-components";



const Block = styled.div`
  position: relative;
  width: min-content;
  height:600px;
  width: 800px;
  background: white;
`

function ChatBlock(props) {
    return (props.popChat) ? (
        <Block/>
    ) : "";
}

export default ChatBlock;