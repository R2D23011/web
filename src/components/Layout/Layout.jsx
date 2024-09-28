import { Header } from '../header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import { IconoFlotante } from '../IconoFlotanteWhatsapp/IconoFlotante'
import { Sponsor } from '../sponsors/sponsor'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet />
        </main>
        <IconoFlotante></IconoFlotante>
        <Sponsor></Sponsor>
        <Footer/>
    </div>
  )
}
