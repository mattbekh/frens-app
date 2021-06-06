import React, { useState, useEffect } from "react";
import "../css/Main.css";
import Modal from "./Modal.js";
import FrensList from "./FrensList.js";
import initialFrensList from "../database.json";

function Main() {
    const [frensList, setFrensList] = useState([]);

    const [modal, setModal] = useState({ visible: false, name: "", imgURL: "", contactInfo: "" });

    useEffect(() => {
        setFrensList(initialFrensList); //set frensList with initialFrensList
    }, []); // on first refresh

    // card click handler
    function showModal(name, imgURL, contactInfo) {
        let newModal = { ...modal };
        newModal.visible = true;
        newModal.name = name;
        newModal.imgURL = imgURL;
        newModal.contactInfo = contactInfo;
        setModal(newModal);
    }

    function closeModal() {
        let newModal = { ...modal };
        newModal.visible = false;
        setModal(newModal);
    }

    return (
        <div className="max-container">
            <div className="user-account-info">
                <h1>Hi, Monica! How you doin'~?</h1>
            </div>
            <h1>Time to find your people!</h1>
            <p>Here are frens who share similiar interest with you!</p>

            <FrensList frensList={frensList} showModal={showModal} />
            <Modal modal={modal} closeModal={closeModal} />
            <h1>Come back tomorrow and get some new matches!</h1>
        </div>
    );
}

export default Main;