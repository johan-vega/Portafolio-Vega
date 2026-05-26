import './Servicios.css';

const serviciosData = [
    {
        id: 1,
        titulo: 'Prototipado de páginas web',
        descripcion: 'Diseño de wireframes y prototipos funcionales para validar ideas antes del desarrollo visual y técnico.',
        etiqueta: 'UX/UI base'
    },
    {
        id: 2,
        titulo: 'Diseño de landing page',
        descripcion: 'Maquetación de páginas de aterrizaje limpias, modernas y enfocadas en presentar un producto, servicio o marca personal.',
        etiqueta: 'Frontend'
    },
    {
        id: 3,
        titulo: 'Diseño de páginas web',
        descripcion: 'Construcción de interfaces responsivas para portafolios, páginas institucionales y sitios informativos.',
        etiqueta: 'Responsive'
    },
    {
        id: 4,
        titulo: 'Diseño de soluciones tecnológicas',
        descripcion: 'Propuesta de soluciones web para necesidades académicas, administrativas o comerciales de pequeña escala.',
        etiqueta: 'Análisis'
    },
    {
        id: 5,
        titulo: 'Mantenimiento de páginas web y APIs',
        descripcion: 'Apoyo en corrección de errores, mejoras visuales y ajustes iniciales en integraciones frontend y backend.',
        etiqueta: 'Soporte'
    },
    {
        id: 6,
        titulo: 'Integración con bases de datos',
        descripcion: 'Desarrollo de formularios, operaciones CRUD y conexión con estructuras de datos para proyectos de práctica.',
        etiqueta: 'Full stack junior'
    }
];

const Servicios = () => {
    return (
        <section id="servicios" className="servicios-section">
            <div className="servicios-container">
                <div className="servicios-heading">
                    <span className="servicios-badge">Servicios en formación</span>
                    <h2 className="section-title">Servicios que puedo desarrollar</h2>
                    <p className="servicios-intro">
                        Como estudiante de 3er ciclo de Desarrollo de Aplicaciones Web en SENATI,
                        presento servicios alineados a proyectos académicos, emprendimientos y
                        necesidades web que requieran diseño, maquetación y soporte técnico inicial.
                    </p>
                </div>

                <div className="servicios-grid">
                    {serviciosData.map((servicio) => (
                        <article key={servicio.id} className="servicio-card">
                            <div className="servicio-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 5h16"></path>
                                    <path d="M4 12h16"></path>
                                    <path d="M4 19h10"></path>
                                </svg>
                            </div>
                            <span className="servicio-tag">{servicio.etiqueta}</span>
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
