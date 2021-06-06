import Fren from "./Fren.js";
import "../css/FrensList.css";

function FrensList(props) {
    return (
        <div className="frens-list">
            {props.frensList.map((fren) => {
                return (
                    <Fren
                        key={fren.name}
                        name={fren.name}
                        imgURL={fren.imgURL}
                        contactInfo={fren.contactInfo}
                        showModal={props.showModal}
                    />
                );
            })}
        </div>
    );
}

export default FrensList;
