import './Proyectos.css';
import correos from '../../assets/correos.png';
import cafeteria from '../../assets/cafeteria.png';
import matricula from '../../assets/matricula.png';
import scc from '../../assets/scc.png';
import vendefacil from '../../assets/vendefacil.png';
import ClafioPeru from '../../assets/ClafioPeru.png';
import appinventario from '../../assets/appinventario.png';

const Proyectos = () => {
    const proyectosData = [
        {
            id: 1,
            imagen: correos,
            titulo: 'Sistema de Gestión de Correos',
            descripcion: 'Sistema web para envío de correos electrónicos orientado al contacto con clientes.',
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL'],
            linkDemo: 'https://envio-correo.infinityfree.me/?i=1',
            linkCodigo: '#'
        },
        {
            id: 2,
            imagen: cafeteria,
            titulo: 'Aplicación web de ventas para una cafetería',
            descripcion: 'Aplicación web para la gestión de ventas en una cafetería, incluyendo inventario, pedidos y reportes.',
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL'],
            linkDemo: 'https://proyecto-cafeteria.infinityfreeapp.com/index.php?i=1',
            linkCodigo: 'https://github.com/johan-vega/proyecto-cafeteria'
        },
        {
            id: 3,
            imagen: matricula,
            titulo: 'Sistema web de matrícula para una institución educativa',
            descripcion: 'Sistema web para la gestión de matrículas, permitiendo registro de estudiantes, selección de cursos y pagos en línea.',
            tecnologias: ['React', 'Laravel', 'MySQL'],
            linkDemo: 'https://bd-matricula-avegam1.infinityfree.me/?i=2',
            linkCodigo: '#'
        },
        {
            id: 4,
            imagen: scc,
            titulo: 'Sistema de gestión de citas para una clínica',
            descripcion: 'Sistema web para la gestión de citas médicas, permitiendo a los pacientes programar y administrar sus atenciones.',
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Laravel', 'MySQL'],
            linkDemo: 'https://entregable-grupo3.infinityfreeapp.com/login',
            linkCodigo: 'https://github.com/johan-vega/entregableGrupo3'
        },
        {
            id: 5,
            imagen: vendefacil,
            titulo: 'Tienda Virtual para accesorios, ropa y tecnologia',
            descripcion: 'Tienda virtual para la venta de accesorios, ropa y tecnología, con catálogo de productos, Solo FrontEnd con REACT',
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'REACT'],
            linkDemo: 'https://vende-facil.vercel.app/#/',
            linkCodigo: 'https://github.com/johan-vega/VendeFacil'
        },
        {
            id: 6,
            imagen: ClafioPeru,
            titulo: 'Tienda Virtual de emprendimiento de Ropa Oversize',
            descripcion: 'Tienda virtual para la venta de ropa oversize, con catálogo de productos y gestion de pedidos, panel de administrador, sistema Front y Backend, implementado orginalmente con react y Laravel, pero unificado en un solo proyecto en Laravel para facilitar su despliegue en hosting gratuito.',
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'REACT', 'Laravel', 'MySQL'],
            linkDemo: 'https://clafioperu.freedev.app/?i=1'

        },
        {
            id: 7,
            imagen: appinventario,
            titulo: 'sistema de gestion de pedidos e inventarios',
            descripcion: 'proyecto final de ciclo, consiste solo en formar el front de un sistema de gestion de inventario y pedidos con clientes',
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'REACT'],
            linkDemo: 'https://app-inventario-iota.vercel.app/',
            linkCodigo: 'https://github.com/johan-vega/app_inventario'

        }
    ];

    return (
        <section id="proyectos" className="proyectos-section">
            <div className="proyectos-container">
                <h2 className="section-title text-center">Proyectos Destacados</h2>

                <div className="proyectos-grid">
                    {proyectosData.map((proyecto) => (
                        <article key={proyecto.id} className="proyecto-card">
                            <div className="proyecto-imagen">
                                <img
                                    src={proyecto.imagen}
                                    alt={`Captura de ${proyecto.titulo}`}
                                    loading="lazy"
                                />
                            </div>

                            <div className="proyecto-contenido">
                                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                                <p className="proyecto-desc">{proyecto.descripcion}</p>

                                <div className="proyecto-tags">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="proyecto-links">
                                    <a
                                        href={proyecto.linkDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-proyecto btn-demo"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Demo en Vivo
                                    </a>

                                    <a
                                        href={proyecto.linkCodigo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-proyecto btn-codigo"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                        Ver Código
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;
