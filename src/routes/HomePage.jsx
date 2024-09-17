import {Carousel} from '../components/carousel/carousel'
import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'
import { MainContent } from '../components/MainPageContent/MainContent'


export const HomePage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <Header></Header>
        <main>
          <Carousel></Carousel>
          <MainContent></MainContent>
        </main>
        <Footer></Footer>
    </div>
  )
}

