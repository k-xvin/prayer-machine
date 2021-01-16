import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {    
    const deepai = require('deepai');
    
    deepai.setApiKey(process.env.REACT_APP_DEEPAI_KEY);

    // Holds the url to the image from deepai
    let [deepImageURL, setDeepImageURL] = useState("");

    async function getTextToImage(){
        var resp = await deepai.callStandardApi("text2img", {
            text: "god "
        });
        setDeepImageURL(resp.output_url);
        console.log(resp);
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
                    onClick={() => getTextToImage()}
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
