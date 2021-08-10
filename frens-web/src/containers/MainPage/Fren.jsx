import styled from "styled-components";
import { BsChat } from "react-icons/all";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatPop,
  socketOff,
  chatUser,
  setChatRoom,
  clearChatRoom,
} from "../../actions";

const FrensContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  padding: 15px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    // width: 20%;
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
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
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
  height: 50vw;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
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

function createRoom(mainUser, selectedUser) {
  if (
    mainUser !== undefined &&
    selectedUser !== undefined &&
    selectedUser !== null
  ) {
    const mainId = mainUser._id.toString();
    const selectedId = selectedUser._id.toString();
    for (let i = 0; i < mainId.length; i++) {
      if (mainId.charAt(i) > selectedId.charAt(i)) {
        return mainId.concat(selectedId);
      } else if (mainId.charAt(i) < selectedId.charAt(i)) {
        return selectedId.concat(mainId);
      }
    }
  }
}

function Fren(props) {
  let socket = props.socket;
  const isPop = useSelector((state) => state.isPop);
  const currentUser = useSelector((state) => state.loginUser);
  const chatRoom = useSelector((state) => state.chatRoom);
  // const chatUser = useSelector(state => state.chatUser);

  const dispatch = useDispatch();

  // When we have users
  const name = currentUser.username;

  function handleClick() {
    props.openModal(props.name, props.imgURL, props.contactInfo);
  }

  function handleChatClick() {
    dispatch(chatPop());
    dispatch(chatUser(props.user));
    const room = createRoom(currentUser, props.user);

    if (!chatRoom) {
      console.log("SHUD MAKE NEW ROOM");
      socket.emit("join", { id: currentUser._id, name, room }, () => {
        // console.log(`%%%%%% ${name} JOINED ROOM ${room}`);
        dispatch(setChatRoom(room));
        //  alert(error);
      });
    } else {
      // socket.disconnect()
      // socket.off();
      // await setRoom(createRoom(currentUser, chatUser));
      dispatch(clearChatRoom());
      socket.emit("leave", { id: currentUser._id, room });
    }
  }

  return (
    <FrensContainer className="frens-container">
      <FrensWrapper className="frens-wrapper">
        <FrensImg className="frens-img" src={props.imgURL} alt={props.name} />
        <FrensName className="frens-name" onClick={handleClick}>
          {props.name}
        </FrensName>

        <ChatButton onClick={handleChatClick}>
          <BsChat size={38} />
        </ChatButton>
      </FrensWrapper>
    </FrensContainer>
  );
}

export default Fren;
