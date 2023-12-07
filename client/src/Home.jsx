import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ProfileCard.css'
import './css/EventCard.css'
import './css/home.css'
import {jwtDecode} from 'jwt-decode'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import EventCard from './components/EventCard'
import UpdateEventStatus from './middleware/UpdateEventStatus'

import { useEffect, useState } from 'react'

function App() {

  const API_URL = "http://localhost:3000";
  const [activity, setActivity] = useState([]);
  const [admin, setAdmin] = useState(false)

  const renderEvents = ()=>{
    fetch(`${API_URL}/api/event/`)
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
    UpdateEventStatus()
    renderEvents();
    const decoded = jwtDecode(localStorage.getItem('token'));
    console.log(decoded)
    if (decoded.role == "admin"){
      setAdmin(true)
    }
   }, [])

    return (
      <>
<div className="App__contents">
          <main className="Admin">
            {admin &&(
              <>
                <div className="Admin__nav">
                <StudTab/><ActTab/>
                </div>
              </>
            )}
            <h1 className="home_heading">Upcoming Events</h1>
            <section className='UpcomingEvents'>
            {activity &&
              activity
                .filter((item) => item.status === 'upcoming')
                .map((item, i) => (
                  <EventCard 
                    key={i} 
                    title={item.event_title} 
                    date={item.event_date}
                    location={item.event_loc}
                    id = {item.event_id}
                  />
                ))}
            </section>
          </main>
        </div>
        </>
  )
}

export default App