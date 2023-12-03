import React from "react"

export default function Meme() {
    //const [memeInfo, setMemeInfo] = React.useState({url: "", alt: ""})
    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState({})

    function getMemeImage () {
        const newIndex= Math.floor(Math.random() * allMemeImages.length)
        setMeme(prev => ({
            ...prev,
            randomImage: allMemeImages[newIndex].url
        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemeImages(data.data.memes))
    }, [])

    function handleMemeText(event) {
        setMeme(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleMemeText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleMemeText}
                />

                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} />
                <h2 className="meme-text meme-top">{meme.topText}</h2>
                <h2 className="meme-text meme-bottom">{meme.bottomText}</h2>
                <h2></h2>
            </div>
        </div>
    )
}