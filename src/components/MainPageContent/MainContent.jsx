import { Link } from 'react-router-dom'
import './MainContent.css'

export const MainContent = () => {
  return (
    <div className="container-fluid maincontent">
        <h1 className="display-4" style={{textAlign:'center'}}>Servicios Integrales del Norte</h1>
        <p className="p m-5">
        &nbsp; En Servicios Integrales del Norte, nos especializamos en ofrecer soluciones integrales para equipar tu espacio de trabajo con la mejor calidad y diseño. Con años de experiencia en el mercado, nos hemos consolidado como líderes en la venta de mesas, sillas y escritorios para oficinas, proporcionando productos que combinan funcionalidad, ergonomía y estilo.
        <br/>
        <br/>
        <b className='h4'>Nuestro Catálogo</b>

        <br/>
        <br/>
        <ul>
            <li>
                <b className='h5'>Mesas de Oficina:</b> <br/>
                Disponemos de una amplia variedad de mesas que se adaptan a cualquier necesidad, desde mesas de reuniones amplias y elegantes hasta mesas de trabajo compactas y funcionales. Nuestros diseños incluyen materiales de alta calidad como madera, vidrio y metal, garantizando durabilidad y un acabado impecable.
            </li>

            <li className='mt-2'>
                <b className='h5'>Sillas Ergonomicas:</b> <br/>
                Sabemos lo importante que es la comodidad en el trabajo. Por eso, nuestras sillas están diseñadas para ofrecer el máximo confort y soporte durante largas jornadas laborales. Contamos con sillas ajustables, con soporte lumbar y materiales transpirables que se adaptan a cada usuario.
            </li>

            <li className='mt-2'>
                <b className='h5'>-Escritorios Modernos:</b> <br/>
                Nuestros escritorios están pensados para optimizar tu espacio de trabajo. Ofrecemos modelos ajustables en altura, escritorios en L para mayor superficie y opciones con almacenamiento integrado. Cada escritorio está diseñado para mejorar la productividad y mantener un entorno de trabajo ordenado y eficiente.
            </li>
        </ul>

        <br/>

        <b className='h4'>Compromiso con la Calidad</b>

        <br/>
        <br/>

        &nbsp;En Servicios Integrales del Norte, nos comprometemos a ofrecer productos de la más alta calidad. Cada pieza de mobiliario es cuidadosamente seleccionada y sometida a rigurosos controles de calidad para asegurar su resistencia y durabilidad. Además, trabajamos con proveedores certificados que comparten nuestro compromiso con la excelencia.

        <br/>
        <br/>

        <b className='h4'>Servicio Personalizado</b>

        <br/>
        <br/>

        &nbsp;Entendemos que cada oficina es única, por lo que ofrecemos un servicio personalizado para ayudarte a encontrar las soluciones que mejor se adapten a tus necesidades. Nuestro equipo de expertos está disponible para asesorarte en la elección de los muebles ideales y para diseñar espacios de trabajo que inspiren y motiven.</p>
        <div className="container text-center" id='galeria'>
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/sillasCatalog'>
                        <img src='https://www.tupi.com.py/imagen/600__600__354b77-lvs-009.jpg' alt='imagen de silla'/>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/mesasCatalog'>
                        <img src='https://abba.com.py/wp-content/uploads/2023/06/Mesa-Oficina-ME4119-Nogal-Ambiente-Abba-Muebles-600x600.jpg'/>
                    </Link>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Link className='text-decoration-none text-black' to='/escritoriosCatalog'>
                        <img src='https://i0.wp.com/galeeshome.com/wp-content/uploads/2023/01/ESCRITORIO-NIA.jpg?fit=1000%2C1000&ssl=1'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
