
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './UserNavbar.css'
import {
    HOME_URL,
    LOGIN_URL,
    USER_VIEW_URL,
    ACCOUNT_SETTINGS,
    RESERVE_URL

} from '../../constants/urls'
import { useNavigate } from "react-router-dom";

export function UserNavbar(){

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const toggleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return(

            <div>
                <div className='NavbarBox'
                >
                <ul>
                    <div id='leftNav'>
                        <li><Link onClick={toggleShowPassword}>Mas opciones</Link>
                            <div id={showPassword ? "mostrar" : "ocultar"} className='dropdown-content' >
                                <Link>Mis consultas</Link>
                                <Link>Especialistas</Link>
                                <Link>Fechas</Link>
                                <Link>Precios</Link>
                                <Link to={RESERVE_URL}>Reservar cita</Link>
                                <Link to={ACCOUNT_SETTINGS}>Ajustes</Link>
                            </div>
                        </li>
                    </div>
                    <div id='rightNav'>
                        <li>
                            <input placeholder='Buscar Especialista'></input>
                        </li>
                        <li><Link>Contacto</Link></li>
                        <li><Link>Cuenta </Link></li>
                    </div>
                </ul>
                </div>
                
            </div>
    )
}
