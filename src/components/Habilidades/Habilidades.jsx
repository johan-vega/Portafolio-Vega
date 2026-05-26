import './Habilidades.css';

const Habilidades = () => {
    const skillsData = [
        {
            id: 1,
            titulo: 'COMPUTACION E INFORMATICA',
            descripcion: 'Uso de herramientas de ofimática.',
            nivel: 'INTERMEDIO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1tsUiIJyhCMjVH-SJvjFe-CP8UEbto9ig/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 2,
            titulo: 'PYTHON FUNDAMENTOS',
            descripcion: 'Sintaxis básica, estructuras de datos, programación orientada a objetos, manejo de archivos y bibliotecas estándar.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1BiNAV0S1_GKZBnPCqgYJhj_-0rVQ_4wW/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 3,
            titulo: 'FUNDAMENTOS DE FIGMA PARA UX/UI + IA',
            descripcion: 'Diseño de interfaces, prototipado, colaboración en tiempo real e integración de IA para optimizar flujos de trabajo.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/11Rwl8qJ-2HWoZSpcGVEIX1v1YsqILAyK/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 4,
            titulo: 'JAVASCRIPT BASICO + IA',
            descripcion: 'Sintaxis básica, tipos de datos, estructuras de control, funciones, objetos, DOM y eventos.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/13Em7DSyKzgHLuImcxEMpS_wgpyZZ2ZwD/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 5,
            titulo: 'CONCEPTOS BASICOS DE HARDWARE DE COMPUTADORAS',
            descripcion: 'Componentes de hardware, arquitectura, CPU, memoria, almacenamiento y conceptos básicos de redes.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1ViCweg_YtfRkTBfMBdE-ULj0iPinP1Gf/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 6,
            titulo: 'CONCIENCIA DIGITAL',
            descripcion: 'Uso responsable de la tecnología, seguridad en línea, privacidad digital y ética digital.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1M7md8LKOHcGVKXdnZNV0brBU87w0zAI_/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 7,
            titulo: 'CREACION DE CONTENIDO DIGITAL, COMUNICACION Y COLABORACION ONLINE',
            descripcion: 'Creación de contenido digital, comunicación online y colaboración en plataformas de productividad.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1IgBoS_7nRZLL-WkO8g15oQ8yaidEBtri/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 8,
            titulo: 'DESCUBRIENDO EL EMPRENDIMIENTO',
            descripcion: 'Ideas de negocio, validación de mercado, estrategias de marketing e identificación de oportunidades.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1puGqE-28ehCJd9zq_lIj76zHANs8UzmM/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 9,
            titulo: 'SEGURIDAD DIGITAL Y CONCIENCIA DE SEGURIDAD',
            descripcion: 'Buenas prácticas de ciberseguridad, privacidad de datos y reconocimiento de amenazas en línea.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1B-lmuVpnwQc0OiKtJH_kta-0MWKiCXUX/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 10,
            titulo: 'HTML FUNDAMENTOS',
            descripcion: 'Estructura de documentos, etiquetas, atributos y fundamentos de maquetación web.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1BJTiY2brZOZOQn1ivscl2Eensf8SGZTK/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 11,
            titulo: 'INTRODUCCION A CISCO PACKET TRACER',
            descripcion: 'Simulación y configuración básica de redes de computadoras con Cisco Packet Tracer.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1Wv-oOop48B1NdRiKri0qBfMo2qYi92mb/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 12,
            titulo: 'INTRODUCCION A CIBERSEGURIDAD',
            descripcion: 'Fundamentos de seguridad digital, prevención de riesgos y protección de información.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1VXG_y9-A1hOOGqZUACKqE8ibe-ERIHJr/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 13,
            titulo: 'INTRODUCCION A LA CIENCIA DE DATOS',
            descripcion: 'Conceptos fundamentales de análisis, visualización y modelado de datos.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1DQYYLkMl5hEZ0_mkx2Iyhkdq3ZCx4Mfb/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 14,
            titulo: 'INTRODUCCION A LA IOT Y TRANSFORMACION DIGITAL',
            descripcion: 'Bases de IoT, aplicaciones prácticas y su impacto en la transformación digital.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1_-XYl6f5TMvKZmfWcSa-x3DeGLYO04zl/view?usp=sharing',
            estado: 'completado'
        },
        {
            id: 15,
            titulo: 'USO DE COMPUTADORAS Y DISPOSITIVOS MOVILES',
            descripcion: 'Uso básico de computadoras, dispositivos móviles, navegación, aplicaciones y gestión de archivos.',
            nivel: 'BASICO',
            botonTexto: 'VER CERTIFICADO',
            linkCertificado: 'https://drive.google.com/file/d/1mNB-Gg_VwWh-zlqSa0a_DQchaojVToqE/view?usp=sharing',
            estado: 'completado'
        }
    ];

    return (
        <section id="tech-stack" className="habilidades-section">
            <div className="habilidades-container">
                <h2 className="section-title text-center">Habilidades Destacadas</h2>

                <div className="habilidades-grid">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="skill-card">
                            <div className="skill-header">
                                <div className="skill-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                </div>

                                <a
                                    href={skill.linkCertificado}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}
                                >
                                    {skill.botonTexto}
                                </a>
                            </div>

                            <div className="skill-body">
                                <h3 className="skill-title">{skill.titulo}</h3>
                                <p className="skill-desc">{skill.descripcion}</p>
                                <span className="skill-level">{skill.nivel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;
