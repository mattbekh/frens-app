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


const setUserInterest = (user, interest) => {
    console.log(interest)
    if(interest === "cooking") {
        user.interests.cooking = 1
    }
    if(interest === "music") {
        user.interests.music = 1
    }
    if(interest === "drawing") {
        user.interests.drawing = 1
    }
    if(interest === "workout") {
        console.log(user.interests.workout)
        user.interests.workout = 1
    }
}

const Interest = (props) => {
    const dispatch = useDispatch();
    return (
            <InterestTag onClick={()=> {
                dispatch(pickInterest(props.interest.id));
                setUserInterest(props.user,props.interest.name);
            }}>
                {props.interest.name}
            </InterestTag>
    );
};

export default Interest;
