import './specialistCard.css'




export function SpecialistCard(doctor) {


    return (
        <div className="container">

            <div className="content">
                <span className='text'>{doctor.doctor.name} - </span>
                <span>- {doctor.doctor.specialist}</span>
            </div>


        </div>
    )
}


