import React from "react";
import "./Button.css";

const Button = (props) => {

    return <div>
        <button type = "button" className = "btn-style" onClick= {props.searchIt}>Create a Card</button>
    </div>;

}

export default Button;