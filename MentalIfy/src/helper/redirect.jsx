import { getDoc } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'
import {useUser} from '../contexts/UserContext'
import { db } from '../firebase/firebaseConfig'
import {ACCOUNT_SETTINGS} from '../constants/urls'
import { useEffect } from 'react'



export async function rediredt(){
    
//     // const res = await getDoc(doc(db,'users', user.id))
    useEffect(()=>{
        const {user} = useUser()
    console.log(user.id)
    },[])
//     // if(!res.exists()){
//     //     Navigate(ACCOUNT_SETTINGS)
//     //     // console.log('no existe')
//     // }else{
//     //     Navigate('/')
//         // console.log('existe')
//     // }
}

