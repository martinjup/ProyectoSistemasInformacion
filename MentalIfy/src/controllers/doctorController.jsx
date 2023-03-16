import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { Doctor } from '../models/doctorModel'

// Controller de doctor
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
        CIP: data.CIP,
        id: uid

    })
    // console.log(doctor)
    doctor.save(uid)


}


export async function getDoctor() {

    const q = query(collection(db, 'users'), where("role", '==', 'doctor'))
    const doctors = []
    try {

        const snap = await getDocs(q)
        snap.forEach((doc) =>{
            doctors.push(doc.data())
        })
        return doctors
    } catch (error) {

    }
}