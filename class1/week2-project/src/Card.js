import React from "react"

const figPathPrefix = "./images/"
const starIconPath = "./images/star.png"
export default function Card(props) {
    const imgPath = figPathPrefix + props.img

    return (
        <div className="card-single">
            <img src={imgPath} alt="Katie Zaferes" className="card-photo" />
            <div className="card-text-section">
                <p className="card-text">
                    <img src={starIconPath} alt="star-icon" className="card-star-icon" />
                    {props.rating} <span className="light-text">({props.reviewCount})•{props.country}</span>
                </p>
                <p className="card-text">{props.title}</p>
                <p className="card-text"><span className="bold-text">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}