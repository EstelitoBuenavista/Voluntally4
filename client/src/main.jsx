import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <Header/>
    <App/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
