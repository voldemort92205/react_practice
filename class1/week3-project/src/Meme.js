import React from "react"
import memesData from "./memesData.js"

export default function Meme() {
    const [memeInfo, setMemeInfo] = React.useState({url: "", alt: ""})

    function randomMemeImage () {
        const memeArray = memesData.data.memes
        const newIndex= Math.floor(Math.random() * memeArray.length)
        setMemeInfo(memeArray[newIndex])
    }
    return (
        <div>
            <div className="form-container">
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

                <button
                    className="form-button"
                    onClick={randomMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img
                className="meme-image"
                src={memeInfo.url}
                alt={memeInfo.name}
            />
        </div>
    )
}