import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {signInWithGoogle } from '../../firebase/auth-service'
import { auth, db } from "../../../src/firebase/firebaseConfig";
import { redirect, useNavigate } from "react-router-dom";
import { useCallback } from 'react'
import './login.css'
import { rediredt } from "../../helper/redirect";
import { ACCOUNT_SETTINGS } from '../../constants/urls'
import { useUser } from "../../contexts/UserContext";
import { doc, getDoc } from "firebase/firestore";
//Pagina de Login
export const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      navigate('/')
      alert('Login exitoso')
    } catch (e) {
      alert('Error en autenticacion, intente de nuevo')
    }
  }, [])
  const provider = new GoogleAuthProvider()


    const handleSigInWtihGoogle = async () => {
      await signInWithGoogle()
      .then(() => {
        navigate('/')
          alert('Login exitoso')
      })
 
    }

  return (
    <><div>
      <div id='top'>.</div>
      <br></br>
      <body className="square">
      <div className="headboard">
        <h3>Login</h3>
      </div>
      <div className="headboard">
      <form id="form" onSubmit={handleSubmit}>
          <div>
          <input name="email" placeholder="correo" type="email" />
          </div>
          <div>
          <input name="password" placeholder="contraseña" type="password" />
          <div>
          </div>
          <button type="submit" className='boton'>Login</button>
          </div>
      </form>
      </div>
      <div className="headboard">
      <button className='boton' onClick={handleSigInWtihGoogle}> Google </button>
      </div>
      </body>
      </div>
    </>
    
  )
}
