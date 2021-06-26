import React from 'react';
import {useSelector} from "react-redux";
import Interest from "./Interest";
import styled from "styled-components/macro";

const InterestBox = styled.div`
  // width: 500px;
  // min-height: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(2px,50px));
  grid-auto-rows: minmax(5px, auto);
  grid-gap: 2em;
`;
const Interests = ({user}) => {

    const interests = useSelector(state => state.interestManager)
    return (
        <InterestBox>
            {interests.map((interest)=>
                (<Interest key = {interest.id} interest = {interest} user = {user}/>))}
        </InterestBox>
    );
};

export default Interests;
