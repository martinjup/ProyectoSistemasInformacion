import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './views/home/home'
import './index.css'
import {
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,

} from './constants/urls'
import { Layout } from './views/Layout/Layout'
// import {apiKey} from './firebase/firebaseConfig'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>

          <Route path={HOME_URL} element={<Home />} />
          <Route path={LOGIN_URL} element={<h1>login</h1>} />
          {/* <Route path='/test' element={console.log(apiKey)}/> */}

        </Route>



      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
