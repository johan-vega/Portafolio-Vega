import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <p className="footer-brand">
                        <span>Andre Vega</span> | Portafolio Web
                    </p>
                    <p className="footer-copy">
                        Estudiante de Desarrollo de Aplicaciones Web en SENATI.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#contacto">Contacto</a>
                </div>

                <p className="footer-year">© {year} Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
