import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {    
    const deepai = require('deepai');
    
    deepai.setApiKey(process.env.REACT_APP_DEEPAI_KEY);

    // Holds the url to the image from deepai
    let [deepImageURL, setDeepImageURL] = useState("");

    // Track the loading
    let [isLoading, setIsLoading] = useState(false);

    async function getTextToImage(){
        setIsLoading(true);

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

        setIsLoading(false);

        console.log("prayed");
    }

    return (
        <div className="main">
            <div className="header"> </div>
            <div className="center"> 
                <div> 
                    welcome to church
                </div>
                <button
                    style={{width:"100px", margin:"0 auto"}}
                    onClick={() => {
                        if(!isLoading){
                            console.log("calling images");
                            getTextToImage()  
                        }
                    }}
                > 
                    Pray
                </button>
                <img 
                    className="deepImage"
                    src={deepImageURL}>
                </img>
            </div>
            <div className="footer"> </div>
        </div>
    );
}

export default App;
