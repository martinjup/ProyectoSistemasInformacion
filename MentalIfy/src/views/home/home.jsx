import './home.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

export function Home() {
    return (
        <div className='content'>

            <div >
                <header className='header home'>
                    <div className='header-container header-content'>
                        



                        <h1 className='title'>Sé una mejor versión de tí con la terapia en línea</h1>

                        <h1 className='start'>¡Inicia hoy!</h1>

                    </div>
                    <div className='register'>
                        <button className='register-button'>Registrate</button>
                    </div>
                </header>

            </div>

            <div className='home-content'>
                <section className='nosotros'>
                    <h1>¿Quiénes somos?</h1>
                    <p>Mentalify es la plataforma que reúne a los mejores especialistas
                        en el área de salud mental, en el mismo lugar y que están a tú disposición,
                        para ofrecerte los mejores servicios de atención mental a distancia</p>
                </section>

                <section className='nuestros-especialistas'>
                    <h1>Nuestros especialistas</h1>
                    <p>En Mentalify podrás encontrar una gran variedad de psicólogos y
                        psiquiatras con los que podrás agendar un encuentro </p>

                    <div className='profile-button'><button className='perfiles'>Perfiles</button></div>
                </section>

                

            </div>


        </div>
    )
}