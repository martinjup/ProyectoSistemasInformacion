import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Home} from './views/home/home'
import {Register} from './views/register/register'
import {RegisterDoctor} from './views/register/registerdoctor'
import {Login} from './views/login/login'
// import {Nav} from './components/Navbar/Navbar'
import './index.css'
import { Chat } from './views/Chat/Chat'
import {
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  REGISTER_DOCTOR_URL

} from './constants/urls'
import { Layout } from './views/Layout/Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      {/* <Route element= {Nav} /> */}
      <Route path={HOME_URL} element={<Home />}/>
      <Route path={LOGIN_URL} element={<Login />}/>
      <Route path={REGISTER_URL} element={<Register />}/>
      <Route path={REGISTER_DOCTOR_URL} element={<RegisterDoctor />}/>


      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
