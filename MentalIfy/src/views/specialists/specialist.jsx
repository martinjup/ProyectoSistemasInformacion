import './specialist.css'
import { UserNavbar } from '../../components/UserNavbar/UserNavbar';
import { SMSContainer } from '../../components/SMSContainer/SMSContainer';
import { useUser } from '../../contexts/UserContext'
import { SpecialistCard } from '../../components/specialist/specialistCard'
import { useDoctor } from '../../contexts/DoctorsContext';

//Pagina de especialistas
export function Specialist() {

    const { user } = useUser()
    const {doctor} = useDoctor()

    return (
        <div>
            <UserNavbar />
            <SMSContainer />
            <h1 id='intro'>Bienvenido {user.name} estos son nuestros psicologos:</h1>
            <div className='container'>
                {doctor.map(d=>(
                    <SpecialistCard doctor={d} key={d.CIP}/>
                ))}
            </div>
        </div>
    )
}