import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {pickInterest} from "../../actions";
const InterestTag = styled.div`
  width: 20px;
  // color: #fff;
  font-size: 15px;
  font-weight: 600;
 
  //border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  // background: black;
  &:hover {
    filter: brightness(1.5);
  }`;

const Interest = (props) => {
    const dispatch = useDispatch();
    return (
            <InterestTag onClick={()=> dispatch(pickInterest(props.interest.id))}>
                {props.interest.name}
            </InterestTag>
    );
};

export default Interest;
