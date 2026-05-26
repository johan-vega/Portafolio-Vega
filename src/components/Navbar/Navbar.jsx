import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="text-cyan">Andre</span> Vega
            </div>

            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Sobre mí</a>
                <a href="#tech-stack" onClick={() => setIsOpen(false)}>Certificados</a>
                <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
                <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
                <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
            </div>

            <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
