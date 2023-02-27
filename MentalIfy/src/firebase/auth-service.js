// metodos de autenticacion 

import { signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "./firebaseConfig"
import { createUser } from "../controllers/userController"
import { createDoctor } from "../controllers/doctorController"

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result.user)
    } catch (error) {
        console.error(error)
    }
}
export const registerWithEmail = async (data) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, data.email, data.password)
        
        if(data.CIP){
            createDoctor(data, result.user.uid)
        }else{
            createUser(data, result.user.uid)
        }

    } catch (error) {
        console.log({ error })
    }
}

export const signInWithEmail = async () => { }

export const logout = async () => {

    try {
        await signOut(auth)
    } catch (error) {
        console.log({ error })
    }
}