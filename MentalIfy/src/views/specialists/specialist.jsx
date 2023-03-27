import './specialist.css'
import { UserNavbar } from '../../components/UserNavbar/UserNavbar';
import { SMSContainer } from '../../components/SMSContainer/SMSContainer';
import { useUser } from '../../contexts/UserContext'
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import { useDoctor } from '../../contexts/DoctorsContext';
import { useEffect, useState } from 'react';
import { getDoctor } from '../../controllers/doctorController';

//Pagina de especialistas
export function Specialist() {

    const { user, isLoandingUser } = useUser()
    const { doctor } = useDoctor()
    const [profile, setProfile] = useState(null);
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        async function fetchDoctor() {
            const doc = await getDoctor()
            setProfile(doc)
            setLoadingData(false)

        }
        fetchDoctor()
    }, [])




    return (
        <div>
            <UserNavbar />
            <SMSContainer />



            {!isLoandingUser && (

                <h1>Bienvenido {user.name}</h1>
            )}


            {!loadingData && <div className='container'>
                {profile.map(d => (
                    <ProfileCard doctor={d} key={d.CIP} />))}</div>}



        </div>
    )

}