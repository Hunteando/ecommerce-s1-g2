import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className='Cabecera'>
            <h1 className='Cabecera-h1'>
                <a href="#home" className="Cabecera-a">
                    Logo
                </a>
            </h1>

            <button
                onClick={toggleMenu}
                className="Cabecera-button">
                <svg class="Cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
                <ul className='Cabecera-ul'>
                    <li className="Cabecera-li"><a href="#home" className="Cabecera-a">Inicio</a></li>
                    <li className="Cabecera-li"><a href="#home" className="Cabecera-a">Menú</a></li>
                    <li className="Cabecera-li"><a href="#home" className="Cabecera-a">Productos</a></li>
                    <li className="Cabecera-li"><a href="#home" className="Cabecera-a">Nosotros</a></li>
                    <li className="Cabecera-li"><a href="#home" className="Cabecera-a">Contacto</a></li>
                </ul>
            </nav>
        </header >

    )
}

export default Navbar