import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../controllers/userController";

export function Profile() {
    const { usrID } = useParams();
    const [profile, setProfile] = useState(null);
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        async function fetchUser() {
            const p = await getUser(usrID)
            setProfile(p)
            setLoadingData(false)

        }

        fetchUser()
    }, [usrID])



    return (
        <>
            <div className="container">
               { !loadingData && (
                <div>
                <span>{profile.name}</span>
                <span>{profile.email}</span>
                </div>
               )

               }
              
            </div>
        </>
    )
}