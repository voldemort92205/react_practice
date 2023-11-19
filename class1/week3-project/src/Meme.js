import React from "react"

export default function Header() {
    return (
        <form className="form-container">
            <input
                type="text"
                placeholder="left text"
                className="form-input"
            />
            <input
                type="text"
                placeholder="right text"
                className="form-input"
            />

            <button className="form-button">
                Get a new meme image 🖼
            </button>
        </form>
    )
}