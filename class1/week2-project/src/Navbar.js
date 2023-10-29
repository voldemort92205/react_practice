import React from "react"
import AirbnbLogo from "./images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbLogo} alt="airbnb log" className="nav-logo" />
        </nav>
    )
}