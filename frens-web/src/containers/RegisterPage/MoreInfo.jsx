import React, {useContext} from 'react';
import { CgProfile } from "react-icons/cg";
import {
    SubmitButton,
    Input,
    FormContainer,
    BoxContainer,
    Label,
    MutedLink,
    BoldLink, NormalButton,
} from "./CommonElement";
import {RegisterContext} from "./RegisterContext";
import styled from "styled-components/macro";
import {IconContext} from "react-icons";
import Interests from "./Interests";
import axios from "axios";

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





const MorInfo = ({user}) => {
    const {switchToSignup} = useContext(RegisterContext);
    console.log(user.email);
    console.log(user.password);

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/user',user)
    }

    return (
        <BoxContainer>
            <FormContainer onSubmit = {onSubmit} >
                <IconContext.Provider value={{size: '60px'}}>
                <CgProfile> </CgProfile>
                </IconContext.Provider>
                <p> Upload your photo <br/> Pick your Interest</p>
                <InterestBox>
                    <Interests user = {user}/>
                </InterestBox>
                <SubmitButton> I am ready! </SubmitButton>
            </FormContainer>
            <NormalButton onClick = {switchToSignup}> Back </NormalButton>
                <MutedLink>
                    Already have an account?
                    <BoldLink to={{ pathname: '/signin', state: { theme: `poo`}}}>
                        Sign in!
                    </BoldLink>
                </MutedLink>

        </BoxContainer>

    );
};

export default MorInfo;
export {InterestBox};