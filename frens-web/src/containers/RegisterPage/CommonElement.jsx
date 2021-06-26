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
  width: 50%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  font-size: 15px;
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`

export const Label = styled.label`
  color: #010101;
  align-items: start;
  font-size: 25px;
  font-weight: 600;
  margin: 5px;
  float: left;
`

export const SubmitButton = styled.button.attrs({
    type: 'submit',
    value: 'Submit'
})`
  width: 50%;
  padding: 20px;
  margin-top: 1em;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  &:hover {
    filter: brightness(1.5);
  }
`;

export const NormalButton = styled.button`
  width: 50%;
  padding: 20px;
  margin-top: 1em;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  &:hover {
    filter: brightness(1.5);
  }
`;

export const MutedLink = styled.div`
  font-size: 13px;
  color: #8C2F00;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled(Link)`
  font-size: 13px;
  color: #FA2B07;
  font-weight: 800;
  text-decoration: none;
  margin: 0 4px;
`;