import {Carousel} from '../components/carousel/carousel'
import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'


export const HomePage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <Header></Header>
        <main>
          <Carousel></Carousel>
        </main>
        <Footer></Footer>
    </div>
  )
}

