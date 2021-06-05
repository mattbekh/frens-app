import React, { useState} from 'react'
import './Options.css'

function Options(props) {
    const [check, setCheck] = useState(false)
    return (
        <div>
            <div className="card-option">
                <input type="checkbox" value={props.option} checked={check}
                onClick={() => setCheck(!check)}/>
                {props.option}
                {/* <a href="https://www.google.com/">{props.option}</a> */}
                {/* <option value={props.option}>{props.option}</option> */}
                </div>
        </div>
    )
}

export default Options
