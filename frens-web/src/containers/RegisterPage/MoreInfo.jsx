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
import Interests from "./Interests";

import AddMargin from "../../components/AddMargin";
const InterestBox = styled.div`
  // width: 500px;
  // min-height: 600px;
  height: 4rem;
  width: 20rem;
  min-width: 28rem;
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
                <InterestBox>
                    <Interests></Interests>
                </InterestBox>
                <AddMargin direction="vertical" margin={10} />
                <SubmitButton onClick = {switchToInFo}> Back </SubmitButton>
                <AddMargin direction="vertical" margin={10} />
                <SubmitButton> I am ready! </SubmitButton>
                <AddMargin direction="vertical" margin={10} />
                <MutedLink>
                    Already have an account?
                    <BoldLink to={{ pathname: '/signin', state: { theme: `poo`}}}>
                        Sign in!
                    </BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>

    );
};

export default MorInfo;
export {InterestBox};