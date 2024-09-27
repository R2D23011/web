import {Carousel} from '../components/carousel/carousel'
import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'
import { IconoFlotante } from '../components/IconoFlotanteWhatsapp/IconoFlotante'
import { MainContent } from '../components/MainPageContent/MainContent'


export const HomePage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%', minHeight:'600px'}}>
        <Header></Header>
        <main className='mainpage'>
          <Carousel></Carousel>
          <MainContent></MainContent>
          <IconoFlotante></IconoFlotante>
        </main>
        <Footer></Footer>
    </div>
  )
}

