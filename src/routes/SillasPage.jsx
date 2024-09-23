import { SillaCatalog } from '../components/catalogo/SillaCatalog'
import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'
import { IconoFlotante } from '../components/IconoFlotanteWhatsapp/IconoFlotante'

export const SillasPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <Header></Header>
        <main>
        <SillaCatalog></SillaCatalog>
        </main>
        <IconoFlotante></IconoFlotante>
        
        <Footer></Footer>
    </div>
  )
}

