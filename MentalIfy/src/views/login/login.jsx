import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
{/*Necesito importar auth de firebase con la linea de codigo
de abajo pero no se cual es la direccion exacta de donde
sacarlo, help me obi wan*/} 
{/*import { auth } from "../../firebase";*/} 

export function Login ()  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const logIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div className="sign-in-container">
        <form onSubmit={logIn}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };