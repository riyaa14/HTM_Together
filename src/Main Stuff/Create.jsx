import React from "react";
//import Popup from "reactjs-popup";
//import 'reactjs-popup/dist/index.css';

function Create(props){

    return (props.trigger) ? (
    <div className="popup">

        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}><i class="fas fa-times-circle"></i></button>
            {props.children}
        </div>

    </div>

    ) : "" ;
}

export default Create;