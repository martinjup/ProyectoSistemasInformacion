import { Link } from 'react-router-dom'
import './ProfileCard.css'
import mujer from '../../img/icon-woman.png'
import hombre from '../../img/icon-man.png'




export function ProfileCard(profile) {

    var foto = null;

    if(profile.doctor.gender == 'F'){
        foto=mujer
    }else{foto=hombre}

    // console.log(profile)
    return (
        <div className="container">

            <Link className='link' to={'/profile/' + profile.doctor.id}>
                <div className="content">
                    <img id='fotoPerfil' src={foto} alt='foto de perfil'/>
                    <span id='name'>{profile.doctor.name}</span>-
                    -<span>{profile.doctor.specialist}</span>
                    <span>{profile.doctor.gender}</span>

                </div>
            </Link>

        </div>
    )
}


