import React from "react";
import Fren from "./Fren";
import styled from "styled-components";

const FrensWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
`;

function FrensList(props) {
    return (
        <FrensWrap className="frens-list">
            {props.frensList.map((fren) => {
                return (
                    <Fren
                        key={fren.name}
                        name={fren.name}
                        imgURL={fren.imgURL}
                        contactInfo={fren.contactInfo}
                        openModal={props.openModal}
                    />
                );
            })}
        </FrensWrap>
    );
}

export default FrensList;
