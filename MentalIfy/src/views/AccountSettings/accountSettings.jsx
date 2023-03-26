import './accountSettings.css'
import { useUser } from '../../contexts/UserContext'
import { UserNavbar } from '../../components/UserNavbar/UserNavbar';
import { SMSContainer } from '../../components/SMSContainer/SMSContainer';
import profileIcon from '../../img/Profile-icon.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from '../../controllers/userController';
import { User } from '../../models/userModel';
//Pagina de ajustes
export function AccountSettings() {

    const [showPassword, setShowPassword] = useState(false);

    const { user } = useUser()

    const toggleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        try {
            const userN = {
                name: user.name,
                email: user.email,
                phone: data.phone,
                role: "paciente",
                gender: data.gender,
                year: data.year,
            }
            console.log(userN)
            createUser(userN, user.id)
        } catch (error) {
            console.log(error)
        }


    }


    return (

        <div>
            <UserNavbar />
            <SMSContainer />
            <h1 id='header'>Ajustes de cuenta</h1>
            <div id='bigBox'>
                <div className='leftBox'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div id='title'>
                            <h4 className='smallBox'>Información básica</h4>
                            {/* <button className='changeData' onClick={toggleShowPassword}>Modificar datos</button> */}
                        </div>
                        {/* <div className='smallBox'>
                            <h4 className='smallLabel'>Nombre</h4>
                            <input placeholder={user.name} className={showPassword ? "smallImput" : "hide"}></input>
                            <label className={showPassword ? "hide" : "smallImput"}>{user.name}</label>
                        </div> */}
                        <div className='smallBox'>
                            <h4 className='smallLabel'>Sexo</h4>
                            <select className={"genderValue"} {...register("gender")}>
                                <option disabled selected>--- Género ---</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                            <label className={showPassword ? "hide" : "genderValue"}></label>
                        </div>
                        <div className='smallBox'>
                            <h4 className='smallLabel'>Fecha de Nacimiento</h4>
                            <input className={"calendarBox"} type="number" placeholder='DD' name='day' {...register("day")} />
                            <h1 className={"calendarText"}>/</h1>
                            <input className={"calendarBox" } type="number" placeholder='MM' name='month' {...register("month")} />
                            <h1 className={"calendarText" }>/</h1>
                            <input className={"calendarBox"} type="number" placeholder='AAAA' name='year' {...register("year")} />
                            <p className={showPassword ? "calendarText" : "hide"}>Introduzca su fecha de nacimiento.</p>
                            <label className={showPassword ? "hide" : "calendarBox"}></label>
                        </div>
                        <h4 className='smallBox'>Información de contacto</h4>
                        {/* <div className='smallBox'>
                            <h4 className='smallLabel'>Correo electrónico</h4>
                            <input placeholder={user.email} className={showPassword ? "smallImput" : "hide"}></input>
                            <label className={showPassword ? "hide" : "smallImput"}>{user.email}</label>
                        </div> */}
                        <div className='smallBox'>
                            <h4 className='smallLabel'>Teléfono</h4>
                            <input type='tel' placeholder='Numero telefónico' name='phone' className={"phone"} {...register("phone")}></input>
                            <label className={"smallImput"}></label>
                        </div>
                        <div id='changeDataBox'>
                            <button type="submit" className={"changeData"}>Guardar datos</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )

}