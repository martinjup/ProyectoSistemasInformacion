import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react'
import DatePicker from "react-datepicker";
import './reserve.css'
import "react-datepicker/dist/react-datepicker.css";

// Pagina de reserva
export const Reserve = () => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate()
  
  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();

    //access input values
    const doctorName = event.target.doctor_name.value;
    const doctorDate = event.target.doctor_date.value;

    console.log('doctor 👉️', doctorName);
    console.log('fecha 👉️', doctorDate);

   alert(`Usted ha reservado cita con, ${doctorName}, para la fecha ${doctorDate}`);
   navigate('/specialists')

    // Placeholder, eventualmente esto va a funcionar con firestore
    event.target.reset();
  };

  return (
    
        <div>
        <div id='top'>.</div>
        <br></br>
        <body className="square">
        <div className="headboard">
          <h3>Reservar</h3>
        </div>
        <div className="headboard">
        <form id="form" onSubmit={handleSubmit}>
            <div>
            <input id="doctor_name" placeholder="Nombre de doctor" name="doctor_name" type="text" />
            </div>
            <div>
            <DatePicker selected={date} showTimeSelect dateFormat="MMMM d, yyyy h:mmaa" onChange={date => setDate(date)}  id="doctor_date" name="doctor_date"  type="text"  />
            <div>
            </div>
            <button type="submit" className='boton'>Reservar</button>
            </div>
        </form>
        </div>
        </body>
        </div>


          );
}