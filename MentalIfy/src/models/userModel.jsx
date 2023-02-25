import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"


export class User {
    constructor({ name, email, phone, role, gender, birthdate }) {
        this.name = name
        this.email = email
        this.phone = phone
        this.role = role
        this.gender = gender
        this.birthdate = birthdate
    }


    save(uid) {
        const u = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            role: this.role,
            gender: this.gender,
            birthdate: this.birthdate
        }

        setDoc(doc(db, 'users', uid), u)

    }
}
