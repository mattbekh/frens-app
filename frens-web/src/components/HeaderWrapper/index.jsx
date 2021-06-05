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
`;

export function HeaderWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
