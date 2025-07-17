import React from "react";
import image from "../Images/1655938361292.jpg"
import imageTwo from "../Images/mmonagan.img.-990583746.png"

function DeathmatchUI(){

    const handleBrianWin = () => {
        alert('Winner is Brian!!');
    };

    const handleMichealWin = () => {
        alert('Winner is Micheal!')
    };

    return(<>
    <div className="dmContainer">
        <img src={image} className="exampleOne"
        onClick={handleBrianWin}
        />

        <h1> VS </h1>
        
        <img src = {imageTwo} className="exampleTwo"
            onClick={handleMichealWin}
        />
    </div>

    </>)
}

export default DeathmatchUI;