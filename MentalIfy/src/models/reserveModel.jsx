import { db } from "../firebase/firebaseConfig"

//Modelo reserva
export class Reserva {
    constructor({ doctorname, username, date,id }) {
        this.doctorname = doctorname
        this.username = username
        this.date = date
        this.id = id

    }
}