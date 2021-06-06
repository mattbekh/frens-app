import "../css/Fren.css";

function Fren(props) {
    function handleClick() {
        props.showModal(props.name, props.imgURL, props.contactInfo);
    }

    return (
        <div className="frens-container" onClick={handleClick}>
            <div className="frens-wrapper">
                <img className="frens-img" src={props.imgURL} alt={props.name} />
                <div className="frens-name">{props.name}</div>
            </div>
        </div>
    );
}

export default Fren;
