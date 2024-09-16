import Footer from '../components/footer/footer'
import { Header } from '../components/header/header'

export const SillasPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <Header></Header>
        <main>
          <h1 style={{marginTop: '120px', textAlign: 'center'}}>Sillas Page</h1>
        </main>
        <Footer></Footer>
    </div>
  )
}

