import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Home} from './views/home/home'
import {Register} from './views/register/register'
import {RegisterDoctor} from './views/register/registerdoctor'
import {Login} from './views/login/login'
import {Reserve} from './views/reserve/reserve'
import { AccountSettings } from './views/AccountSettings/accountSettings'
import './index.css'
import { Chat } from './views/Chat/Chat'
import { Layout } from './views/Layout/Layout'
import {UserView} from './views/userView/userView'
import {Specialist} from './views/specialists/specialist'
import { AccountSettingsFT } from './views/AccountSettings/accountSettingsFT'
import {
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  REGISTER_DOCTOR_URL,
  CHAT_URL,
  USER_VIEW_URL,
  ACCOUNT_SETTINGS,
  SPECIALIST_URL,
  RESERVE_URL,
  ACCOUNT_SETTINGS_FT
} from './constants/urls'
import { Profile } from './views/profile/Profile'



// Rutas del proyecto
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<Home />} />
          <Route path={LOGIN_URL} element={<Login />} />
          <Route path={RESERVE_URL} element={<Reserve />} />
          <Route path={REGISTER_URL} element={<Register />} />
          <Route path={REGISTER_DOCTOR_URL} element={<RegisterDoctor />} />
          <Route path={CHAT_URL} element={<Chat />} />
          <Route path={USER_VIEW_URL} element={<UserView />} />
          <Route path={SPECIALIST_URL} element={<Specialist />} />
          <Route path={ACCOUNT_SETTINGS} element={<AccountSettings />} />
          <Route path='/profile/:usrID' element={<Profile/>}/>
          <Route path={ACCOUNT_SETTINGS_FT} element={<AccountSettingsFT />} />
          
        </Route>



      </Routes>

    </BrowserRouter>,
  {/* </React.StrictMode> */}
  
)
