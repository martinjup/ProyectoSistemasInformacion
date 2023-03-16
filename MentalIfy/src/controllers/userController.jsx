import { User } from '../models/userModel'
import {collection, doc, setDoc, addDoc} from "firebase/firestore"
import {db} from "../firebase/firebaseConfig"

// Controller de usuario
export function createUser(data, uid) {
    const user = new User({
        name: data.nombre + " " + data.apellido,
        email: data.email,
        phone: data.phone,
        role: "paciente",
        gender: data.gender,
        birthdate: data.year,
    })

    user.save(uid)

    
}