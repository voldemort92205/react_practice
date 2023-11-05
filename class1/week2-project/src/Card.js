import React from "react"

const figPathPrefix = "./images/"
const starIconPath = "./images/star.png"
export default function Card(props) {
    const {item} = props
    const imgPath = figPathPrefix + item.coverImg
    let badgeText;
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card-single">
            {badgeText && <div className="card-openSpots">{badgeText}</div>}
            <img src={imgPath} alt="Katie Zaferes" className="card-photo" />
            <div className="card-text-section">
                <p className="card-text">
                    <img src={starIconPath} alt="star-icon" className="card-star-icon" />
                    {item.stats.rating} <span className="light-text">({item.stats.reviewCount})•{item.location}</span>
                </p>
                <p className="card-text">{item.title}</p>
                <p className="card-text"><span className="bold-text">From ${item.price}</span> / person</p>
            </div>
        </div>
    )
}