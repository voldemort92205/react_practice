import React from "react"

const PhotoGrid = "./images/photo-grid.png"
export default function Hero() {
    return (
        <div className="hero-section">
            <img src={PhotoGrid} alt="hero gallery" className="hero-gallery" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}