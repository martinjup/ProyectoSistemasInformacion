import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"


export class Doctor {
    constructor({ name, email, role, gender, birthdate, phone, resume, specialist, university, CIP, id }) {
        this.name = name
        this.email = email
        this.role = role
        this.gender = gender
        this.birthdate = birthdate
        this.phone = phone
        this.resume = resume
        this.specialist = specialist
        this.university = university
        this.CIP = CIP
        this.id = id

    }


    save(uid) {

        const u = {
            name: this.name,
            email: this.email,
            role: this.role,
            gender: this.gender,
            birthdate: this.birthdate,
            phone: this.phone,
            resume: this.resume,
            specialist: this.specialist,
            university: this.university,
            CIP: this.CIP,
            id : uid
        }

        setDoc(doc(db, 'users', uid), u)

    }
}