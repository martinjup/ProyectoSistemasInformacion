import './register.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import googleLogo from '../../img/Google-logo.png'
import facebookLogo from '../../img/Facebook-logo.png'
import privacyLogo from '../../img/Privacy-policy-logo.png'
import oEye from '../../img/openEye.png'
import cEye from '../../img/closedEye.png'



export function RegisterDoctor(props) {
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <div id='top'>.</div>
      <div className='headboard'>
        <h3>CREAR UNA CUENTA COMO ESPECIALISTA</h3>
        <p>¿Ya tienes una cuenta? Inicia Sesión</p>
      </div>
      <div className='headboard'>
      <img src={googleLogo} alt='Logo Google' className='miniLogos'/>
      <img src={facebookLogo} alt='Logo Facebook' className='miniLogos'/>
      </div>
      <div className='personalData'>
        <div className='leftContainer'>
          <div className='textLeftContainer'>
        <input type="text" className='leftText' placeholder="Nombre" />
        <input type="text" className='leftText' placeholder="Apellido" />
          </div>
        <br />
        <input type="email" className='leftText2' id='email' placeholder="Correo electronico" />
        <div className='passwordContainer'>
        <div className='password'>
          <input type={showPassword ? "text" : "password"}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder='Contraseña'
          />
          <button onClick={toggleShowPassword}>
          {showPassword ? 'Hide' : "Show"}
          </button>
          </div>

          <div className='password'>
          <input type={showPassword ? "text" : "password"}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder='Confirmar contraseña'
          />
          <button onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"}
          </button>
          </div>
          </div>
          <br />
        <input type='tel' placeholder='Numero telefónico' className='phone'></input>
        </div>
        <div className='rightContainer'>
          <img id='privacyLogo' src={privacyLogo} alt='Privacy Policy logo'/>
        </div>
      </div>

      <div className='separator'>.</div>

        <div className='calendar'>
          <input className='calendarBox' type="number" placeholder='DD'/>
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='MM'/>
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='AAAA'/>
          <p className='calendarText'>Introduzca su fecha de nacimiento.</p>
        </div>
        <div className='gender'>
        <select className='genderValue'><option>Género</option><option>Masculino</option><option>Femenino</option></select>
        </div>
        <br />

        <div className='separator'>.</div>

        <div className='specialist'>
          <div className='specialistData'>
          <input type='number' placeholder='C.I. Colegio de Psicólogos'></input>
          <input type='text' placeholder='Universidad egresada'></input>
          <select id='specialty'><option>Especialidad</option><option>Psicología Clínica</option><option>Psicología Educativa</option><option>Neuropsicología</option>
          <option>Psicología Social</option><option>Psicología Organizacional</option><option>Psicología Deportiva</option>
          <option>Psicología Forense</option><option>Psicología de la salud</option><option>Psicología del desarrollo</option>
          <option>Psicología Ambiental</option>
          </select>
          <input type='text' id='resume'  placeholder='Resumen Curricular'></input>
          </div>
          <div>
            <button className='createAccount' type="submit">Crear cuenta</button>
          </div>
        </div>
        
    </div>
  );
}