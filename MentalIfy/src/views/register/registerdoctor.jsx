import './register.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import googleLogo from '../../img/Google-logo.png'
import facebookLogo from '../../img/Facebook-logo.png'
import privacyLogo from '../../img/Privacy-policy-logo.png'
import oEye from '../../img/openEye.png'
import cEye from '../../img/closedEye.png'
import { registerWithEmail, signInWithGoogle } from '../../firebase/auth-service'
import { useForm } from 'react-hook-form'

//Registro para doctor

export function RegisterDoctor(props) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async (data) =>{
    // console.log(data)
    await registerWithEmail(data)
  }

  const handleSigInWtihGoogle = async () => {
    await signInWithGoogle();
  }

  return (
    <div>
      <div id='top'>.</div>
      <div className='headboard'>
        <h3>CREAR UNA CUENTA COMO ESPECIALISTA</h3>
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
              <input type="text" className='leftText' placeholder="Nombre" name='nombre' {...register('nombre', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })}/>
              <input type="text" className='leftText' placeholder="Apellido" name='apellido' {...register('apellido', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })} />
            </div>
            <br />
            <input type="email" className='leftText2' id='email' placeholder="Correo electronico" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i  })} />
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
            <input type='tel' placeholder='Numero telefónico' className='phone' {...register("phone")}></input>
          </div>
          <div className='rightContainer'>
            <img id='privacyLogo' src={privacyLogo} alt='Privacy Policy logo' />
          </div>
        </div>

        <div className='separator'>.</div>

        <div className='calendar'>
          <input className='calendarBox' type="number" placeholder='DD'  {...register("day")} />
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='MM'  {...register("month")}/>
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='AAAA'  {...register("year")}/>
          <p className='calendarText'>Introduzca su fecha de nacimiento.</p>
        </div>
        <div className='gender'>
          <select className='genderValue'  {...register("gender")}>
            <option disabled selected>---Género---</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option></select>
        </div>
        <br />

        <div className='separator'>.</div>

        <div className='specialist' >
          <div className='specialistData'>
            <input type='number' placeholder='C.I. Colegio de Psicólogos' {...register("CIP")}></input>
            <input type='text' placeholder='Universidad egresada' {...register("university")}></input>
            <select id='specialty'{...register("specialist")} >
              <option disabled selected>---Especialidad---</option>
              <option>Psicología Clínica</option>
              <option value="Psicología Educativa">Psicología Educativa</option>
              <option value="Neuropsicología">Neuropsicología</option>
              <option value="Psicología Social">Psicología Social</option>
              <option value="Psicología Organizacional">Psicología Organizacional</option>
              <option value="Psicología Deportiva">Psicología Deportiva</option>
              <option value="Psicología Forense">Psicología Forense</option>
              <option value="Psicología de la salud">Psicología de la salud</option>
              <option value="Psicología del desarrollo">Psicología del desarrollo</option>
              <option value="Psicología Ambiental">Psicología Ambiental</option>
            </select>
            <input type='text' id='resume' placeholder='Resumen Curricular' {...register("resume")}></input>
          </div>
          <div>
            <button className='createAccount' type="submit">Crear cuenta</button>
          </div>

        </div>

      </form>
    </div >
  );
}