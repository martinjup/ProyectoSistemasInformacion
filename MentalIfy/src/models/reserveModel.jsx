import {collection, doc, setDoc } from "firebase/firestore"
import { useImperativeHandle } from "react";
import { db } from "../firebase/firebaseConfig"

//Modelo Reserve
export class Reserve {
    constructor({ doctorid, userid, date, reserveid}) {
        this.doctorid = doctorid;
        this.userid = userid;
        this.date = date;
    }


    save(uid) {
        const u = {
            doctorid: this.doctorid,
            userid: this.userid,
            date: this.date,
            id: uid
        }

        setDoc(doc(db, 'reserves', uid), u)

    }
}