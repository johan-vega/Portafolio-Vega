import './Perfil.css';
const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>
                <div className="sobre-mi-grid">
                    {/* =====================================
TARJETA 1: PERFIL PROFESIONAL
====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Usuario (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>

                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3>Perfil profesional</h3>
                        </div>
                        <p className="card-text">
                            Estudiante de Informatica y Desarrollo de paginas web cursando el 3er ciclo en SENATI, cumpliendo satisfactoriamente el 100% de los cursos del ciclo.  <br /><br />
                            <br /><br />
                            experiencia en desarrollo de software,
                            utilizando tecnologías como React, Laravel, NodeJS, HTML, MySQL,
                            CSS, etc. y en desarrollo de dashboards interactivos mediante
                            FIGMA, modelado de datos en SQL y automatizaciones
                            con Python.
                        </p>
                    </div>
                    {/* ===========TARJETA 2: EDUCACIÓN ====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Educación / Sombrero (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <h3>Educación</h3>
                        </div>
                        <div className="timeline">
                            {/* Ítem de Educación 1 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INFORMATICA Y DESARROLLO DE APLICACIONES WEB </h4>
                                    <span className="badge badge-outline">En Curso</span>
                                </div>
                                <span className="timeline-date">SENATI</span>
                            </div>
                            {/* Ítem de Educación 2 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>Computación e Informática</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">I.S.T CESCA</span>
                            </div>
                            {/* Ítem de Educación 3 */}
                            <div className="timeline-item">
                                <div className="timeline-header"></div>
                                <h4>MOS Excel Expert</h4>
                                <span className="badge badge-outline">Certificación

                                    Internacional</span>
                            </div>
                            <span className="timeline-date">MICROSOFT</span>
                        </div>
                        {/* Ítem de Educación 4 */}
                        <div className="timeline-item">
                            <div className="timeline-header">
                                <h4>Power BI Data Analyst Associate - PL - 300</h4>
                                <span className="badge badge-outline">Certificación

                                    Internacional</span>
                            </div>
                            <span className="timeline-date">MICROSOFT</span>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};
export default Perfil;