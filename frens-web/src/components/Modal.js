import "../css/Modal.css";
import topicList from "./topicDB.js";

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
        <div className={`modal-container ${visible}`}>
            <button onClick={handleClick} className="modal-close">
                +
            </button>
            <div className="modal-card-container">
                <div className="modal-img-wrapper">
                    <img className="modal-img" src={props.modal.imgURL} alt={props.modal.name} />
                </div>
                <div className="modal-text-wrapper">
                    <h3 className="modal-name">{props.modal.name}</h3>
                    <p className="modal-info">{props.modal.contactInfo}</p>
                    <h2 className="topic-line">Out of topic? Try this!</h2>
                    <p className="random-topic">{randomTopic.topic}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
