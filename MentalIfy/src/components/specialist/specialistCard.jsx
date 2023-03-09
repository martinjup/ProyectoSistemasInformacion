import './specialistCard.css'




export function SpecialistCard(doctor) {


    return (
        <div className="container">

            <div className="content">
                <span>{doctor.doctor.name}</span>
                <span>{doctor.doctor.specialist}</span>
            </div>


        </div>
    )
}


