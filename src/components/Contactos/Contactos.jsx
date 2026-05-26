import './Contactos.css';

const canales = [
    {
        id: 1,
        nombre: 'WhatsApp',
        descripcion: 'Agrega tu enlace directo para consultas rápidas, coordinación o cotizaciones.',
        valor: 'https://wa.me/51926532594',
        cta: 'Abrir WhatsApp'
    },
    {
        id: 2,
        nombre: 'Gmail',
        descripcion: 'Deja tu correo profesional para propuestas, colaboraciones o solicitudes formales.',
        valor: 'mailto:johan.vi.em.99@gmail.com',
        cta: 'Enviar correo'
    },
    {
        id: 3,
        nombre: 'GitHub',
        descripcion: 'Comparte tu perfil para mostrar repositorios, prácticas y proyectos publicados.',
        valor: 'https://github.com/johan-vega',
        cta: 'Ver perfil'
    }
];

const Contactos = () => {
    return (
        <section id="contacto" className="contacto-section">
            <div className="contacto-container">
                <div className="contacto-copy">
                    <span className="contacto-badge">Contacto</span>
                    <h2 className="section-title">Hablemos de tu idea o proyecto</h2>
                    <p className="contacto-text">
                        Dejé esta sección lista con placeholders para que solo reemplaces tus enlaces
                        reales de WhatsApp, Gmail y GitHub sin tocar la estructura del diseño.
                    </p>
                </div>

                <div className="contacto-grid">
                    {canales.map((canal) => (
                        <article key={canal.id} className="contacto-card">
                            <h3>{canal.nombre}</h3>
                            <p>{canal.descripcion}</p>
                            <a href={canal.valor} target="_blank" rel="noopener noreferrer" className="contacto-link">
                                {canal.cta}
                            </a>
                            <code>{canal.valor}</code>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contactos;
