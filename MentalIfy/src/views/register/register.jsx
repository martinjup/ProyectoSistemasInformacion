import './register.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import googleLogo from '../../img/Google-logo.png'
import facebookLogo from '../../img/Facebook-logo.png'
import privacyLogo from '../../img/Privacy-policy-logo.png'
import oEye from '../../img/openEye.png'
import cEye from '../../img/closedEye.png'
import { useNavigate } from "react-router-dom";
import { registerWithEmail, signInWithGoogle } from '../../firebase/auth-service'
import { useForm } from 'react-hook-form'

// Pagina de registro
export function Register(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSigInWtihGoogle = async () => {
    await signInWithGoogle();
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async (data) =>{
    await registerWithEmail(data)
  }

  const navigate = useNavigate();
  const toggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <div id='top'>.</div>
      <div className='headboard'>
        <h3>Crear una cuenta de Mentalify</h3>
        <p>¿Ya tienes una cuenta? Inicia Sesión</p>
      </div>
      <div className='headboard'>
        <img src={googleLogo} alt='Logo Google' className='miniLogos' onClick={handleSigInWtihGoogle} />
        <img src={facebookLogo} alt='Logo Facebook' className='miniLogos' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='personalData'>
          <div className='leftContainer'>
            <div className='textLeftContainer'>
              <input type="text" className='leftText' placeholder="Nombre" name='nombre' {...register('nombre', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })} />
              {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
              <input type="text" className='leftText' placeholder="Apellido" name='apellido'   {...register("apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  }) } />
            </div>
            <br />
            <input type="email" className='leftText2' id='email' name='email' placeholder="Correo electronico"  {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i  })} />
            <div className='passwordContainer'>
              <div className='password'>
                
                <input type={showPassword ? "text" : "password"}
                  id={props.id}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                  placeholder='Contraseña'
                  {...register("password")}
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
            <input type='tel' placeholder='Numero telefónico' name='phone' className='phone' {...register("phone")}></input>
          </div>
          <div className='rightContainer'>
            <img id='privacyLogo' src={privacyLogo} alt='Privacy Policy logo' />
          </div>
        </div>

        <div className='separator'>.</div>

        <div className='calendar'>
          <input className='calendarBox' type="number" placeholder='DD' name='day' {...register("day")}/>
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='MM' name='month' {...register("month")} />
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='AAAA' name='year' {...register("year")}/>
          <p className='calendarText'>Introduzca su fecha de nacimiento.</p>
        </div>
        <div className='gender'>
          <select className='genderValue' {...register("gender")}>
            <option disabled selected>--- Género ---</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>

        </div>
        <br />
        <input className='createAccount' type="submit" value="Crear cuenta"/>
      </form>
      <button className='createAccount' onClick={() => navigate("/registerdoctor")}>Crer cuenta como especialista</button>
    </div>
  );
}