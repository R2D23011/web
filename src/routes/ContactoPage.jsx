import ContactForm from "../components/Contacto/contacto"


export const ContactoPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%', minHeight:'600px'}}>
        <main>
          <h1 className="sillah1" style={{marginTop: '92px', textAlign: 'center', marginBottom: '20px'}}>Contáctanos</h1>
          <ContactForm/>
        </main>
    </div>
  )
}
