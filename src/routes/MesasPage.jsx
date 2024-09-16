import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'
import {Carousel } from '../components/carousel/carousel'

export const MesasPage = () => {
  return (
    <>
        <Header></Header>
        <h1 style={{marginTop: '120px', textAlign: 'center'}}>Mesas Page</h1>
        <Carousel></Carousel>
        <Footer></Footer>
    </>
  )
}

