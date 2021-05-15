import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
    const deepai = require('deepai');

    deepai.setApiKey(process.env.REACT_APP_DEEPAI_KEY);

    // Holds the url to the image from deepai
    let [deepImageURL, setDeepImageURL] = useState("");

    //sets the class animation
    let [animateDrop, setAnimateDrop] = useState("");

    // Track the loading
    let [isLoading, setIsLoading] = useState(false);

    async function getTextToImage() {
        setIsLoading(true);
        setAnimateDrop("");

        // Get an DeepAI image
        var godImage = await deepai.callStandardApi("text2img", {
            text: "god "
        });
        console.log(godImage);

        // Pass it through another DeepAI filter
        var dreamedGod = await deepai.callStandardApi("deepdream", {
            image: godImage.output_url
        });
        console.log(dreamedGod);

        setDeepImageURL(dreamedGod.output_url);

        setAnimateDrop("slide-in-top");

        setIsLoading(false);

        console.log("prayed");
    }

    return (
        <div className="main">
            <div className="noise-wrapper">
                <div className="noise"> </div>
            </div>
            <div className="header"> </div>
            <div className="center">
                <div>
                    welcome to church
                </div>
                <button
                    style={{ width: "100px", margin: "0 auto" }}
                    onClick={() => {
                        if (!isLoading) {
                            console.log("calling images");
                            getTextToImage()
                        }
                    }}
                >
                    Pray
                </button>
                <img
                    className={"deepImage " + animateDrop}
                    src={deepImageURL}>
                </img>
                {isLoading ? <div className="loader"><CircularProgress color="white" /></div> : null}
            </div>
            <div className="footer">
                <form
                    style={{ width: "100px", margin: "0 auto" }}
                    action="https://pisslake.github.io/p5js-testground/">
                    <input type="submit" value="sin" />
                </form>
            </div>
        </div>
    );
}

export default App;
