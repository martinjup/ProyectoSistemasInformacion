import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const UserContext = createContext(null)

export function UserContentProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth,(firebaseUser)=>{
            console.log(firebaseUser);
            if(firebaseUser){
                setUser({
                    id: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName
                })
            }
        });
    }, [])


    return (
        <UserContext.Provider 
        value={{
            user,
        }}>
    { children }
        </UserContext.Provider >
    )
}

export function useUser() {
    return useContext(UserContext);
}