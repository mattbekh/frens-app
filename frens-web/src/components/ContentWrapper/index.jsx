import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-grow: 10;

`

export function ContentWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
