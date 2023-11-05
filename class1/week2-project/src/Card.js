import React from "react"

const figPathPrefix = "./images/"
const starIconPath = "./images/star.png"
export default function Card(props) {
    const imgPath = figPathPrefix + props.img
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card-single">
            {badgeText && <div className="card-openSpots">{badgeText}</div>}
            <img src={imgPath} alt="Katie Zaferes" className="card-photo" />
            <div className="card-text-section">
                <p className="card-text">
                    <img src={starIconPath} alt="star-icon" className="card-star-icon" />
                    {props.rating} <span className="light-text">({props.reviewCount})•{props.location}</span>
                </p>
                <p className="card-text">{props.title}</p>
                <p className="card-text"><span className="bold-text">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}