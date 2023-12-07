import React from "react"
import '../css/PopUp.css'
import ButtonAdd from "../components/ButtonAdd"
import close from '../img/Multiply.png'
import { Link } from "react-router-dom"


function App(props){

    return (props.trigger) ? (
        <>
            <div className="Pop-up">
                <div className="Inner">
                    <img className="close" src={close} onClick={()=> props.setTrigger(false)}></img>
                    <h1>{props.title}</h1>
                    {/* <p className="description">{props.text}</p> */}
                    <ButtonAdd link="/" text = "I accept"/>
                    </div>
            </div>
        
        </>
    ) : "";
}

export default App