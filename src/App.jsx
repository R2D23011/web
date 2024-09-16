import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { SillasPage } from './routes/SillasPage'
import { MesasPage } from './routes/MesasPage'
import { EscritoriosPage } from './routes/EscritoriosPage'
import { ContactoPage } from './routes/ContactoPage'




const App = () => {

  return (
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sillasCatalog" element={<SillasPage />} />
            <Route path='/mesasCatalog' element={<MesasPage />}></Route>
            <Route path='/escritoriosCatalog' element={<EscritoriosPage/>}></Route>
            <Route path='/contacto' element={<ContactoPage />}></Route>
        </Routes>
      </Router>
  )
}

export default App;
