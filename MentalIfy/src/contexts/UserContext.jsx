import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import { getUser } from "../controllers/userController";
import { auth } from "../firebase/firebaseConfig";

export const UserContext = createContext(null)

export function UserContentProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth,(firebaseUser)=>{

            if(firebaseUser){
                // console.log(firebaseUser)
                if(firebaseUser.displayName != null){
                    setUser({
                        id: firebaseUser.uid,
                        email: firebaseUser.email,
                        name: firebaseUser.displayName
                    })
                }else{
                    fetchUser()
                    
                }
            }else{
                setUser(null)
            }

            async function fetchUser(){
                const u = await getUser(firebaseUser.uid)
                setUser({
                    id: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: u.name
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