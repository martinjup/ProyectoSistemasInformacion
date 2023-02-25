import React from 'react'

import {
    HOME_URL,
    LOGIN_URL,
    REGISTER_URL,

} from '../../constants/urls'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import styles from "./Navbar.module.css";

export function Navbar() {

    return (
        <div className={styles.container}>

            <div className={styles.bar}>
                <Link to={HOME_URL} className={styles.link}>
                    <img src={logo} alt="logo mentalIfy" className={styles.loguito} />
                </Link>
                <nav className={styles.nav}>
                    

                    <Link  className={styles.links}>
                        <h1>Especialistas</h1>
                    </Link>

                    <button className={styles.loginButton}>Login</button>
                </nav>
            </div>

        </div>
    )

}