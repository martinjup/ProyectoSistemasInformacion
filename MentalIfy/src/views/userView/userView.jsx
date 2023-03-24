import './userView.css'
import { Link } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useNavigate } from "react-router-dom";
import { UserNavbar } from '../../components/UserNavbar/UserNavbar';
import { SMSContainer } from '../../components/SMSContainer/SMSContainer';
import AccountLogo from '../../img/Account-logo.png'
import Contacts from '../../img/Contacts-logo.png'
import Calendar from '../../img/Calendar-img.png'
import Message from '../../img/Message-img.png'
import Register from '../../img/Registro-img.png'
import { useUser } from '../../contexts/UserContext'

import {
    CHAT_URL
} from '../../constants/urls'
//Vista del Usuario
export function UserView() {

    const { user } = useUser()

    return (
        <div>
            <UserNavbar />
            <SMSContainer />
            <h1>Bienvenido {user.name}</h1>
            <div className='containerr'>

                <div className='internalDiv'>
                    <img src={Register} className='centralImg'></img>
                    <Link className='linkText'>Mis consultas</Link>
                </div>
                <div className='internalDiv'>
                    <img src={Contacts} className='centralImg'></img>
                    <Link className='linkText'>Ver especialistas</Link>
                </div>
                <div className='internalDiv'>
                    <Link className='linkText' to={CHAT_URL}><img src={Message} className='centralImg'></img>
                        Mis chats</Link>
                </div>
                <div className='internalDiv'>
                    <img src={Calendar} className='centralImg'></img>
                    <Link className='linkText'>Calendario de citas</Link>
                </div>
            </div>
        </div>
    )
}