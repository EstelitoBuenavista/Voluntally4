
import './css/index.css'
import './css/App.css'
import './css/Header.css'
import './css/Footer.css'
import mainLogo from './img/main-logo.png';
import profilePicture from './img/profile-picture.png';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UpdateEventStatus from './middleware/UpdateEventStatus'

function App() {

  useEffect(()=>{
    UpdateEventStatus()
  },[])

  return (
    <>
      <header className="Header">
      <Link  to="/" >
          <img
            alt="University of San Carlos Logo"
            id="Header__logo"
            src={mainLogo}
          />
        </Link>
        <Link to = "/profile">
          <img
            alt="Your Profile Page"
            id="Header__profile"
            src={profilePicture}
          />
        </Link>
        </header>
    </>
  )
}

export default App
