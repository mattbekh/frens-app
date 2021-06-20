import styled from "styled-components";

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

const FrensName = styled.div`
    z-index: 1;
    opacity: 0;
    transition: 0.3s;
    color: white;
    font-weight: 400;
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

    @media only screen and (min-width: 768px) {
        height: 25vw;
        max-height: 340px;
    }
`;

function Fren(props) {
    function handleClick() {
        props.openModal(props.name, props.imgURL, props.contactInfo);
    }

    return (
        <FrensContainer className="frens-container" onClick={handleClick}>
            <FrensWrapper className="frens-wrapper">
                <FrensImg className="frens-img" src={props.imgURL} alt={props.name} />
                <FrensName className="frens-name">{props.name}</FrensName>
            </FrensWrapper>
        </FrensContainer>
    );
}

export default Fren;
