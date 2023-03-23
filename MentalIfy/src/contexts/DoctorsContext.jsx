import { async } from "@firebase/util"
import { createContext, useContext, useEffect, useState } from "react"
import { getDoctor } from "../controllers/doctorController"

export const DoctorContext = createContext(null)

export function DoctorContextProvider({ children }) {
    const [doctor, setDoctor] = useState(null)

    useEffect(()=> {
        async function fetchDoctors(){
            const doctors = await getDoctor()
            setDoctor(doctors)
            // console.log(doctor)
        }
        fetchDoctors()

    },[])

    return(
        <DoctorContext.Provider
        value={{doctor,}}>
            {children}
        </DoctorContext.Provider>
    )
}

export function useDoctor(){
    return useContext(DoctorContext)
}