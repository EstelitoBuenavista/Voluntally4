import './css/style.css'
import './css/Register.css'
import './css/Event.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PopUp from './components/Popup'

function App() {

    const API_URL = "http://localhost:3000";
    const [buttonPopUp, setbuttonPopUp] = useState(false)
    const [prop,setActivity] = useState({})
    const {id} = useParams()


    const renderEvent = ()=>{
        fetch(`${API_URL}/api/event/${id}`)
          .then(response => response.json())
          .then(data => {
            setActivity(data)
            console.log(data)
          })
          .catch(error => {
            console.log("Error:", error);
          });
      }

      useEffect(() => {
        renderEvent();
       }, [id])

    return (
        <>
    <div className='Event'>
            <div className="Heading">
                <div className="Title">
                    <h1 className="EventTitle">{prop.data && prop.data.event_title}</h1>
                    <h1 className="Points">{prop.data && prop.data.CES_points} CES Points</h1> 
                </div>
                <div className="Event_Info">
                    <h3 className="EventDate">Event Date: {prop.data && prop.data.event_date ? prop.data.event_date.split("T")[0]: "No Date"} </h3>
                    <h3 className="EvenLoc">Event Location: {prop.data && prop.data.event_loc} </h3>
                 </div>
            </div>

           

            <div className="About">
                <h1 className="AboutTitle">What is the event about?</h1>

                <p className='Desc'>{prop.data && prop.data.event_desc}</p>
                
                <div className='button'>
                    <button className="Register" onClick={()=> setbuttonPopUp(true) }>Register</button>
                </div>
                
                <PopUp 
                trigger = {buttonPopUp} 
                setTrigger = {setbuttonPopUp}
                title = "By clicking ACCEPT, "
                text = "you confirm your commitment to this event, and your name will be permanently added to the attendee list. Once accepted, attendance is mandatory, and backing out after confirmation is not permissible. Your presence and active participation will be expected. You will only receive the points AFTER the event. ">    
                </PopUp>           
            </div></div>
        </>
    )


}

export default App