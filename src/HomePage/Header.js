import React, {useState} from "react";
import image from '../Images/RMSP.png'
import Modal from './Modal'

function DisplayHeader(){
    const [modalStart, setModalState] = useState(false)

    const openModal = () => {
        setModalState(true)
    };

    const closeModal = () => {
        setModalState(false)
    };

    return <>
        <ul className="header">
            <li>
                <img src = {image}/>
            </li>
            <li onClick={openModal}>How do I play..?</li>
            <li>Source Code</li>
            <li>About the Developer</li>
        </ul>
        <Modal isOpen={modalStart} onClose={closeModal}>
            <h2>How to play Rate my SFU professor</h2>
            <p>Welcome to the ultimate SFU Professor ranking challenge!</p>
            <p>Step 1: Select a Faculty</p>
            <p>
                Step 2:
                Simply click on the professor you believe should advance to the next round.
                The winner will move on, and you'll continue until only one professor remains!
            </p>
        
        </Modal>       
    </>
}

export default DisplayHeader