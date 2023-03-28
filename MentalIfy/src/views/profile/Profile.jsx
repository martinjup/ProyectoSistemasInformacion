import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../controllers/userController";
import mujer from '../../img/icon-woman.png'
import hombre from '../../img/icon-man.png'
import './Profile.css'


export function Profile() {
    const { usrID } = useParams();
    const [profile, setProfile] = useState(null);
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        async function fetchUser() {
            const p = await getUser(usrID)
            setProfile(p)
            setLoadingData(false)

        }

        fetchUser()
    }, [usrID])


    return (
        <>
            <div className="container">
               { !loadingData && (
                <div>
                    <div id="top">.</div>
                    <br />
                    <div>
                        <Link to='/reserve' className="boton">Agendar cita</Link>
                    </div>
                    <div className="contenedorGrande">
                        <div>
                            <img  id="contenedorImg" src={hombre} alt='Foto de perfil'/>
                        </div>
                        <div id="contenedorTxt">
                            <div className="miniContenedorTxt">
                                <h4>Nombre: </h4>
                                <span>{profile.name}</span>
                            </div>
                            <div className="miniContenedorTxt">
                                <h4>Email: </h4>
                                <span>{profile.email}</span>
                            </div>
                            <div className="miniContenedorTxt">
                                <h4>CIP: </h4>
                                <span>{profile.CIP}</span>
                            </div>
                            <div className="miniContenedorTxt">
                                <h4>Genero: </h4>
                                <span>{profile.gender}</span>
                            </div>
                            <div className="miniContenedorTxt">
                                <h4>Numero de telefono: </h4>
                                <span>{profile.phone}</span>
                            </div>
                            <div className="miniContenedorTxt">
                                <h4>Resumen laboral: </h4>
                                <span>{profile.resume}</span>
                            </div>
                            <div className="miniContenedorTxt">
                                <h4>Especialidad: </h4>
                                <span>{profile.specialist}</span>
                            </div>
                        </div>
                    </div>
                    <div className='separator'>.</div>
                </div>
               )

               }
              
            </div>
        </>
    )
}