import React from 'react'

import {
    HOME_URL,
    LOGIN_URL,
    USER_VIEW_URL,
    SPECIALIST_URL

} from '../../constants/urls'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext"
import { logout } from '../../firebase/auth-service';


export function Navbar() {
    const navigate = useNavigate();
    const { user, isLoandingUser } = useUser()
    const handleLogout = async () => {
        await logout()
        .then(() => {
            navigate('/')
              alert('Logout exitoso')
          })
    }

    return (
        <div>

            { !isLoandingUser && (<div className={styles.bar}>
                <Link to={HOME_URL} className={styles.link}>
                    <img src={logo} alt="logo mentalIfy" className={styles.loguito} />
                </Link>
                <nav className={styles.nav}>


                    <Link to={SPECIALIST_URL} className={styles.links}>Especialistas</Link>
                    {!!user && (
                        <>
                        <Link to={USER_VIEW_URL} className={styles.links}>
                            <span> {user.name}</span>
                        </Link>

                        <button className={styles.loginButton} onClick={handleLogout}>LogOut</button>
                        </>
                    )}
                    {!user && <button className={styles.loginButton} onClick={() => navigate(LOGIN_URL)}>Login</button>}
                </nav>
            </div>
)}
        </div>
    )

}