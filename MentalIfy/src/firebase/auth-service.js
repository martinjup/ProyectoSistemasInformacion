// metodos de autenticacion 

import { signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "./firebaseConfig"

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result.user)
    } catch (error) {
        console.error(error)
    }
}
export const registerWithEmail = async () => { }

export const signInWithEmail = async () => { }

export const logout = async () => { 

    try {
        await signOut(auth)
    } catch (error) {
        console.log({error})
    }
}