import { Reserve } from '../models/reserveModel'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export function createReserve(data, uid) {
    const reserve = new Reserve({
        date: data.date,
        doctorid: data.doctorid,
        userid: data.doctorid,
    })

    console.log(reserve)

    reserve.save(uid)


}


export async function getReserve(id) {

    const q = query(collection(db, 'reserves'), where('id', '==', id))
    var reserve = null

    try {
        const snap = await getDocs(q)
        snap.forEach((doc) => {
            reserve = doc.data()
        })

        return reserve
    } catch (error) {

    }
}