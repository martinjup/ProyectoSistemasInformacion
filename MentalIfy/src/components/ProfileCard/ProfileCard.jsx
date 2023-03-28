import { Link } from 'react-router-dom'
import './ProfileCard.css'




export function ProfileCard(profile) {

    // console.log(profile)
    return (
        <div className="container">

            <Link className='link' to={'/profile/' + profile.doctor.id}>
                <div className="content">
                    <span>{profile.doctor.name}</span>-
                    -<span>{profile.doctor.specialist}</span>
                </div>
            </Link>

        </div>
    )
}


