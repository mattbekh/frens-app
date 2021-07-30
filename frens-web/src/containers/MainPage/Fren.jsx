import styled from "styled-components";
import {BsChat} from "react-icons/all";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {chatPop, chatUser} from "../../actions";

const FrensContainer = styled.div`
    height: 100%;
    position: relative;
    padding: 15px;
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media only screen and (min-width: 768px) {
        width: 20%;
    }
`;

const FrensImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    transition: 0.3s;
    object-fit: cover;
`;

const FrensName = styled.button`
    z-index: 1;
    opacity: 0;
    transition: 0.3s;
    color: white;
    font-weight: 400;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
`;

const ChatButton = styled.button`
  opacity: 0;
  display: flex;
  z-index: 1;
  width: min-content;
  border-style: hidden;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 60%;
  &:hover {
    border: 2px solid white;
  }
`;

const FrensWrapper = styled.div`
    width: 100%;
    height: 25vw;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
    overflow: hidden;

    &:hover ${FrensImg} {
        filter: brightness(50%);
    }

    &:hover ${FrensName} {
        opacity: 1;
    }
  
    &:hover ${ChatButton} {
    opacity: 1;
    }
  
    @media only screen and (min-width: 768px) {
        height: 25vw;
        max-height: 340px;
    }
`;

function Fren(props) {
    function handleClick() {
        props.openModal(props.name, props.imgURL, props.contactInfo);
    }

    function handleChatClick() {
        dispatch(chatPop()); 
        dispatch(chatUser(props.user));
        console.log(props.user);
    }

    const  isPop = useSelector(state => state.isPop);
    const  dispatch = useDispatch();
    return (
        <FrensContainer className="frens-container">
            <FrensWrapper className="frens-wrapper">
                <FrensImg className="frens-img" src={props.imgURL} alt={props.name} />
                <FrensName className="frens-name"onClick={handleClick}>{props.name}</FrensName>
                <ChatButton onClick = {handleChatClick}>  <BsChat size={38}/> </ChatButton>
            </FrensWrapper>
        </FrensContainer>
    );
}

export default Fren;
