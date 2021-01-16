import logo from './logo.svg';
import './App.css';

function App() {    
    const deepai = require('deepai');

    deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

    async function getTextToImage(){
        var resp = await deepai.callStandardApi("text2img", {
            text: "YOUR_TEXT_URL",
        });
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
                    onClick={() => getTextToImage()}
                > 
                    Pray
                </button>
            </div>
            <div className="footer"> </div>
        </div>
    );
}

export default App;
