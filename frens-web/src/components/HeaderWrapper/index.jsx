import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.header`
    width: 100%:
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: left;
    flex-grow: 0.5;
    z-index: 2;
    position: absolute:
    top: 0;
`;

export function HeaderWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
