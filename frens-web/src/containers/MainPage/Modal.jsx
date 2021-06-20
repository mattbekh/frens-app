import styled from "styled-components";
import topicList from "./topicDB.js";

const ModalContainer = styled.div`
  max-width: 720px;
  width: 80%;
  padding: 1rem;
  background: var(--black);

  position: fixed;
  top: calc(137px + 2rem);
  left: 50%;
  transform: translate(-50%);
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  font-size: 36px;
  transform: rotate(45deg);
  transition: 0.3s;
  transform-origin: 50% 50%;
  padding: 0;
  background: var(--black);
  color: white;

  &:hover {
    transform: rotate(135deg);
    cursor: pointer;
  }
`;

const ModalCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

const ModalImgWrapper = styled.div`
  width: 40%;
`;

const ModalImg = styled.img`
  width: 100%;
`;

const ModalTextWrapper = styled.div`
  width: 40%;
  padding: 15px;
  font-weight: 300;
`;

const ModalName = styled.h3`
  text-align: center;
  color: var(--yellow);
`;

const TopicLine = styled.h2`
  border-bottom: 2px solid var(--yellow);
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
`;

const RandomTopic = styled.p`
  color: white;
`;

function Modal(props) {
  const { topics } = topicList;
  // console.log("topics: ", topics);
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  let visible = "hidden";
  if (props.modal.visible) visible = "visible";

  function handleClick() {
    props.closeModal();
  }

  return (
    <>
      {props.modal.visible ? (
        <ModalContainer className="modal-container">
          <ModalCloseBtn onClick={handleClick} className="modal-close">
            +
          </ModalCloseBtn>
          <ModalCardContainer className="modal-card-container">
            <ModalImgWrapper className="modal-img-wrapper">
              <ModalImg
                className="modal-img"
                src={props.modal.imgURL}
                alt={props.modal.name}
              />
            </ModalImgWrapper>
            <ModalTextWrapper className="modal-text-wrapper">
              <ModalName className="modal-name">{props.modal.name}</ModalName>
              <p className="modal-info">{props.modal.contactInfo}</p>
              <TopicLine className="topic-line">
                Out of topic? Try this!
              </TopicLine>
              <RandomTopic className="random-topic">
                {randomTopic.topic}
              </RandomTopic>
            </ModalTextWrapper>
          </ModalCardContainer>
        </ModalContainer>
      ) : null}
    </>
  );

}

export default Modal;
