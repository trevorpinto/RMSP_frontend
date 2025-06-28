import React from "react";
import image from '../RMSP.png'

function DisplayHeader(){
    return <>
        <ul className="header">
            <li>
                <img src = {image}/>
            </li>
            <li>About</li>
            <li>Link to my Github!</li>
            <li>Learn More</li>
        </ul>       
    </>
}

export default DisplayHeader