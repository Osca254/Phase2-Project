import React from "react";
import "./About.css";
import myImage from "../Images/evening-houses-skyscrapers-qatar-5k-g2-1024x768.jpg"
import myImage2 from "../Images/wai-tan-shanghai-china-world-5k-dy-1024x768.jpg"
function About(){
    return (
        <div>
            <div className="mainContainer">    
                <div className="containerA">
                    <div className="containerA1">
                        <img src={myImage}/>
                    </div>
                    <div className="containerA2">
                    <h2>Okumu homes is a platform connecting home buyers to individuals selling their homes in various location.</h2>
                    </div>
                </div>
                <div className="containerB">
                    <div className="containerB1">
                        <h2>Known for transparency and accountability.We focus on delivering what is best.</h2>
                    </div>
                    <div className="containerB2">
                        <img src={myImage2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;