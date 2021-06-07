import React, {useContext} from 'react';
import { CgProfile } from "react-icons/cg";
import {
    SubmitButton,
    Input,
    FormContainer,
    BoxContainer,
    Label,
    MutedLink,
    BoldLink,
} from "./CommonElement";
import {RegisterContext} from "./RegisterContext";
import styled from "styled-components/macro";
import {IconContext} from "react-icons";


const InterestBox = styled.div`
  // width: 500px;
  // min-height: 600px;
  height: 4rem;
  width: 20rem;
  min-width: 28rem;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1em;
  border: solid black;
  border-width: 5 5px;
  position: relative;
  overflow: hidden;
  background: none;
`;


const MorInfo = () => {
    const {switchToInFo} = useContext(RegisterContext);
    return (
        <BoxContainer>
            <FormContainer>
                <IconContext.Provider value={{size: '60px'}}>
                <CgProfile> </CgProfile>
                </IconContext.Provider>
                <p> Upload your photo <br/> Pick your Interest</p>
                <InterestBox></InterestBox>
                <SubmitButton onClick = {switchToInFo}> Back </SubmitButton>
                <SubmitButton> I am ready! </SubmitButton>
                <MutedLink>
                    Already have an account?
                    <BoldLink href = "#">
                        Sign in!
                    </BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>

    );
};

export default MorInfo;