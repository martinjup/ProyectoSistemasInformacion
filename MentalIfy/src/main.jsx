import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Home} from './views/home/home'
// import {Nav} from './components/Navbar/Navbar'
import './index.css'
import {
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,

} from './constants/urls'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      {/* <Route element= {Nav} /> */}
      <Route path={HOME_URL} element={<Home />}/>

      
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
