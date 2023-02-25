import React from 'react'

import {
    HOME_URL,
    LOGIN_URL,
    REGISTER_URL,

} from '../../constants/urls'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext"

export function Navbar() {
    const navigate = useNavigate();
    const { user } = useUser()
    console.log(user)
    return (
        <div className={styles.container}>

            <div className={styles.bar}>
                <Link to={HOME_URL} className={styles.link}>
                    <img src={logo} alt="logo mentalIfy" className={styles.loguito} />
                </Link>
                <nav className={styles.nav}>


                    <Link className={styles.links}>
                        <h1>Especialistas</h1>
                    </Link>
                    {!!user && (
                        <button className={styles.loginButton} onClick={() => navigate("/profile")}>{user.name}</button>

                    )}
                    {!user && <button className={styles.loginButton} onClick={() => navigate(LOGIN_URL)}>Login</button>}
                </nav>
            </div>

        </div>
    )

}