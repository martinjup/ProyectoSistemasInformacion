import '../register/register.css'
import React, { useState } from 'react'
import { registerWithEmail, signInWithGoogle } from '../../firebase/auth-service'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ACCOUNT_SETTINGS, HOME_URL } from '../../constants/urls'
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext'
import { createUser } from '../../controllers/userController'
import { createDoctor } from '../../controllers/doctorController'

//Registro para doctor

export function AccountSettingsFT(props) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const { user, isLoandingUser } = useUser()

  const toggleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    console.log(showPassword)
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    if (!showPassword) {
      // crear paciente

      const paciente = {
        name: user.name,
        email: user.email,
        phone: data.phone,
        role: "paciente",
        gender: data.gender,
        year: data.year,
      }
      createUser(paciente, user.id)

    } else {
      // crear especialista
      const doctor = {
        name: user.name,
        email: user.email,
        phone: data.phone,
        role: "doctor",
        gender: data.gender,
        year: data.year,
        resume: data.resume,
        specialist: data.specialist,
        university: data.university,
        CIP: data.CIP
      }
      createDoctor(doctor, user.id)

    }
  }


  return (
    <div>
      <div id='top'>.</div>
      {!isLoandingUser && <h3 className='headboard'>Hola {user.name}, necesitamos algunos datos extra para crear tu cuenta con exito</h3>
      }      <div className='headboard'>
        <button className='boton' onClick={toggleShowPassword}>Crear cuenta como {showPassword ? 'paciente' : 'psicologo'}</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='personalData'>
          <div className='hide'>
            <div className='textLeftContainer'>
            </div>
            <br />

          </div>
          <input type='number' placeholder='Numero telefónico' className='phoneFT' {...register("phone")}></input>

        </div>

        <div className='separator'>.</div>

        <div className='calendar'>
          <input className='calendarBox' type="number" placeholder='DD'  {...register("day")} />
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='MM'  {...register("month")} />
          <h1 className='calendarSplit'>/</h1>
          <input className='calendarBox' type="number" placeholder='AAAA'  {...register("year")} />
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
          <div className={showPassword ? "specialistData" : "hide"}>
            <input type='number' placeholder='C.I. Colegio de Psicólogos'  {...register("CIP")}></input>
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
            <input className='createAccount' type="submit" value="Crear cuenta" />
            {/* onClick={() => navigate("/")} */}
          </div>

        </div>

      </form>
    </div >
  );
}