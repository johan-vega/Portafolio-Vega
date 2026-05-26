import './Perfil.css';

const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>
                <div className="sobre-mi-grid">
                    <div className="card perfil-card">
                        <div className="card-header">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3>Perfil profesional</h3>
                        </div>

                        <p className="card-text">
                            Estudiante de Informática y Desarrollo de Páginas Web cursando el 3er ciclo
                            en SENATI, cumpliendo satisfactoriamente el 100% de los cursos del ciclo.
                        </p>

                        <p className="card-text">
                            Cuento con experiencia en desarrollo de software, utilizando tecnologías como
                            React, Laravel, NodeJS, HTML, MySQL y CSS; además de desarrollo de dashboards
                            interactivos con Figma, modelado de datos en SQL y automatizaciones con Python.
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <h3>Educación</h3>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INFORMATICA Y DESARROLLO DE APLICACIONES WEB </h4>
                                    <span className="badge badge-outline">En Curso</span>
                                </div>
                                <span className="timeline-date">SENATI</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>COMPUTACION E INFORMATICA</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">IISEP</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>PYTHON FUNDAMENTOS</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">Lima Educa</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>FUNDAMENTOS DE FIGMA PARA UX/UI +IA</h4>
                                    <span className="badge badge-outline">Constancia</span>
                                </div>
                                <span className="timeline-date">CTIC-UNI</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>JAVASCRIPT BASICO + IA</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CTIC-UNI</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>CONCEPTOS BASICOS DE HARDWARE DE COMPUTADORAS</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>CONCIENCIA DIGITAL</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>CREACION DE CONTENIDO DIGITAL, COMUNICACION Y COLABORACION ONLINE</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>DESCUBRIENDO EL EMPRENDIMIENTO</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>DIGITAL SAFETY AND SECURITY AWARENESS</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>HTML ESSENTIALS</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INTRODUCCION A CISCO PACKET TRACER</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INTRODUCCION A CIBERSEGURIDAD</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INTRODUCCION A LA CIENCIA DE DATOS</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INTRODUCCION A LA IOT Y TRANSFORMACION DIGITAL</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>USO DE COMPUTADORAS Y DISPOSITIVOS MOVILES</h4>
                                    <span className="badge badge-outline">Certificado</span>
                                </div>
                                <span className="timeline-date">CISCO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Perfil;
