import { User } from '../models/userModel'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export function createUser(data, uid) {
    const user = new User({
        name: data.apellido != null ? data.nombre + data.apellido: data.name,
        email: data.email,
        phone: data.phone,
        role: "paciente",
        gender: data.gender,
        birthdate: data.year,
    })

    console.log(user)

    user.save(uid)


}


export async function getUser(id) {

    const q = query(collection(db, 'users'), where('id', '==', id))
    var user = null

    try {
        const snap = await getDocs(q)
        snap.forEach((doc) => {
            user = doc.data()
        })

        return user
    } catch (error) {

    }
}