import styled from "styled-components";
import { Link } from "react-router-dom";
export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;


export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Input = styled.input`
  width: 75%;
  height: 2.8rem;
  margin: 5px;
  font-size: 24px;
  text-align: center;

  font-size: 15px;
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`

export const Label = styled.label`
  
  // align-items: start;
  // float: left;
`

export const SubmitButton = styled.button`
  width: 76%;
  border-radius: 5px;
  font-weight: 900;
  height: 2.8rem;
  text-align: center; 
  margin: auto;
  border: none;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  &:hover {
    filter: brightness(1.5);
  }
`;


export const MutedLink = styled.div`
  font-size: 15px;
  color: #8C2F00;
  font-weight: 500;
  text-decoration: none;
  margin: 0 0 0 10rem;
`;

export const BoldLink = styled(Link)`
  font-size: 15px;
  color: #FA2B07;
  font-weight: 800;
  text-decoration: none;
  margin: 0 4px;
`;