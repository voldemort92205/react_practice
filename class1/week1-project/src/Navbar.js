import React from "react"

export default function Navbar(props) {
    
    return (
        <nav className={`nav-container  ${props.darkMode ? "dark": ""}`}>
            <div className="nav-container-left">
                <img src="./images/react-icon-small.png" alt="react-icon-logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className="nav-container-title">
                <h3>React Course - Project 1</h3>
            </div>

            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}