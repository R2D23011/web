
import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'
import { IconoFlotante } from '../components/IconoFlotanteWhatsapp/IconoFlotante'

export const EscritoriosPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <Header></Header>
        <main>
          <h1 style={{marginTop: '120px', textAlign: 'center'}}>Escritorios Page</h1>
        </main>
        <IconoFlotante></IconoFlotante>
        <Footer></Footer>
    </div>
  )
}
