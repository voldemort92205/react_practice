import React from "react";



export default function Die(props) {
    return (
        <div
            className={`die-component ${props.isHeld === true ? "die-component-held" : ""}`}
            onClick={props.holdDice}>
            <h2 className="die-value">{props.value}</h2>
        </div>
    )
}