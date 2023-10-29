import React from "react"
import KatieZaferes from "./images/katie-zaferes.png"
import starIcon from "./images/star.png"

export default function Card() {
    return (
        <div className="card-gallery">
            <div className="card-single">
                <img src={KatieZaferes} alt="Katie Zaferes" className="card-photo" />
                <div className="card-text-section">
                    <p className="card-text">
                        <img src={starIcon} alt="star-icon" className="card-star-icon" />    
                        5.0 <span className="light-text">(6)•USA</span>
                    </p>
                    <p className="card-text">Life lessons with Katie Zaferes</p>
                    <p className="card-text"><span className="bold-text">From $136</span> / person</p>
                </div>
            </div>
            
        </div>
    )
}