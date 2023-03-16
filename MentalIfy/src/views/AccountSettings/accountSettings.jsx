import './accountSettings.css'
import { useUser } from '../../contexts/UserContext'
import { UserNavbar } from '../../components/UserNavbar/UserNavbar';
import { SMSContainer } from '../../components/SMSContainer/SMSContainer';
import profileIcon from '../../img/Profile-icon.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

//Pagina de ajustes
export function AccountSettings() {

    const [showPassword, setShowPassword] = useState(false);

    const { user } = useUser()

    const toggleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
      }

    return(

        <div>
            <UserNavbar />
            <SMSContainer />
            <h1 id='header'>Ajustes de cuenta</h1>
            <div id='bigBox'>
                <div className='leftBox'>
                    <div id='title'>
                        <h4 className='smallBox'>Información básica</h4>
                        <button className='changeData' onClick={toggleShowPassword}>Modificar datos</button>
                    </div>
                    <div className='smallBox'>
                        <h4 className='smallLabel'>Nombre</h4>
                        <input placeholder={user.name} className={showPassword ? "smallImput" : "hide"}></input>
                        <label className={showPassword ? "hide" : "smallImput"}>{user.name}</label>
                    </div>
                    <div className='smallBox'>
                        <h4 className='smallLabel'>Sexo</h4>
                        <input placeholder={user.id} className={showPassword ? "smallImput" : "hide"}></input>
                        <label className={showPassword ? "hide" : "smallImput"}>{user.id}</label>
                    </div>
                    <div className='smallBox'>
                        <h4 className='smallLabel'>Fecha de Nacimiento</h4>
                        <input placeholder={user.name} className={showPassword ? "smallImput" : "hide"}></input>
                        <label className={showPassword ? "hide" : "smallImput"}>{user.name}</label>
                    </div>
                    <h4 className='smallBox'>Información de contacto</h4>
                    <div className='smallBox'>
                        <h4 className='smallLabel'>Correo electrónico</h4>
                        <input placeholder={user.email} className={showPassword ? "smallImput" : "hide"}></input>
                        <label className={showPassword ? "hide" : "smallImput"}>{user.email}</label>
                    </div>
                    <div className='smallBox'>
                        <h4 className='smallLabel'>Teléfono</h4>
                        <input placeholder={user.name} className={showPassword ? "smallImput" : "hide"}></input>
                        <label className={showPassword ? "hide" : "smallImput"}>{user.name}</label>
                    </div>

                </div>
                <div className='rightBox'>
                    <img src={profileIcon} id='profilePicture'/>
                    <br />
                    <Link id='changePhoto'>Cambiar foto de perfil</Link>
                </div>
            </div>
            <div id='changeDataBox'>
            <button className={showPassword ? "changeData" : 'hide'}>Guardar datos</button>
            </div>
        </div>
    )
    
}