import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.footer`
    width: 100%:
    padding: 0;
    margin: 1rem;
    display: flex;
    flex-direction: reverse-row;
    align-self: flex-end;
    flex-grow: 0.5;

`

export function FooterWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
