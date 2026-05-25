import './Banner.css';
import MiFoto from '../../assets/MiFoto.jpeg';
const Banner = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                {/* 1. Etiqueta de Estado (Badge) */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    Disponible para nuevos proyectos
                </div>
                {/* 2. Foto de Perfil Circular */}
                <div className="profile-photo-container">
                    {/* Reemplazar src con {miFoto} cuando importen su imagen local

*/}

                    <img
                        src={MiFoto}
                        alt="Foto de Perfil"
                        className="profile-photo"
                    />
                </div>
                {/* 3. Título Principal */}
                <h1 className="hero-title">
                    Andre <br />
                    <span className="text-cyan">Vega</span>
                </h1>
                {/* 4. Subtítulo (Rol) */}
                <h2 className="hero-subtitle">
                    Estudiante de 3er ciclo de Desarrollo de paginas web en SENATI</h2>
                {/* 5. Descripción */}
                <p className="hero-description">
                    Construyo Proyectos web modernos y responsivos utilizando las últimas tecnologías del mercado.
                    Mi pasión es crear experiencias digitales únicas que destaquen en el mundo online.
                </p>
                {/* 6. Botones de Acción */}
                <div className="hero-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>

                    <a href="#contacto" className="btn btn-secondary">Contáctame</a>

                </div>
            </div>
            {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
            <div className="scroll-indicator">
                ↓
            </div>
        </section>
    );
};
export default Banner;