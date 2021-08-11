import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {chatPop} from "../../../redux/actions";

import closeIcon from "../../../images/closeIcon.png";
import onlineIcon from "../../../images/onlineIcon.png";

const InfoBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    background-color: #FFBE0B;
`;

const LeftInner = styled.div`
flex: 0.5;
display: flex;
align-items: center;
margin-left: 5%;
color: white;
& > h3 {
    color: black;
    margin-left: 5%;
}
`;

const RightInner = styled.div`
display: flex;
flex: 0.5;
justify-content: flex-end;
margin-right: 5%;
`;

const InfoBar = ({ room, name, disconnectSocket }) => {
    let roomName;
    if(!name) {
        roomName = "Test Name";
    } else {
        roomName = name;
    }
    
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(chatPop());
        disconnectSocket();
    }

    return (
        <InfoBarContainer>
            <LeftInner>
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{roomName}</h3>
            </LeftInner>
            <RightInner>
                <img src={closeIcon} alt="close" onClick= {()=> handleClick()}/>
            </RightInner>
        </InfoBarContainer>
    );
}

export default InfoBar;