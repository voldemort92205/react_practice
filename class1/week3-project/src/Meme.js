import React from "react"
import memesData from "./memesData.js"

export default function Meme() {
    //const [memeInfo, setMemeInfo] = React.useState({url: "", alt: ""})
    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage () {
        const memeArray = allMemeImages.data.memes
        const newIndex= Math.floor(Math.random() * memeArray.length)
        setMeme(prev => ({
            ...prev,
            randomImage: memeArray[newIndex].url
        }))
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
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img
                className="meme-image"
                src={meme.randomImage}
            />
        </div>
    )
}