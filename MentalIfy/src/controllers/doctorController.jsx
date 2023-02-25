import { Doctor } from '../models/doctorModel'

export function createDoctor(data, uid) {
    
    const doctor = new Doctor({
        name: data.nombre + " " + data.apellido,
        email: data.email,
        role: "doctor",
        gender: data.gender,
        birthdate: data.year,
        phone: data.phone,
        resume: data.resume,
        specialist: data.specialist,
        university: data.university,
        CIP: data.CIP

    })
    // console.log(doctor)
    doctor.save(uid)

    
}