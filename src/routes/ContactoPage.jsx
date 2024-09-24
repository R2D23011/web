import ContactForm from "../components/Contacto/contacto"


export const ContactoPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <main>
          <h1 className="sillah1" style={{marginTop: '120px', textAlign: 'center', marginBottom: '20px'}}>Contactanos</h1>
          <ContactForm/>
        </main>
    </div>
  )
}
