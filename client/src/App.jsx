import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import AdminStud from './Admin-students'
import AdminAct from './Admin-actvities'
import AddActivity from './AddActivity'
import AddStudent from './AddStudent'
import Register from './Register'
import EventRegister from './EventRegister'
import EventAttendance from './EventAttendance'
import ProtectedRoute from './middleware/ProtectedRoute'
import { Routes, Route, Link, useParams } from 'react-router-dom';

function App() {

    return (
      <>
        <Routes>
        <Route path="Register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        

        <Route path="/" element={
        <ProtectedRoute children={<Home/>} roleType={'student'}/>
      } />

        <Route path="/profile" element={
        <ProtectedRoute children={<Profile/>} roleType={'student'}/>
      } />

        <Route path="/EventRegister/:id" element={
        <ProtectedRoute children={<EventRegister/>} roleType={'student'}/>
      } />



        <Route path="/StudAdmin" element={
        <ProtectedRoute children={<AdminStud/>} roleType={'admin'}/>
      } />
        <Route path="/ActAdmin" element={
        <ProtectedRoute children={<AdminAct/>} roleType={'admin'}/>
      } />
        <Route path="/AddActivity" element={
        <ProtectedRoute children={<AddActivity/>} roleType={'admin'}/>
      } />
        <Route path="/AddStudent" element={
        <ProtectedRoute children={<AddStudent/>} roleType={'admin'}/>
      } />
        <Route path="/EventAttendance" element={
        <ProtectedRoute children={<EventAttendance/>} roleType={'admin'}/>
      } />
        </Routes>
      </>
    )
  }

  export default App